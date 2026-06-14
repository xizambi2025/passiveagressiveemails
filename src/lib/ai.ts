import OpenAI from "openai";

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
const DEFAULT_MODEL = "openai/gpt-4o-mini";

if (
  process.env.NODE_ENV === "development" &&
  process.env.OPENROUTER_ALLOW_INSECURE_LOCAL_TLS === "true"
) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

function getClient() {
  if (!process.env.OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not configured");
  }

  return new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: OPENROUTER_BASE_URL,
    defaultHeaders: {
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://www.passiveaggressiveemails.com",
      "X-Title": "PassiveAggressiveEmails.com",
    },
  });
}

export interface GenerateEmailParams {
  recipient: string;
  situation: string;
  tone: number;
  length: "short" | "medium" | "long";
}

export interface GeneratedEmail {
  subject: string;
  body: string;
  aggressionScore: number;
  damageAssessment: string;
  corporateTranslation: {
    whatYouMean: string;
    corporateVersion: string;
  };
}

const TONE_LABELS: Record<number, string> = {
  1: "Professional",
  2: "Slightly Annoyed",
  3: "Concerned",
  4: "Passive Aggressive",
  5: "Per My Previous Email",
  6: "Corporate Assassin",
};

const LENGTH_TOKENS: Record<string, string> = {
  short: "2-3 sentences",
  medium: "4-6 sentences",
  long: "8-12 sentences",
};

export async function generateEmail(
  params: GenerateEmailParams
): Promise<GeneratedEmail> {
  const { recipient, situation, tone, length } = params;
  const toneLabel = TONE_LABELS[tone] || "Professional";
  const lengthGuide = LENGTH_TOKENS[length] || "4-6 sentences";

  const client = getClient();
  const response = await client.chat.completions.create({
    model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
    temperature: 0.8,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are an expert at writing passive-aggressive workplace emails. You craft emails that are technically professional but dripping with subtext. You respond in valid JSON only.",
      },
      {
        role: "user",
        content: `Write a passive-aggressive email with these parameters:
- Recipient: ${recipient}
- Situation: ${situation}
- Tone level: ${tone}/6 (${toneLabel})
- Length: ${lengthGuide}

Respond with a JSON object containing:
{
  "subject": "email subject line",
  "body": "the full email body text",
  "aggressionScore": <number 0-100 based on how aggressive it is>,
  "damageAssessment": "<one sentence assessment of potential damage>",
  "corporateTranslation": {
    "whatYouMean": "<what the sender actually means in plain language>",
    "corporateVersion": "<the polished corporate version of that meaning>"
  }
}`,
      },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("No response from AI provider");
  }

  return JSON.parse(content) as GeneratedEmail;
}

export default getClient;

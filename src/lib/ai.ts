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

const SCORE_BANDS: Record<number, { min: number; max: number; guidance: string }> = {
  1: { min: 10, max: 24, guidance: "warm, helpful, no visible hostility" },
  2: { min: 25, max: 39, guidance: "polite with a faint edge" },
  3: { min: 40, max: 54, guidance: "formal concern, clearly losing patience" },
  4: { min: 55, max: 72, guidance: "obvious subtext, still plausibly professional" },
  5: { min: 73, max: 88, guidance: "documented frustration, receipt-heavy, escalation implied" },
  6: { min: 89, max: 100, guidance: "career-limiting, highly documented, escalation-ready" },
};

export async function generateEmail(
  params: GenerateEmailParams
): Promise<GeneratedEmail> {
  const { recipient, situation, tone, length } = params;
  const toneLabel = TONE_LABELS[tone] || "Professional";
  const lengthGuide = LENGTH_TOKENS[length] || "4-6 sentences";
  const scoreBand = SCORE_BANDS[tone] || SCORE_BANDS[3];

  const client = getClient();
  const response = await client.chat.completions.create({
    model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
    temperature: 0.8,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are an expert at writing passive-aggressive workplace emails. You craft fresh emails that are technically professional but calibrated to the requested tone. Never reuse the same wording for different tone levels. You respond in valid JSON only.",
      },
      {
        role: "user",
        content: `Write a passive-aggressive email with these parameters:
- Recipient: ${recipient}
- Situation: ${situation}
- Tone level: ${tone}/6 (${toneLabel})
- Length: ${lengthGuide}

Tone calibration:
- Level 1: warm, helpful, safe, no visible hostility.
- Level 2: polite with mild impatience.
- Level 3: formal concern, controlled pressure.
- Level 4: clear passive aggression with plausible deniability.
- Level 5: "per my previous email" energy; documented frustration, receipts, escalation implied.
- Level 6: "Corporate Assassin"; sharper than level 5, escalation-ready, highly documented, socially devastating while still technically professional.

Score rules:
- The aggressionScore must be between ${scoreBand.min} and ${scoreBand.max}.
- For this tone, aim for: ${scoreBand.guidance}.
- Tone 6 must be materially harsher than tone 5 in subject, body, damageAssessment, and score.
- Use 100 only for a maximum-damage email involving receipts, repeated failures, visibility/escalation, or formal consequences.

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

  return normalizeGeneratedEmail(JSON.parse(content) as GeneratedEmail, tone);
}

export default getClient;

function normalizeGeneratedEmail(email: GeneratedEmail, tone: number): GeneratedEmail {
  const scoreBand = SCORE_BANDS[tone] || SCORE_BANDS[3];
  const numericScore = Number(email.aggressionScore);
  const score = Number.isFinite(numericScore) ? numericScore : scoreBand.min;

  return {
    ...email,
    aggressionScore: Math.min(scoreBand.max, Math.max(scoreBand.min, Math.round(score))),
  };
}

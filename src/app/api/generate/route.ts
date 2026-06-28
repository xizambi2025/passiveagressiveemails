import { NextRequest, NextResponse } from "next/server";
import { generateEmail } from "@/lib/ai";
import { generateLocalEmail } from "@/lib/generator";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";
import { checkGenerateRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  let body: {
    recipient?: string;
    situation?: string;
    tone?: number;
    length?: "short" | "medium" | "long";
    locale?: Locale;
  } = {};

  try {
    body = await request.json();
    const { recipient, situation, tone, length } = body;
    const locale = body.locale && isLocale(body.locale) ? body.locale : DEFAULT_LOCALE;

    if (!recipient || !situation || !tone || !length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (tone < 1 || tone > 6) {
      return NextResponse.json(
        { error: "Tone must be between 1 and 6" },
        { status: 400 }
      );
    }

    if (!["short", "medium", "long"].includes(length)) {
      return NextResponse.json(
        { error: "Length must be short, medium, or long" },
        { status: 400 }
      );
    }

    const ip = getClientIp(request);
    const { success, remaining, reset } = await checkGenerateRateLimit(ip);

    if (!success) {
      const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
      return NextResponse.json(
        { error: "Rate limit exceeded", retryAfter },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(Math.ceil(reset / 1000)),
          },
        },
      );
    }

    const email = await generateEmail({ recipient, situation, tone, length, locale });

    return NextResponse.json(email, {
      headers: {
        "X-RateLimit-Remaining": String(remaining),
        "X-RateLimit-Reset": String(Math.ceil(reset / 1000)),
      },
    });

  } catch (error) {
    console.error("Generation error:", error);

    const { recipient, situation, tone, length } = body;
    const locale = body.locale && isLocale(body.locale) ? body.locale : DEFAULT_LOCALE;

    if (recipient && situation && tone && length) {
      return NextResponse.json(
        generateLocalEmail({ recipient, situation, tone, length, locale })
      );
    }

    return NextResponse.json({ error: "Failed to generate email" }, { status: 500 });
  }
}

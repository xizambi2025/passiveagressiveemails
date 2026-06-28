import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import type { NextRequest } from "next/server";

const GENERATIONS_PER_HOUR = 5;
const HOUR_MS = 60 * 60 * 1000;

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  reset: number;
};

function getRedis(): Redis | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

let ratelimit: Ratelimit | null = null;

function getRatelimit(): Ratelimit | null {
  if (ratelimit) return ratelimit;
  const redis = getRedis();
  if (!redis) return null;
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(GENERATIONS_PER_HOUR, "1 h"),
    prefix: "pa:generate",
  });
  return ratelimit;
}

const devStore = new Map<string, { count: number; resetAt: number }>();

function checkInMemory(ip: string): RateLimitResult {
  const now = Date.now();
  const entry = devStore.get(ip);

  if (!entry || now >= entry.resetAt) {
    devStore.set(ip, { count: 1, resetAt: now + HOUR_MS });
    return { success: true, remaining: GENERATIONS_PER_HOUR - 1, reset: now + HOUR_MS };
  }

  if (entry.count >= GENERATIONS_PER_HOUR) {
    return { success: false, remaining: 0, reset: entry.resetAt };
  }

  entry.count += 1;
  return {
    success: true,
    remaining: GENERATIONS_PER_HOUR - entry.count,
    reset: entry.resetAt,
  };
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) return ip;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

export async function checkGenerateRateLimit(ip: string): Promise<RateLimitResult> {
  const limiter = getRatelimit();

  if (limiter) {
    const { success, remaining, reset } = await limiter.limit(ip);
    return { success, remaining, reset };
  }

  if (process.env.NODE_ENV === "development") {
    return checkInMemory(ip);
  }

  console.error(
    "[rate-limit] No Redis configured — rate limiting disabled in production. " +
      "Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN, or connect Vercel KV.",
  );
  return { success: true, remaining: GENERATIONS_PER_HOUR, reset: Date.now() + HOUR_MS };
}

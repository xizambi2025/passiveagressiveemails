import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Passive Aggressive Email Generator";
  const score = searchParams.get("score");
  const tone = searchParams.get("tone");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFBF5",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#8B7355",
              marginBottom: "20px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            PassiveAggressiveEmails.com
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "30px",
              fontFamily: "serif",
            }}
          >
            {title}
          </div>
          {score && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  color: "#C45A3C",
                  fontWeight: "bold",
                }}
              >
                Aggression Score: {score}/100
              </div>
            </div>
          )}
          {tone && (
            <div
              style={{
                fontSize: "22px",
                color: "#666",
                marginTop: "15px",
                padding: "8px 24px",
                border: "2px solid #e5e5e5",
                borderRadius: "100px",
              }}
            >
              {tone}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

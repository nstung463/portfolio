import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ff6a1a",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, letterSpacing: 6 }}>
          <span style={{ fontWeight: 700 }}>NST</span>
          <span style={{ opacity: 0.85 }}>{siteConfig.url.replace("https://", "")}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 800, lineHeight: 1, letterSpacing: -6 }}>AI ENGINEER</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 40, fontWeight: 600 }}>{siteConfig.name}</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 30, opacity: 0.9 }}>
            Grounded answers, not guesses — RAG pipelines &amp; agent harnesses in production.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["RAG", "AGENT HARNESS", "MCP", "SANDBOX", "HITL"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                border: "2px solid rgba(255,255,255,0.55)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 24,
                letterSpacing: 2,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

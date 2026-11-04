import { ImageResponse } from "next/og";
export const alt =
  "Sumanth N M — Engineering Intelligence. Building What’s Next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#080B12",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        color: "#F5F7FA",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>Sumanth N M</span>
        <span style={{ color: "#65D6E8", fontSize: 18 }}>
          AI ENGINEER / INDIA
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
          lineHeight: 1.05,
        }}
      >
        <span>Engineering Intelligence.</span>
        <span style={{ color: "#5B9CFF" }}>Building What’s Next.</span>
      </div>
      <div style={{ display: "flex", fontSize: 18, color: "#9AA7B8" }}>
        GENERATIVE AI · RETRIEVAL SYSTEMS · MCP · BACKEND ENGINEERING
      </div>
    </div>,
    { ...size },
  );
}

import { ImageResponse } from "next/og";
export const alt =
  "Sumanth N M — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        color: "#f5f5f7",
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
        <span style={{ color: "#a1a1a6", fontSize: 18 }}>
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
        <span>Sumanth N M.</span>
        <span style={{ color: "#2997ff" }}>AI Engineer.</span>
      </div>
      <div style={{ display: "flex", fontSize: 18, color: "#a1a1a6" }}>
        GENERATIVE AI · RETRIEVAL SYSTEMS · MCP · BACKEND ENGINEERING
      </div>
    </div>,
    { ...size },
  );
}

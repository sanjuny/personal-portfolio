import { ImageResponse } from "next/og";

export const alt =
  "Sanjay Kumar M. — Software Engineer II, Full-Stack and AI-Assisted Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e0c",
          color: "#f4f1ea",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 4,
            color: "#d8c4a4",
            textTransform: "uppercase",
          }}
        >
          Software Engineer II
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, letterSpacing: -2 }}>
            Sanjay Kumar M.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 28,
              color: "#a8a49a",
            }}
          >
            Full-Stack · AI-Assisted Engineering
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

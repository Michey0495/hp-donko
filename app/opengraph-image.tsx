import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "どんこ | 高知はりまや町の郷土料理と鰹のたたき";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          position: "relative",
        }}
      >
        {/* Beni accent border */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "1px solid rgba(155, 35, 53, 0.4)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#C9A84C",
              letterSpacing: "0.3em",
            }}
          >
            土佐の郷土料理と鰹
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#F2EDE4",
              letterSpacing: "0.3em",
            }}
          >
            どんこ
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(242, 237, 228, 0.5)",
              letterSpacing: "0.15em",
            }}
          >
            高知県高知市はりまや町2-1-21
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

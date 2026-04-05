import { ImageResponse } from "next/og";

export const alt = "Switch Signal - A modern quiz-game hub";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #fff8f5 0%, #f8f1ed 52%, #f6efea 100%)",
          color: "#18181b",
          fontFamily:
            '"Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 12%, rgba(251,207,232,0.95), rgba(251,207,232,0) 28%), radial-gradient(circle at 88% 22%, rgba(191,219,254,0.9), rgba(191,219,254,0) 26%), radial-gradient(circle at 50% 110%, rgba(253,224,71,0.45), rgba(253,224,71,0) 30%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 36,
            borderRadius: 42,
            background: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 30px 100px rgba(15,23,42,0.10)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              color: "#52525b",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.65)",
              }}
            >
              Modern Quiz-Game Hub
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 820,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 96,
                lineHeight: 0.94,
                letterSpacing: "-0.06em",
                fontWeight: 700,
              }}
            >
              Switch Signal
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                lineHeight: 1.35,
                color: "#3f3f46",
              }}
            >
              A Thai-first hub for stylish quiz games, character reads, and
              share-worthy interactive drops.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 26,
              color: "#52525b",
            }}
          >
            <div style={{ display: "flex" }}>switchsignal.app</div>
            <div style={{ display: "flex", gap: 12 }}>
              {["Character", "Quiz Games", "TH/EN", "Shareable", "Live Now"].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    padding: "10px 16px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.68)",
                    border: "1px solid rgba(255,255,255,0.65)",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

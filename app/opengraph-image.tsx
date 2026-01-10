import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#062338",
          position: "relative",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 420px at 25% 35%, rgba(14,165,168,0.35) 0%, rgba(6,35,56,0) 60%), radial-gradient(820px 520px at 80% 70%, rgba(255,90,95,0.28) 0%, rgba(6,35,56,0) 62%)",
          }}
        />

        <div
          style={{
            width: 980,
            borderRadius: 48,
            border: "1px solid rgba(255,255,255,0.14)",
            backgroundColor: "rgba(247,243,234,0.92)",
            padding: "56px 60px",
            boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 18,
                  backgroundColor: "#ECFEFF",
                  border: "1px solid rgba(14,165,168,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0EA5A8",
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                PP
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: "#062338", letterSpacing: 1 }}>
                  Packwood Plates
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(6,35,56,0.70)", letterSpacing: 4 }}>
                  CUSTOM METAL WALL ART
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(14,165,168,0.10)",
                border: "1px solid rgba(14,165,168,0.25)",
                color: "#0EA5A8",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Coastal Steel
            </div>
          </div>

          <div style={{ fontSize: 56, fontWeight: 900, color: "#062338", lineHeight: 1.05 }}>
            Your Wall Has a Story.
          </div>

          <div style={{ fontSize: 22, color: "rgba(11,42,58,0.82)", lineHeight: 1.4, maxWidth: 820 }}>
            Hand-crafted metal art built from real license plates, sports history, and personal moments.
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                backgroundColor: "#FF5A5F",
                color: "white",
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Design Your Own
            </div>
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                backgroundColor: "#ECFEFF",
                border: "1px solid rgba(14,165,168,0.35)",
                color: "#062338",
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Browse Teams
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";
import { SITE_OWNER, SITE_TITLE, TECH_SKILLS } from "@/app/lib/constants";

export const alt = `${SITE_OWNER} — ${SITE_TITLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0c0a09",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: "50%",
            backgroundColor: "#f59e0b",
            marginBottom: 36,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 700,
            color: "#0c0a09",
          }}
        >
          OH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#fafaf9",
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_OWNER}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a8a29e",
            marginTop: 14,
          }}
        >
          {SITE_TITLE}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            gap: 14,
          }}
        >
          {TECH_SKILLS.slice(0, 6).map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #292524",
                fontSize: 20,
                color: "#d6d3d1",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: skill.color,
                }}
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

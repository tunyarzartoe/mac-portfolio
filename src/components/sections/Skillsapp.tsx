"use client";
import { useEffect, useState } from "react";
import { SKILLS } from "@/src/data/portfolio";

const CATEGORY_META: Record<string, { icon: string; color: string }> = {
  Frontend:       { icon: "🎨", color: "var(--blue)" },
  Backend:        { icon: "⚙️", color: "var(--green)" },
  "Tools & Infra": { icon: "🛠️", color: "var(--yellow)" },
};

const TOOLS = [
  "Git", "Docker", "Vercel", "Figma",
  "VS Code", "Neovim", "Postman", "GitHub Actions", "Linux",
];

function AnimatedBar({ level, delay }: { level: number; delay: number }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(level), delay);
    return () => clearTimeout(t);
  }, [level, delay]);

  const color =
    level >= 85
      ? "linear-gradient(90deg,#4ade80,#22d3ee)"
      : level >= 70
      ? "linear-gradient(90deg,#60a5fa,#818cf8)"
      : "linear-gradient(90deg,#fbbf24,#f97316)";

  return (
    <div
      style={{
        flex: 1,
        height: 5,
        borderRadius: 4,
        background: "var(--navy-2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${w}%`,
          borderRadius: 4,
          background: color,
          transition: "width 0.9s cubic-bezier(.4,0,.2,1)",
          boxShadow: w > 0 ? "0 0 8px rgba(74,222,128,0.3)" : "none",
        }}
      />
    </div>
  );
}

export default function SkillsApp() {
  let delay = 0;

  return (
    <div className="win-body">
      {/* Header */}
      <div
        style={{
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 600, marginBottom: 2 }}>
          Skills & Proficiencies
        </p>
        <p style={{ color: "var(--muted)", fontSize: 10 }}>
          Proficiency bars animate on open · color = skill level
        </p>
      </div>

      {/* Skill categories */}
      {Object.entries(SKILLS).map(([cat, items]) => {
        const meta = CATEGORY_META[cat] ?? { icon: "📦", color: "var(--text)" };
        delay += 50;
        return (
          <div key={cat} style={{ marginBottom: 20 }}>
            {/* Category header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 14 }}>{meta.icon}</span>
              <p
                style={{
                  color: meta.color,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: ".1em",
                }}
              >
                {cat.toUpperCase()}
              </p>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "var(--border)",
                  marginLeft: 4,
                }}
              />
            </div>

            {/* Skill rows */}
            {items.map((s, i) => {
              delay += 70;
              return (
                <div
                  key={s.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                    padding: "5px 8px",
                    borderRadius: 6,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span
                    style={{
                      color: "var(--muted)",
                      fontSize: 11,
                      minWidth: 170,
                      flexShrink: 0,
                    }}
                  >
                    {s.name}
                  </span>
                  <AnimatedBar level={s.level} delay={delay + i * 60} />
                  <span
                    style={{
                      color:
                        s.level >= 85
                          ? "var(--green)"
                          : s.level >= 70
                          ? "var(--blue)"
                          : "var(--yellow)",
                      fontSize: 10,
                      minWidth: 34,
                      textAlign: "right",
                      fontWeight: 600,
                    }}
                  >
                    {s.level}%
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 14,
          marginBottom: 16,
          padding: "8px 10px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 8,
          border: "1px solid var(--border)",
        }}
      >
        {[
          { label: "Expert (85%+)", color: "#4ade80" },
          { label: "Proficient (70%+)", color: "#60a5fa" },
          { label: "Familiar (<70%)", color: "#fbbf24" },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span
              style={{
                width: 10,
                height: 4,
                borderRadius: 2,
                background: l.color,
                display: "inline-block",
              }}
            />
            <span style={{ color: "var(--muted)", fontSize: 9 }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Tools section */}
      <div style={{ paddingTop: 12, borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 14 }}>🔧</span>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: ".1em",
            }}
          >
            DAILY TOOLS
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {TOOLS.map((t) => (
            <span
              key={t}
              className="tech-tag"
              style={{
                fontSize: 10,
                padding: "3px 8px",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(74,222,128,0.5)";
                el.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
                el.style.color = "";
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
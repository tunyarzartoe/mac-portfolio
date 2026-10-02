"use client";
import { useState } from "react";
import { PROJECTS } from "@/src/data/portfolio";

const STATUS_COLOR: Record<string, string> = {
  live: "#4ade80",
  wip: "#fbbf24",
  archived: "#475569",
};

const STATUS_BG: Record<string, string> = {
  live: "rgba(74,222,128,0.1)",
  wip: "rgba(251,191,36,0.1)",
  archived: "rgba(71,85,105,0.1)",
};

export default function ProjectsApp() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="win-body">
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
          paddingBottom: 12,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 600, marginBottom: 2 }}>
            Projects
          </p>
          <p style={{ color: "var(--muted)", fontSize: 10 }}>
            {PROJECTS.length} project{PROJECTS.length !== 1 ? "s" : ""} · click to expand
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["live", "wip", "archived"].map((s) => (
            <span
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 9,
                color: STATUS_COLOR[s],
                textTransform: "uppercase",
                letterSpacing: ".06em",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: STATUS_COLOR[s],
                  display: "inline-block",
                }}
              />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {PROJECTS.map((p) => {
          const isOpen = open === p.id;
          return (
            <div
              key={p.id}
              className="proj-card"
              style={{
                borderRadius: 10,
                overflow: "hidden",
                transition: "border-color 0.18s, box-shadow 0.18s",
                boxShadow: isOpen
                  ? "0 0 0 1px rgba(74,222,128,0.2), 0 8px 32px rgba(0,0,0,0.3)"
                  : "none",
              }}
            >
              {/* Card header — always visible */}
              <div
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  cursor: "pointer",
                  background: isOpen ? "rgba(74,222,128,0.04)" : "transparent",
                  transition: "background 0.18s",
                }}
                onClick={() => setOpen(isOpen ? null : p.id)}
              >
                {/* Emoji icon */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 9,
                    background: "var(--navy-2)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {p.emoji}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Name + status + year */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 3,
                    }}
                  >
                    <span
                      style={{ color: "var(--blue)", fontWeight: 600, fontSize: 12 }}
                    >
                      {p.name}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        color: STATUS_COLOR[p.status],
                        background: STATUS_BG[p.status],
                        border: `1px solid ${STATUS_COLOR[p.status]}33`,
                        borderRadius: 4,
                        padding: "1px 6px",
                        letterSpacing: ".04em",
                      }}
                    >
                      {p.status}
                    </span>
                    <span style={{ color: "var(--muted)", fontSize: 9 }}>{p.year}</span>
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: 10,
                      lineHeight: 1.5,
                      marginBottom: 6,
                    }}
                  >
                    {p.tagline}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span style={{ color: "var(--muted)", fontSize: 9, alignSelf: "center" }}>
                        +{p.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Chevron */}
                <span
                  style={{
                    color: "var(--muted)",
                    fontSize: 10,
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    marginTop: 4,
                  }}
                >
                  ▼
                </span>
              </div>

              {/* Expanded details */}
              {isOpen && (
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "14px 14px 14px 64px",
                    background: "rgba(0,0,0,0.2)",
                    animation: "slideIn 0.18s ease",
                  }}
                >
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: 11,
                      lineHeight: 1.75,
                      marginBottom: 12,
                    }}
                  >
                    {p.desc}
                  </p>

                  <p
                    style={{
                      color: "var(--green)",
                      fontSize: 9,
                      letterSpacing: ".1em",
                      marginBottom: 6,
                    }}
                  >
                    HIGHLIGHTS
                  </p>
                  <div style={{ marginBottom: 12 }}>
                    {p.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 8,
                          marginBottom: 4,
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: "var(--green)", flexShrink: 0, marginTop: 1 }}>
                          →
                        </span>
                        <span
                          style={{ color: "var(--muted)", fontSize: 10, lineHeight: 1.65 }}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p
                    style={{
                      color: "var(--green)",
                      fontSize: 9,
                      letterSpacing: ".1em",
                      marginBottom: 6,
                    }}
                  >
                    FULL STACK
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
                    {p.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      paddingTop: 10,
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--blue)",
                          fontSize: 11,
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          textDecoration: "none",
                          padding: "4px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: 6,
                          transition: "border-color 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                        }}
                      >
                        🐙 GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--green)",
                          fontSize: 11,
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          textDecoration: "none",
                          padding: "4px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: 6,
                          transition: "border-color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--green)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                        }}
                      >
                        🌐 Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
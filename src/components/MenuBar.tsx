"use client";
import { useEffect, useState } from "react";
import { ME } from "@/src/data/portfolio";

interface Props {
  openWindow: (id: string) => void;
}

export default function MenuBar({ openWindow }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="menu-bar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
        padding: "10px 16px",
        background: "rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: "var(--green)", fontSize: 14, fontWeight: 700 }}></span>
        <span style={{ color: "var(--text)", fontSize: 12, fontWeight: 600 }}>
          {ME.handle}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {[
          { label: "About", id: "about" },
          { label: "Projects", id: "projects" },
          { label: "Skills", id: "skills" },
          { label: "Contact", id: "contact" },
          { label: "Terminal", id: "terminal" },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => openWindow(item.id)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--muted)",
              fontSize: 11,
              fontWeight: 500,
              padding: "6px 8px",
              borderRadius: 8,
              transition: "background 0.18s, color 0.18s",
            }}
            onMouseEnter={e => {
              const target = e.target as HTMLElement;
              target.style.color = "var(--text)";
              target.style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={e => {
              const target = e.target as HTMLElement;
              target.style.color = "var(--muted)";
              target.style.background = "transparent";
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <span style={{ color: "var(--muted)", fontSize: 10 }}>{time}</span>
    </div>
  );
}
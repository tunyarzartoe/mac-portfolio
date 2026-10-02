"use client";
import { useEffect, useRef, useState } from "react";
import { ME } from "@/src/data/portfolio";

interface Props {
  openWindow: (id: string) => void;
}

const NAV_ITEMS = [
  { label: "About",    id: "about"    },
  { label: "Projects", id: "projects" },
  { label: "Skills",   id: "skills"   },
  { label: "Contact",  id: "contact"  },
  { label: "Terminal", id: "terminal" },
];

export default function MenuBar({ openWindow }: Props) {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fmt = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          weekday: "short",
          month:   "short",
          day:     "numeric",
          hour:    "2-digit",
          minute:  "2-digit",
          hour12:  false,
        })
      );
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className="menu-bar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
        padding: "0 16px",
        height: 26,
        background: "rgba(6,13,26,0.9)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        zIndex: 1000,
        position: "relative",
      }}
    >
      {/* Left: Apple-ish logo + handle + nav dropdown */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Handle / "Apple logo" area */}
        <span
          style={{
            color: "var(--text)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".02em",
            cursor: "default",
          }}
        >
          {ME.handle}
        </span>

        {/* Nav items */}
        {NAV_ITEMS.map((item) => (
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
              padding: "0 6px",
              height: "100%",
              borderRadius: 4,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right: time */}
      <span style={{ color: "var(--muted)", fontSize: 10, flexShrink: 0 }}>{time}</span>
    </div>
  );
}
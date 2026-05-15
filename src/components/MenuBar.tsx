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
          weekday: "short", month: "short", day: "numeric",
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
        })
      );
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="menu-bar">
      {/* Left: apple + app name */}
      <span style={{ color: "var(--green)", fontWeight: 600, fontSize: 13 }}></span>
      <span style={{ color: "var(--text)", fontSize: 11, fontWeight: 500 }}>
        {ME.handle}
      </span>

      {/* Nav items */}
      {[
        { label: "About",    id: "about"    },
        { label: "Projects", id: "projects" },
        { label: "Skills",   id: "skills"   },
        { label: "Contact",  id: "contact"  },
        { label: "Terminal", id: "terminal" },
      ].map(item => (
        <button
          key={item.id}
          onClick={() => openWindow(item.id)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--muted)", fontSize: 11,
            padding: "0 4px",
            transition: "color 0.12s",
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--text)")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}
        >
          {item.label}
        </button>
      ))}

      {/* Right: clock */}
      <span style={{ marginLeft: "auto", color: "var(--muted)", fontSize: 10 }}>
        {time}
      </span>
    </div>
  );
}
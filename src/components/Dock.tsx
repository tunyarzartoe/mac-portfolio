"use client";
import { useState } from "react";

const APPS = [
  { id: "terminal", icon: "💻", label: "Terminal" },
  { id: "about",    icon: "👤", label: "About"    },
  { id: "projects", icon: "🗂️", label: "Projects"  },
  { id: "skills",   icon: "⚙️", label: "Skills"    },
  { id: "contact",  icon: "✉️", label: "Contact"   },
];

interface Props {
  openIds:    string[];
  openWindow: (id: string) => void;
}

export default function Dock({ openIds, openWindow }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="dock-bar">
      {APPS.map((app) => {
        const isOpen    = openIds.includes(app.id);
        const isHovered = hovered === app.id;

        return (
          <div
            key={app.id}
            className="dock-item"
            title={app.label}
            onClick={() => openWindow(app.id)}
            onMouseEnter={() => setHovered(app.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "relative" }}
          >
            {/* Tooltip label */}
            <div
              style={{
                position: "absolute",
                bottom: "calc(100% + 10px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(10,18,38,0.95)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "3px 8px",
                fontSize: 10,
                color: "var(--text)",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.15s ease",
                backdropFilter: "blur(8px)",
              }}
            >
              {app.label}
              {/* Arrow */}
              <span
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  width: 7,
                  height: 7,
                  background: "rgba(10,18,38,0.95)",
                  border: "1px solid var(--border)",
                  borderTop: "none",
                  borderLeft: "none",
                }}
              />
            </div>

            {/* Icon box */}
            <div
              className="dock-icon-box"
              style={{
                transform: isHovered ? "scale(1.22)" : "scale(1)",
                transition: "transform 0.18s cubic-bezier(.34,1.56,.64,1), border-color 0.15s",
                borderColor: isOpen
                  ? "rgba(74,222,128,0.5)"
                  : isHovered
                  ? "rgba(74,222,128,0.3)"
                  : "var(--border)",
                boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.4)" : "none",
              }}
            >
              {app.icon}
            </div>

            {/* Open indicator dot */}
            <div
              style={{
                width: isOpen ? 4 : 0,
                height: 4,
                borderRadius: "50%",
                background: "var(--green)",
                transition: "width 0.2s ease, opacity 0.2s ease",
                opacity: isOpen ? 1 : 0,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
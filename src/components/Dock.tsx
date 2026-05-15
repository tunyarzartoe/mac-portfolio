"use client";

const APPS = [
  { id: "terminal", icon: "💻", label: "Terminal"  },
  { id: "about",    icon: "👤", label: "About"     },
  { id: "projects", icon: "🗂️", label: "Projects"  },
  { id: "skills",   icon: "⚙️", label: "Skills"    },
  { id: "contact",  icon: "✉️", label: "Contact"   },
];

interface Props {
  openIds:    string[];
  openWindow: (id: string) => void;
}

export default function Dock({ openIds, openWindow }: Props) {
  return (
    <div className="dock-bar">
      {APPS.map(app => (
        <div
          key={app.id}
          className="dock-item"
          title={app.label}
          onClick={() => openWindow(app.id)}
        >
          <div className="dock-icon-box">{app.icon}</div>
          {openIds.includes(app.id) && <div className="dock-dot" />}
        </div>
      ))}
    </div>
  );
}
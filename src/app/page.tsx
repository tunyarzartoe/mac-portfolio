"use client";
import { useState, useCallback, useEffect } from "react";
import BootScreen from "@/src/components/BootScreen";
import MenuBar    from "@/src/components/MenuBar";
import Dock       from "@/src/components/Dock";
import Window     from "@/src/components/Window";
import Terminal   from "@/src/components/Terminal";

/* ── lazy app content ── */
import dynamic from "next/dynamic";
const AboutApp    = dynamic(() => import("@/src/components/sections/Aboutapp"));
const ProjectsApp = dynamic(() => import("@/src/components/sections/Projectsapp"));
const SkillsApp   = dynamic(() => import("@/src/components/sections/Skillsapp"));
const ContactApp  = dynamic(() => import("@/src/components/sections/Contactapp"));

type WinId = "terminal" | "about" | "projects" | "skills" | "contact";

const WIN_META: Record<WinId, { title: string; icon: string; size: { w: number; h: number } }> = {
  terminal: { title: "Terminal — zsh",   icon: "💻", size: { w: 680, h: 480 } },
  about:    { title: "About",            icon: "👤", size: { w: 520, h: 440 } },
  projects: { title: "Projects",         icon: "🗂️", size: { w: 620, h: 520 } },
  skills:   { title: "Skills",           icon: "⚙️", size: { w: 540, h: 460 } },
  contact:  { title: "Contact",          icon: "✉️", size: { w: 460, h: 360 } },
};

const STAGGER = 36;

interface WinState {
  id:         WinId;
  zIndex:     number;
  pos:        { x: number; y: number };
  minimized:  boolean;
  fullscreen: boolean;
}

let zCounter = 10;

export default function Page() {
  const [booted,  setBooted]  = useState(false);
  const [windows, setWindows] = useState<WinState[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight < 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* open or focus */
  const openWindow = useCallback((id: string) => {
    const wid = id as WinId;
    setWindows(prev => {
      const existing = prev.find(w => w.id === wid);
      if (existing) {
        // restore or bring to front
        return prev.map(w =>
          w.id === wid
            ? { ...w, zIndex: ++zCounter, minimized: false }
            : w
        );
      }

      const visibleCount = prev.filter(w => !w.minimized).length;
      const { w, h } = WIN_META[wid].size;

      const newWindow: WinState = {
        id: wid,
        zIndex: ++zCounter,
        minimized: false,
        fullscreen: false,
        pos: isMobile
          ? { x: 10, y: 40 + visibleCount * 60 }
          : {
              x: Math.max(60, (window.innerWidth  - w) / 2 + visibleCount * STAGGER),
              y: Math.max(40, (window.innerHeight - h) / 2 + visibleCount * STAGGER - 30),
            },
      };

      return [...prev, newWindow];
    });
  }, [isMobile]);

  const closeWindow = useCallback((id: WinId) => setWindows(p => p.filter(w => w.id !== id)), []);
  const focusWindow = useCallback((id: WinId) => setWindows(p => p.map(w =>
    w.id === id ? { ...w, zIndex: ++zCounter, minimized: false } : w
  )), []);

  const minimizeWindow = useCallback((id: WinId) => {
    setWindows(p => p.map(w =>
      w.id === id ? { ...w, minimized: true } : w
    ));
  }, []);

  const toggleFullscreen = useCallback((id: WinId) => {
    setWindows(p => p.map(w =>
      w.id === id
        ? { ...w, fullscreen: !w.fullscreen, minimized: false, zIndex: ++zCounter }
        : w
    ));
  }, []);

  /* open terminal on boot */
  useEffect(() => { if (booted) openWindow("terminal"); }, [booted, openWindow]);

  function renderContent(id: WinId) {
    switch (id) {
      case "terminal": return <Terminal />;
      case "about":    return <AboutApp />;
      case "projects": return <ProjectsApp />;
      case "skills":   return <SkillsApp />;
      case "contact":  return <ContactApp />;
    }
  }

  if (!booted) return <BootScreen onDone={() => setBooted(true)} />;

  if (isMobile) {
    // Mobile layout: full-screen windows with bottom navigation
    const visibleWindows = windows.filter(w => !w.minimized);
    const activeWindow = visibleWindows.reduce((top, next) =>
      !top || next.zIndex > top.zIndex ? next : top,
    null as WinState | null);

    return (
      <div className="desktop-bg" style={{ width: "100vw", height: "100dvh", position: "relative", overflow: "hidden" }}>
        <MenuBar openWindow={openWindow} />

        {activeWindow && (
          <div
            className="mac-win"
            style={{
              position: 'fixed',
              top: '26px',
              left: '0',
              width: '100vw',
              height: 'calc(100dvh - 26px - 80px)',
              zIndex: 10,
            }}
          >
            <div className="win-titlebar">
              <span
                className="traffic-dot"
                style={{ background: "#ef4444" }}
                onClick={() => closeWindow(activeWindow.id)}
                title="Close"
              />
              <span
                className="traffic-dot"
                style={{ background: "#fbbf24" }}
                onClick={() => minimizeWindow(activeWindow.id)}
                title="Minimize"
              />
              <span
                className="traffic-dot"
                style={{ background: "#22c55e" }}
                onClick={() => toggleFullscreen(activeWindow.id)}
                title="Toggle full screen"
              />

              <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "var(--muted)" }}>
                {WIN_META[activeWindow.id].icon} {WIN_META[activeWindow.id].title}
              </span>
              <span style={{ width: 36 }} />
            </div>
            {renderContent(activeWindow.id)}
          </div>
        )}

        {/* Mobile bottom navigation */}
        <div className="mobile-nav">
          {[
            { id: "terminal", icon: "💻", label: "Terminal" },
            { id: "about", icon: "👤", label: "About" },
            { id: "projects", icon: "🗂️", label: "Projects" },
            { id: "skills", icon: "⚙️", label: "Skills" },
            { id: "contact", icon: "✉️", label: "Contact" },
          ].map(app => (
            <button
              key={app.id}
              onClick={() => openWindow(app.id)}
              className={`mobile-nav-item ${windows.some(w => w.id === app.id) ? 'active' : ''}`}
            >
              <span className="mobile-nav-icon">{app.icon}</span>
              <span className="mobile-nav-label">{app.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="desktop-bg" style={{ width: "100vw", height: "100dvh", position: "relative", overflow: "hidden" }}>
      <MenuBar openWindow={openWindow} />

      {windows.filter(w => !w.minimized).map(w => (
        <Window
          key={w.id}
          id={w.id}
          title={WIN_META[w.id].title}
          icon={WIN_META[w.id].icon}
          defaultPos={w.pos}
          defaultSize={WIN_META[w.id].size}
          zIndex={w.zIndex}
          isMobile={isMobile}
          fullscreen={w.fullscreen}
          onFocus={() => focusWindow(w.id)}
          onClose={() => closeWindow(w.id)}
          onMinimize={() => minimizeWindow(w.id)}
          onToggleFullscreen={() => toggleFullscreen(w.id)}
        >
          {renderContent(w.id)}
        </Window>
      ))}

      <Dock
        openIds={windows.map(w => w.id)}
        openWindow={openWindow}
      />
    </div>
  );
}
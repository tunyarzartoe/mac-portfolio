"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  id:          string;
  title:       string;
  icon:        string;
  defaultPos:  { x: number; y: number };
  defaultSize: { w: number; h: number };
  zIndex:      number;
  onFocus:     () => void;
  onClose:     () => void;
  onMinimize?: () => void;
  onToggleFullscreen?: () => void;
  fullscreen?: boolean;
  children:    ReactNode;
  isMobile?:   boolean;
}

export default function Window({
  id, title, icon, defaultPos, defaultSize,
  zIndex, onFocus, onClose, onMinimize, onToggleFullscreen,
  fullscreen = false, children, isMobile = false,
}: Props) {
  const [pos,  setPos]  = useState(defaultPos);
  const [size, setSize] = useState(defaultSize);
  const dragging = useRef(false);
  const offset   = useRef({ x: 0, y: 0 });

  function onMouseDown(e: React.MouseEvent) {
    if (isMobile || fullscreen) return; // Disable dragging on mobile and full-screen mode
    onFocus();
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  }

  useEffect(() => {
    function move(e: MouseEvent) {
      if (!dragging.current) return;
      setPos({
        x: Math.max(0, e.clientX - offset.current.x),
        y: Math.max(26, e.clientY - offset.current.y),
      });
    }
    function up() { dragging.current = false; }
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup",   up);
    };
  }, []);

  const windowStyle = fullscreen && !isMobile ? {
    left: 12,
    top: 12,
    width: 'calc(100vw - 24px)',
    height: 'calc(100vh - 24px)',
    position: 'fixed' as const,
    zIndex,
  } : {
    left: pos.x,
    top: pos.y,
    width: isMobile ? '100vw' : size.w,
    height: isMobile ? 'calc(100vh - 106px)' : size.h,
    zIndex,
    position: isMobile ? 'fixed' as const : 'absolute' as const,
  };

  return (
    <div
      className={`mac-win${fullscreen && !isMobile ? ' fullscreen' : ''}`}
      style={windowStyle}
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div
        className="win-titlebar"
        onMouseDown={onMouseDown}
        style={{ cursor: isMobile ? 'default' : 'grab' }}
      >
        {/* Traffic lights */}
        <button
          className="traffic-dot"
          style={{ background: "#ef4444" }}
          onClick={e => { e.stopPropagation(); onClose(); }}
          title="Close"
          aria-label="Close"
        />
        <button
          className="traffic-dot"
          style={{ background: "#fbbf24" }}
          onClick={e => { e.stopPropagation(); onMinimize?.(); }}
          title="Minimize"
          aria-label="Minimize"
        >
          <span className="traffic-icon">─</span>
        </button>
        <button
          className="traffic-dot"
          style={{ background: "#22c55e" }}
          onClick={e => { e.stopPropagation(); onToggleFullscreen?.(); }}
          title={fullscreen ? "Exit full screen" : "Full screen"}
          aria-label="Toggle full screen"
        >
          <span className="traffic-icon">⤢</span>
        </button>

        {/* Title */}
        <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "var(--muted)" }}>
          {icon} {title}
        </span>

        {/* Right spacer */}
        <span style={{ width: 36 }} />
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
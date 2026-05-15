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
  children:    ReactNode;
  isMobile?:   boolean;
}

export default function Window({
  id, title, icon, defaultPos, defaultSize,
  zIndex, onFocus, onClose, onMinimize, children, isMobile = false,
}: Props) {
  const [pos,  setPos]  = useState(defaultPos);
  const [size, setSize] = useState(defaultSize);
  const dragging = useRef(false);
  const offset   = useRef({ x: 0, y: 0 });

  function onMouseDown(e: React.MouseEvent) {
    if (isMobile) return; // Disable dragging on mobile
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

  return (
    <div
      className="mac-win"
      style={{
        left: pos.x, top: pos.y,
        width: isMobile ? '100vw' : size.w,
        height: isMobile ? 'calc(100vh - 106px)' : size.h,
        zIndex,
        position: isMobile ? 'fixed' : 'absolute',
      }}
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div
        className="win-titlebar"
        onMouseDown={onMouseDown}
        style={{ cursor: isMobile ? 'default' : 'grab' }}
      >
        {/* Traffic lights */}
        <span
          className="traffic-dot"
          style={{ background: "#ef4444" }}
          onClick={e => { e.stopPropagation(); onClose(); }}
          title="Close"
        />
        <span
          className="traffic-dot"
          style={{ background: "#fbbf24" }}
          onClick={e => { e.stopPropagation(); onMinimize?.(); }}
          title="Minimize"
        />
        <span
          className="traffic-dot"
          style={{ background: "#22c55e" }}
          title="Full screen (disabled)"
        />

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
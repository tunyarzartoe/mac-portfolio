"use client";
import { useEffect, useRef, useState } from "react";

const LINES = [
  { t: 0,    text: "Darwin Kernel Version 24.4.0: Fri Apr 18; root:xnu-11215.101.15/RELEASE_ARM64_T6020" },
  { t: 160,  text: "Copyright (c) 1982, 2026 Apple Inc. All rights reserved." },
  { t: 280,  text: "" },
  { t: 400,  text: "Booting mac-portfolio.app ..." },
  { t: 560,  text: "Loading components .......... [████████████████████] 100%" },
  { t: 760,  text: "Mounting /home/tunyarzartoe/portfolio" },
  { t: 920,  text: "Starting shell session ..." },
  { t: 1060, text: "" },
  { t: 1180, text: "Last login: on ttys001" },
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  // Use a ref so the keydown handler always sees the latest value
  const readyRef = useRef(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach(({ t, text }) => {
      timers.push(setTimeout(() => setShown((p) => [...p, text]), t));
    });
    timers.push(
      setTimeout(() => {
        setReady(true);
        readyRef.current = true;
      }, 1600)
    );

    const handler = () => {
      if (readyRef.current) onDone();
    };
    window.addEventListener("keydown", handler);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", handler);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 desktop-bg flex items-center justify-center cursor-pointer z-50"
      onClick={() => ready && onDone()}
    >
      <div className="font-mono text-xs max-w-xl w-full px-8 space-y-0.5">
        {shown.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-3" />
          ) : (
            <p key={i} className="boot-line" style={{ color: "var(--green)", opacity: 0.85 }}>
              {line}
            </p>
          )
        )}

        {shown.length > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
            <span
              className="cursor-blink inline-block"
              style={{
                width: 7,
                height: 14,
                background: "var(--green)",
                display: "inline-block",
              }}
            />
            {ready && (
              <span style={{ color: "var(--muted)", fontSize: 10, animation: "bootFade 0.3s ease" }}>
                click or press any key to continue →
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
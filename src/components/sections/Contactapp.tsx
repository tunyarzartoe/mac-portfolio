"use client";
import { useState } from "react";
import { ME, SOCIALS } from "@/src/data/portfolio";
import ProfilePhoto from "@/public/profile.jpeg";
import Image from "next/image";

const SOCIAL_ICONS: Record<string, string> = {
  Email: "✉️",
  GitHub: "🐙",
  LinkedIn: "💼",
  Website: "🌐",
};

export default function ContactApp() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(ME.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="win-body">
      {/* Avatar + name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 16,
          paddingBottom: 14,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            padding: 2,
            borderRadius: "50%",
            background: "linear-gradient(135deg,var(--green),var(--blue))",
            boxShadow: "0 0 22px rgba(74,222,128,0.22)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#0f172a",
            }}
          >
            <Image
              src={ProfilePhoto}
              alt={ME.name}
              width={60}
              height={60}
              priority
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
            {ME.name}
          </p>
          <p style={{ color: "var(--green)", fontSize: 11, marginBottom: 1 }}>{ME.title}</p>
          <p style={{ color: "var(--muted)", fontSize: 10 }}>📍 {ME.location}</p>
        </div>

        {ME.available && (
          <span
            style={{
              fontSize: 9,
              border: "1px solid var(--green)",
              borderRadius: 4,
              padding: "3px 8px",
              color: "var(--green)",
              background: "rgba(74,222,128,0.07)",
              letterSpacing: ".05em",
              flexShrink: 0,
            }}
          >
            ● open to work
          </span>
        )}
      </div>

      {/* Message */}
      <p
        style={{
          color: "var(--muted)",
          fontSize: 11,
          lineHeight: 1.8,
          marginBottom: 16,
          paddingBottom: 14,
          borderBottom: "1px solid var(--border)",
        }}
      >
        Always open to new opportunities, collaborations, or a chat about web tech.
        Best way to reach me is email — I typically reply within 24 hours on weekdays.
      </p>

      {/* Social links */}
      <p style={{ color: "var(--green)", fontSize: 10, letterSpacing: ".08em", marginBottom: 10 }}>
        CONTACT LINKS
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {SOCIALS.map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 10px",
              borderRadius: 8,
              border: "1px solid transparent",
              transition: "background 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "transparent";
            }}
          >
            <span style={{ fontSize: 16, width: 24, textAlign: "center", flexShrink: 0 }}>
              {SOCIAL_ICONS[s.label] ?? "🔗"}
            </span>
            <span style={{ color: "var(--muted)", fontSize: 11, minWidth: 62, flexShrink: 0 }}>
              {s.label}
            </span>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue)", fontSize: 11, flex: 1, wordBreak: "break-all" }}
            >
              {s.value}
            </a>
            {s.label === "Email" && (
              <button
                onClick={copyEmail}
                style={{
                  background: copied ? "rgba(74,222,128,0.12)" : "transparent",
                  border: `1px solid ${copied ? "var(--green)" : "var(--border)"}`,
                  borderRadius: 5,
                  color: copied ? "var(--green)" : "var(--muted)",
                  fontSize: 9,
                  padding: "3px 8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {copied ? "✓ copied!" : "copy"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p style={{ color: "var(--muted)", fontSize: 10, marginTop: 16, opacity: 0.7 }}>
        Response time:{" "}
        <span style={{ color: "var(--text)" }}>within 24 hours on weekdays</span>
      </p>
    </div>
  );
}
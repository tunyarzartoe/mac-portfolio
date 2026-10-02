"use client";
import { ME, EXPERIENCE, EDUCATION } from "@/src/data/portfolio";
import ProfilePhoto from "@/public/profile.jpeg";
import Image from "next/image";

const WORK_HISTORY = [
  {
    title: "Web Developer",
    company: "Kumo Solutions Software Company",
    period: "2023 – 2024",
    logo: "KS",
    color: "var(--blue)",
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Web Developer",
    company: "Evercomm Singapore",
    period: "2023 – 2024",
    logo: "ES",
    color: "var(--green)",
    tech: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Web Developer",
    company: "Host Myanmar Mandalay",
    period: "2022 – 2023",
    logo: "HM",
    color: "var(--yellow)",
    tech: ["HTML/CSS", "JavaScript", "PHP"],
  },
];

const EDUCATION_HISTORY = [
  {
    title: "東京IT&プログラミング＆会計専門学校",
    period: "2026 – Present",
    logo: "IT",
    color: "var(--blue)",
    type: "専門学校",
    location: "Tokyo, Japan",
  },
  {
    title: "東京明日アカデミー日本語学校",
    period: "2024 – 2026",
    logo: "日",
    color: "var(--green)",
    type: "語学学校",
    location: "Tokyo, Japan",
  },
  {
    title: "Technological University Mandalay",
    period: "2018 – 2022",
    logo: "TU",
    color: "var(--yellow)",
    type: "B.E. Computer Engineering",
    location: "Mandalay, Myanmar",
  },
];

const QUICK_LINKS = [
  { label: "Email", value: ME.email, href: `mailto:${ME.email}` },
  { label: "GitHub", value: ME.github.replace("https://", ""), href: ME.github },
  { label: "Website", value: ME.website.replace("https://", ""), href: ME.website },
];

function Section({ title }: { title: string }) {
  return (
    <p
      style={{
        color: "var(--green)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: ".1em",
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {title}
      <span
        style={{
          flex: 1,
          height: 1,
          background: "var(--border)",
          display: "inline-block",
        }}
      />
    </p>
  );
}

export default function AboutApp() {
  return (
    <div className="win-body">
      {/* ── Hero ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 18,
          paddingBottom: 16,
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 68,
            height: 68,
            padding: 2,
            borderRadius: "50%",
            background: "linear-gradient(135deg,var(--green),var(--blue))",
            boxShadow: "0 0 28px rgba(74,222,128,0.22)",
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
              width={68}
              height={68}
              priority
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{ color: "var(--text)", fontSize: 14, fontWeight: 600, marginBottom: 3 }}
          >
            {ME.name}
          </p>
          <p style={{ color: "var(--green)", fontSize: 11, marginBottom: 2 }}>{ME.title}</p>
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
            ● available
          </span>
        )}
      </div>

      {/* ── Bio ── */}
      <div style={{ marginBottom: 18 }}>
        <Section title="ABOUT" />
        {ME.bio.map((line, i) => (
          <p
            key={i}
            style={{
              color: "var(--muted)",
              fontSize: 11,
              lineHeight: 1.8,
              marginBottom: 5,
            }}
          >
            {line}
          </p>
        ))}
        <p
          style={{
            color: "var(--muted)",
            fontSize: 11,
            lineHeight: 1.8,
            marginTop: 6,
          }}
        >
          This macOS-inspired portfolio is built as an interactive terminal experience
          with draggable windows, keyboard navigation, and 25+ terminal commands.
        </p>
      </div>

      {/* ── Quick links ── */}
      <div style={{ marginBottom: 18 }}>
        <Section title="CONTACT" />
        {QUICK_LINKS.map(({ label, value, href }) => (
          <div
            key={label}
            style={{ display: "flex", gap: 12, marginBottom: 5, alignItems: "center" }}
          >
            <span
              style={{ color: "var(--green)", minWidth: 62, fontSize: 11, flexShrink: 0 }}
            >
              {label}
            </span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue)", fontSize: 11, wordBreak: "break-all" }}
            >
              {value}
            </a>
          </div>
        ))}
      </div>

      {/* ── Work history ── */}
      <div style={{ marginBottom: 18 }}>
        <Section title="WORK HISTORY" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {WORK_HISTORY.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: "10px 12px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Logo circle */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "var(--navy-2)",
                  border: `1px solid ${item.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                  fontSize: 11,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {item.logo}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "var(--text)",
                    fontSize: 11,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: item.color, fontSize: 10, marginBottom: 4 }}>
                  {item.company}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 5 }}>
                  {item.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span style={{ color: "var(--muted)", fontSize: 9, flexShrink: 0 }}>
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div>
        <Section title="EDUCATION" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {EDUCATION_HISTORY.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: "10px 12px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "var(--navy-2)",
                  border: `1px solid ${item.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                  fontSize: 11,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {item.logo}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "var(--text)",
                    fontSize: 11,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: item.color, fontSize: 10, marginBottom: 2 }}>
                  {item.type}
                </p>
                <p style={{ color: "var(--muted)", fontSize: 9 }}>📍 {item.location}</p>
              </div>
              <span style={{ color: "var(--muted)", fontSize: 9, flexShrink: 0 }}>
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
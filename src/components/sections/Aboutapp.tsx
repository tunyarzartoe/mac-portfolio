"use client";
import { ME, EXPERIENCE, EDUCATION } from "@/src/data/portfolio";
import ProfilePhoto from "@/public/profile.jpeg"
import Image from "next/image";

const WORK_HISTORY = [
  { title: "Web Developer", company: "Kumo Solutions Software Company", period: "2023 - 2024", logo: "KS" },
  { title: "Web Developer", company: "Evercomm Singapore", period: "2023 - 2024", logo: "ES" },
  { title: "Web Developer", company: "Host Myanmar Mandalay", period: "2022 - 2023", logo: "HM" },
];

const EDUCATION_HISTORY = [
  { title: "東京IT&プログラミング＆会計専門学校", period: "2026 - Present", logo: "IT" },
  { title: "東京明日アカデミー日本語学校", period: "2024 - 2026", logo: "日" },
  { title: "Technological University Mandalay", period: "2018 - 2022", logo: "TU" },
];

export default function AboutApp() {
  return (
    <div className="win-body">
      {/* Hero */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, paddingBottom: 14, borderBottom: "1px solid var(--border)" }}>
<div
  style={{
    width: 64,
    height: 64,
    padding: 2,
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,var(--green),var(--blue))",
    boxShadow: "0 0 25px rgba(0,255,180,.2)",
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
      alt="Tun Yar Zar Toe"
      width={60}
      height={60}
      priority
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
</div>
        {/* <div style={{
          width:52, height:52, borderRadius:"50%",
          background:"var(--navy-2)", border:"2px solid var(--green)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:24, flexShrink:0,
        }}>
          {ME.name.charAt(0)}
        </div> */}
        <div>
          <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 500 }}>{ME.name}</p>
          <p style={{ color: "var(--green)", fontSize: 11 }}>{ME.title}</p>
          <p style={{ color: "var(--muted)", fontSize: 10 }}>{ME.location}</p>
        </div>
        {ME.available && (
          <span style={{
            marginLeft: "auto", fontSize: 9, border: "1px solid var(--green)",
            borderRadius: 4, padding: "2px 7px", color: "var(--green)"
          }}>
            ● available
          </span>
        )}
      </div>

      {/* Bio */}
      <p style={{ color: "var(--green)", fontSize: 10, marginBottom: 5, letterSpacing: ".08em" }}>ABOUT</p>
      {ME.bio.map((line, i) => (
        <p key={i} style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.75, marginBottom: 4 }}>{line}</p>
      ))}
      <p style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.75, marginBottom: 10 }}>
        This new macOS-inspired portfolio is a redesigned version of my work, built as an interactive terminal experience with draggable windows, window controls, and keyboard-friendly navigation.
      </p>

      {/* Quick info */}
      <div style={{ marginTop: 14, marginBottom: 14, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
        {[
          ["Email", ME.email],
          ["GitHub", ME.github],
          ["Website", ME.website],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: 12, marginBottom: 3 }}>
            <span style={{ color: "var(--green)", minWidth: 60, fontSize: 11 }}>{k}</span>
            <a href={k === "Email" ? `mailto:${v}` : v} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--blue)", fontSize: 11 }}>{v}</a>
          </div>
        ))}
      </div>

      {/* Work history */}
      <p style={{ color: "var(--green)", fontSize: 10, marginBottom: 8, letterSpacing: ".08em" }}>WORK HISTORY</p>
      {WORK_HISTORY.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "var(--navy-2)", border: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--green)", fontSize: 11, fontWeight: 700,
          }}>
            {item.logo}
          </div>
          <div>
            <p style={{ color: "var(--text)", fontSize: 11, fontWeight: 500, marginBottom: 2 }}>{item.title}</p>
            <p style={{ color: "var(--blue)", fontSize: 10, marginBottom: 2 }}>{item.company}</p>
            <p style={{ color: "var(--muted)", fontSize: 10 }}>{item.period}</p>
          </div>
        </div>
      ))}

      {/* Experience */}
      <p style={{ color: "var(--green)", fontSize: 10, marginBottom: 8, letterSpacing: ".08em" }}>EXPERIENCE</p>
      {EXPERIENCE.map((job, i) => (
        <div key={i} style={{ borderLeft: "2px solid var(--border)", paddingLeft: 10, marginBottom: 12, position: "relative" }}>
          <div style={{ position: "absolute", left: -5, top: 4, width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
          <p style={{ color: "var(--text)", fontSize: 11, fontWeight: 500 }}>{job.role}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
            <span style={{ color: "var(--blue)", fontSize: 10 }}>{job.company}</span>
            <span style={{ color: "var(--muted)", fontSize: 10 }}>{job.period}</span>
          </div>
          {job.bullets.map((b, j) => (
            <div key={j} style={{ display: "flex", gap: 5, marginBottom: 1 }}>
              <span style={{ color: "var(--green)" }}>▸</span>
              <span style={{ color: "var(--muted)", fontSize: 10, lineHeight: 1.6 }}>{b}</span>
            </div>
          ))}
        </div>
      ))}

      {/* Education */}
      <p style={{ color: "var(--green)", fontSize: 10, marginTop: 6, marginBottom: 6, letterSpacing: ".08em" }}>EDUCATION</p>
      {EDUCATION_HISTORY.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "var(--navy-2)", border: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--blue)", fontSize: 11, fontWeight: 700,
          }}>
            {item.logo}
          </div>
          <div>
            <p style={{ color: "var(--text)", fontSize: 11, fontWeight: 500, marginBottom: 2 }}>{item.title}</p>
            <p style={{ color: "var(--muted)", fontSize: 10 }}>{item.period}</p>
          </div>
        </div>
      ))}

      {/* <div style={{ borderLeft:"2px solid var(--border)", paddingLeft:10, position:"relative" }}>
        <div style={{ position:"absolute", left:-5, top:4, width:8, height:8, borderRadius:"50%", background:"var(--blue)" }} />
        <p style={{ color:"var(--text)", fontSize:11, fontWeight:500 }}>{EDUCATION.degree}</p>
        <p style={{ color:"var(--blue)", fontSize:10 }}>{EDUCATION.school}</p>
        <p style={{ color:"var(--muted)", fontSize:10 }}>{EDUCATION.period} · GPA {EDUCATION.gpa}</p>
      </div> */}
    </div>
  );
}
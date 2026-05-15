"use client";
import { ME, EXPERIENCE, EDUCATION } from "@/src/data/portfolio";

export default function AboutApp() {
  return (
    <div className="win-body">
      {/* Hero */}
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:16, paddingBottom:14, borderBottom:"1px solid var(--border)" }}>
        <div style={{
          width:52, height:52, borderRadius:"50%",
          background:"var(--navy-2)", border:"2px solid var(--green)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:24, flexShrink:0,
        }}>
          {ME.name.charAt(0)}
        </div>
        <div>
          <p style={{ color:"var(--text)", fontSize:13, fontWeight:500 }}>{ME.name}</p>
          <p style={{ color:"var(--green)", fontSize:11 }}>{ME.title}</p>
          <p style={{ color:"var(--muted)", fontSize:10 }}>{ME.location}</p>
        </div>
        {ME.available && (
          <span style={{
            marginLeft:"auto", fontSize:9, border:"1px solid var(--green)",
            borderRadius:4, padding:"2px 7px", color:"var(--green)"
          }}>
            ● available
          </span>
        )}
      </div>

      {/* Bio */}
      <p style={{ color:"var(--green)", fontSize:10, marginBottom:5, letterSpacing:".08em" }}>ABOUT</p>
      {ME.bio.map((line, i) => (
        <p key={i} style={{ color:"var(--muted)", fontSize:11, lineHeight:1.75, marginBottom:4 }}>{line}</p>
      ))}
      <p style={{ color:"var(--muted)", fontSize:11, lineHeight:1.75, marginBottom:10 }}>
        This new macOS-inspired portfolio is a redesigned version of my work, built as an interactive terminal experience with draggable windows, window controls, and keyboard-friendly navigation.
      </p>

      {/* Quick info */}
      <div style={{ marginTop:14, marginBottom:14, paddingTop:12, borderTop:"1px solid var(--border)" }}>
        {[
          ["Email",   ME.email],
          ["GitHub",  ME.github],
          ["Website", ME.website],
        ].map(([k,v]) => (
          <div key={k} style={{ display:"flex", gap:12, marginBottom:3 }}>
            <span style={{ color:"var(--green)", minWidth:60, fontSize:11 }}>{k}</span>
            <a href={k==="Email" ? `mailto:${v}` : v} target="_blank" rel="noopener noreferrer"
              style={{ color:"var(--blue)", fontSize:11 }}>{v}</a>
          </div>
        ))}
      </div>

      {/* Experience */}
      <p style={{ color:"var(--green)", fontSize:10, marginBottom:8, letterSpacing:".08em" }}>EXPERIENCE</p>
      {EXPERIENCE.map((job, i) => (
        <div key={i} style={{ borderLeft:"2px solid var(--border)", paddingLeft:10, marginBottom:12, position:"relative" }}>
          <div style={{ position:"absolute", left:-5, top:4, width:8, height:8, borderRadius:"50%", background:"var(--green)" }} />
          <p style={{ color:"var(--text)", fontSize:11, fontWeight:500 }}>{job.role}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:4 }}>
            <span style={{ color:"var(--blue)", fontSize:10 }}>{job.company}</span>
            <span style={{ color:"var(--muted)", fontSize:10 }}>{job.period}</span>
          </div>
          {job.bullets.map((b, j) => (
            <div key={j} style={{ display:"flex", gap:5, marginBottom:1 }}>
              <span style={{ color:"var(--green)" }}>▸</span>
              <span style={{ color:"var(--muted)", fontSize:10, lineHeight:1.6 }}>{b}</span>
            </div>
          ))}
        </div>
      ))}

      {/* Education */}
      <p style={{ color:"var(--green)", fontSize:10, marginTop:6, marginBottom:6, letterSpacing:".08em" }}>EDUCATION</p>
      <div style={{ borderLeft:"2px solid var(--border)", paddingLeft:10, position:"relative" }}>
        <div style={{ position:"absolute", left:-5, top:4, width:8, height:8, borderRadius:"50%", background:"var(--blue)" }} />
        <p style={{ color:"var(--text)", fontSize:11, fontWeight:500 }}>{EDUCATION.degree}</p>
        <p style={{ color:"var(--blue)", fontSize:10 }}>{EDUCATION.school}</p>
        <p style={{ color:"var(--muted)", fontSize:10 }}>{EDUCATION.period} · GPA {EDUCATION.gpa}</p>
      </div>
    </div>
  );
}
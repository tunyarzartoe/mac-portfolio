"use client";
import { useState } from "react";
import { PROJECTS } from "@/src/data/portfolio";

const STATUS_COLOR: Record<string, string> = {
  live:     "#4ade80",
  wip:      "#fbbf24",
  archived: "#475569",
};

export default function ProjectsApp() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="win-body">
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
        <p style={{ color:"var(--yellow)", fontSize:10, letterSpacing:".08em" }}>PROJECTS</p>
        <p style={{ color:"var(--muted)", fontSize:10 }}>{PROJECTS.length} total · click to expand</p>
      </div>

      {PROJECTS.map(p => (
        <div key={p.id} className="proj-card" style={{ marginBottom:8 }}>
          {/* Header */}
          <div
            style={{ padding:"9px 12px", display:"flex", alignItems:"flex-start", gap:9 }}
            onClick={() => setOpen(open===p.id ? null : p.id)}
          >
            <span style={{ fontSize:16, flexShrink:0, marginTop:1 }}>{p.emoji}</span>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", marginBottom:2 }}>
                <span style={{ color:"var(--blue)", fontWeight:600, fontSize:11 }}>{p.name}</span>
                <span style={{ fontSize:9, color: STATUS_COLOR[p.status] }}>● {p.status}</span>
                <span style={{ color:"var(--muted)", fontSize:9 }}>{p.year}</span>
              </div>
              <p style={{ color:"var(--muted)", fontSize:10, lineHeight:1.6 }}>{p.tagline}</p>
              <div style={{ marginTop:4 }}>
                {p.tech.slice(0,4).map(t => <span key={t} className="tech-tag">{t}</span>)}
                {p.tech.length > 4 && <span style={{ color:"var(--muted)", fontSize:9 }}>+{p.tech.length-4}</span>}
              </div>
            </div>
            <span style={{ color:"var(--muted)", fontSize:10, flexShrink:0 }}>
              {open===p.id ? "▲" : "▼"}
            </span>
          </div>

          {/* Expanded */}
          {open===p.id && (
            <div style={{ borderTop:"1px solid var(--border)", padding:"10px 12px 10px 40px", background:"rgba(0,0,0,0.25)" }}>
              <p style={{ color:"var(--muted)", fontSize:10, lineHeight:1.7, marginBottom:8 }}>{p.desc}</p>
              <p style={{ color:"var(--green)", fontSize:9, marginBottom:5 }}>HIGHLIGHTS</p>
              {p.highlights.map((h, i) => (
                <div key={i} style={{ display:"flex", gap:5, marginBottom:2 }}>
                  <span style={{ color:"var(--green)" }}>→</span>
                  <span style={{ color:"var(--muted)", fontSize:10, lineHeight:1.6 }}>{h}</span>
                </div>
              ))}
              <p style={{ color:"var(--green)", fontSize:9, margin:"8px 0 4px" }}>STACK</p>
              <div>{p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
              <div style={{ display:"flex", gap:12, marginTop:8, paddingTop:8, borderTop:"1px solid var(--border)" }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color:"var(--blue)", fontSize:10 }}>GitHub →</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color:"var(--green)", fontSize:10 }}>Live →</a>}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
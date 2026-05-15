"use client";
import { useEffect, useState } from "react";
import { SKILLS } from "@/src/data/portfolio";

function Bar({ level, delay }: { level: number; delay: number }) {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(level), delay); return () => clearTimeout(t); }, [level, delay]);
  return (
    <div className="skill-bar-bg" style={{ flex:1 }}>
      <div className="skill-bar-fill" style={{ width:`${w}%` }} />
    </div>
  );
}

export default function SkillsApp() {
  let delay = 0;
  return (
    <div className="win-body">
      {Object.entries(SKILLS).map(([cat, items]) => {
        delay += 50;
        return (
          <div key={cat} style={{ marginBottom:16 }}>
            <p style={{ color:"var(--green)", fontSize:10, marginBottom:8, letterSpacing:".08em" }}>
              {cat.toUpperCase()}
            </p>
            {items.map((s, i) => {
              delay += 60;
              return (
                <div key={s.name} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                  <span style={{ color:"var(--muted)", fontSize:11, minWidth:170, flexShrink:0 }}>{s.name}</span>
                  <Bar level={s.level} delay={delay + i * 60} />
                  <span style={{ color:"var(--muted)", fontSize:10, minWidth:32, textAlign:"right" }}>{s.level}%</span>
                </div>
              );
            })}
          </div>
        );
      })}

      <div style={{ paddingTop:12, borderTop:"1px solid var(--border)" }}>
        <p style={{ color:"var(--green)", fontSize:10, marginBottom:6, letterSpacing:".08em" }}>TOOLS</p>
        <div>
          {["Git","Docker","Vercel","Figma","VS Code","Postman","GitHub Actions","Linux"].map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { ME, SOCIALS } from "@/src/data/portfolio";

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
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14, paddingBottom:12, borderBottom:"1px solid var(--border)" }}>
        <div style={{
          width:46, height:46, borderRadius:"50%",
          background:"var(--navy-2)", border:"1.5px solid var(--green)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:22, flexShrink:0,
        }}>
          {ME.name.charAt(0)}
        </div>
        <div>
          <p style={{ color:"var(--text)", fontSize:12, fontWeight:500 }}>{ME.name}</p>
          <p style={{ color:"var(--muted)", fontSize:10 }}>{ME.location}</p>
        </div>
        {ME.available && (
          <span style={{ marginLeft:"auto", color:"var(--green)", fontSize:9, border:"1px solid var(--green)", borderRadius:4, padding:"2px 6px" }}>
            open to work
          </span>
        )}
      </div>

      <p style={{ color:"var(--muted)", fontSize:11, lineHeight:1.75, marginBottom:14 }}>
        Always open to new opportunities, collaborations, or a chat about web tech.
        This terminal-style portfolio is my latest redesign, so feel free to connect via email or GitHub for project inquiries.
      </p>

      {/* Social links */}
      {SOCIALS.map(s => (
        <div key={s.label} style={{ display:"flex", alignItems:"center", gap:12, padding:"6px 0", borderBottom:"1px solid var(--border)" }}>
          <span style={{ color:"var(--green)", minWidth:70, fontSize:11 }}>{s.label}</span>
          <a href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ color:"var(--blue)", fontSize:11, flex:1 }}>{s.value}</a>
          {s.label === "Email" && (
            <button
              onClick={copyEmail}
              style={{
                background:"none", border:"1px solid var(--border)", borderRadius:4,
                color: copied ? "var(--green)" : "var(--muted)",
                fontSize:9, padding:"2px 7px", cursor:"pointer",
              }}
            >
              {copied ? "copied!" : "copy"}
            </button>
          )}
        </div>
      ))}

      <p style={{ color:"var(--muted)", fontSize:10, marginTop:14 }}>
        Response time: <span style={{ color:"var(--text)" }}>within 24 hours on weekdays</span>
      </p>
    </div>
  );
}
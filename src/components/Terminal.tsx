"use client";
import { useEffect, useRef, useState, JSX, KeyboardEvent } from "react";
import { ME, PROJECTS, SKILLS, EXPERIENCE, EDUCATION, SOCIALS } from "@/src/data/portfolio";

const PROMPT = `${ME.handle}@macbook:~/portfolio$ `;

const OLD_SITE = "https://tunyarzartoe.vercel.app";

const ALL_CMDS = [
  "help","about","projects","skills","experience","education",
  "contact","whoami","ls","ls -la","pwd","date","uptime",
  "cat readme","neofetch","weather","open github","open linkedin",
  "open email","history","clear","banner","sudo","now",
];

/* ── output builders ── */
function HelpOut() {
  const sections = [
    { title: "Navigation", items: [
      ["about","Who I am"], ["projects","Project showcase"],
      ["skills","Tech stack + bars"], ["experience","Work history"],
      ["education","Degrees & certs"], ["contact","Reach me"], ["now","What I'm building"],
    ]},
    { title: "System", items: [
      ["ls","List files"], ["ls -la","Detailed listing"], ["cat readme","Read README"],
      ["whoami","User info"], ["pwd","Working directory"], ["date","Current date"],
      ["uptime","Session uptime"], ["history","Command history"],
      ["neofetch","System info"], ["clear","Clear (Ctrl+L)"],
    ]},
    { title: "Actions", items: [
      ["open github","Open GitHub"], ["open linkedin","Open LinkedIn"],
      ["open email","Launch mail client"], ["weather","Yangon weather"],
      ["banner","ASCII banner"], ["sudo","Try root 😄"],
    ]},
  ];
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 6, letterSpacing: ".1em" }}>
        AVAILABLE COMMANDS
      </p>
      <p style={{ color: "var(--muted)", fontSize: 10, marginBottom: 10 }}>
        Tab autocomplete · ↑↓ history · Ctrl+L clear
      </p>
      {sections.map(s => (
        <div key={s.title} style={{ marginBottom: 10 }}>
          <p style={{ color: "var(--green)", fontSize: 10, marginBottom: 4 }}>— {s.title} —</p>
          {s.items.map(([cmd, desc]) => (
            <div key={cmd} style={{ display: "flex", gap: 12, marginBottom: 1 }}>
              <span style={{ color: "var(--blue)", minWidth: 110, fontSize: 11 }}>{cmd}</span>
              <span style={{ color: "var(--muted)", fontSize: 11 }}>{desc}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function AboutOut() {
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 8, letterSpacing: ".1em" }}>CAT ABOUT.MD</p>
      <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 500, marginBottom: 6 }}>
        Hi, I'm {ME.name} 👋
      </p>
      {ME.bio.map((line, i) => (
        <p key={i} style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.7, maxWidth: 460, marginBottom: 4 }}>{line}</p>
      ))}
      <div style={{ marginTop: 10 }}>
        {[
          ["Name",      ME.name],
          ["Role",      ME.title],
          ["Location",  ME.location],
          ["Status",    ME.available ? "Open to opportunities ✅" : "Not available"],
          ["Email",     ME.email],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: 12, marginBottom: 2 }}>
            <span style={{ color: "var(--green)", minWidth: 72, fontSize: 11 }}>{k}</span>
            <span style={{ color: "var(--muted)", fontSize: 11 }}>{v}</span>
          </div>
        ))}
        <div style={{ display: "flex", gap: 12, marginTop: 4, alignItems: "center" }}>
          <span style={{ color: "var(--green)", minWidth: 72, fontSize: 11 }}>Old site</span>
          <a href={OLD_SITE} target="_blank" rel="noopener noreferrer"
             style={{ color: "var(--blue)", fontSize: 11 }}>
            {OLD_SITE}
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsOut() {
  const sc: Record<string, string> = { live: "#4ade80", wip: "#fbbf24", archived: "#475569" };
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div style={{ marginTop: 4 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <p style={{ color: "var(--yellow)", fontSize: 10, letterSpacing: ".1em" }}>LS -LA PROJECTS/</p>
        <p style={{ color: "var(--muted)", fontSize: 10 }}>{PROJECTS.length} projects · click to expand</p>
      </div>
      {PROJECTS.map(p => (
        <div key={p.id} className="proj-card" style={{ marginBottom: 7 }}>
          <div
            style={{ padding: "8px 10px", display: "flex", alignItems: "flex-start", gap: 8 }}
            onClick={() => setOpen(open === p.id ? null : p.id)}
          >
            <span style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}>{p.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                <span style={{ color: "var(--blue)", fontWeight: 600 }}>./{p.name}</span>
                <span style={{ color: sc[p.status], fontSize: 10 }}>● {p.status}</span>
                <span style={{ color: "var(--muted)", fontSize: 10 }}>{p.year}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 10, lineHeight: 1.6 }}>{p.tagline}</p>
              <div style={{ marginTop: 4 }}>
                {p.tech.slice(0, 4).map(t => <span key={t} className="tech-tag">{t}</span>)}
                {p.tech.length > 4 && <span style={{ color: "var(--muted)", fontSize: 9 }}>+{p.tech.length - 4} more</span>}
              </div>
            </div>
            <span style={{ color: "var(--muted)", fontSize: 10, flexShrink: 0, marginTop: 2 }}>
              {open === p.id ? "▲" : "▼"}
            </span>
          </div>
          {open === p.id && (
            <div style={{ borderTop: "1px solid var(--border)", padding: "10px 10px 10px 34px", background: "rgba(0,0,0,0.25)" }}>
              <p style={{ color: "var(--muted)", fontSize: 10, lineHeight: 1.7, marginBottom: 8 }}>{p.desc}</p>
              <p style={{ color: "var(--green)", fontSize: 10, marginBottom: 5 }}>## Highlights</p>
              {p.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 6, marginBottom: 2 }}>
                  <span style={{ color: "var(--green)" }}>→</span>
                  <span style={{ color: "var(--muted)", fontSize: 10, lineHeight: 1.6 }}>{h}</span>
                </div>
              ))}
              <p style={{ color: "var(--green)", fontSize: 10, margin: "8px 0 4px" }}>## Stack</p>
              <div>{p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
              <div style={{ display: "flex", gap: 12, marginTop: 8, paddingTop: 8, borderTop: "1px solid var(--border)" }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--blue)", fontSize: 10 }}>GitHub →</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--green)", fontSize: 10 }}>Live demo →</a>}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SkillsOut() {
  function Bar({ level }: { level: number }) {
    const filled = Math.round(level / 100 * 22);
    return (
      <span style={{ fontFamily: "monospace", fontSize: 10 }}>
        <span style={{ color: "var(--green)" }}>{"█".repeat(filled)}</span>
        <span style={{ color: "#1e3a5f" }}>{"░".repeat(22 - filled)}</span>
        <span style={{ color: "var(--muted)", marginLeft: 6 }}>{level}%</span>
      </span>
    );
  }
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 8, letterSpacing: ".1em" }}>CAT SKILLS.JSON</p>
      {Object.entries(SKILLS).map(([cat, items]) => (
        <div key={cat} style={{ marginBottom: 10 }}>
          <p style={{ color: "var(--green)", fontSize: 10, marginBottom: 5 }}>## {cat}</p>
          {items.map(s => (
            <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
              <span style={{ color: "var(--muted)", fontSize: 11, minWidth: 160, flexShrink: 0 }}>{s.name}</span>
              <Bar level={s.level} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ExperienceOut() {
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 10, letterSpacing: ".1em" }}>CAT EXPERIENCE.YML</p>
      {EXPERIENCE.map((job, i) => (
        <div key={i} style={{ borderLeft: "2px solid var(--border)", paddingLeft: 12, marginBottom: 14, position: "relative" }}>
          <div style={{
            position: "absolute", left: -5, top: 4,
            width: 8, height: 8, borderRadius: "50%", background: "var(--green)"
          }} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <span style={{ color: "var(--text)", fontSize: 12, fontWeight: 500 }}>{job.role}</span>
            <span style={{ color: "var(--muted)", fontSize: 9, border: "1px solid var(--border)", borderRadius: 3, padding: "1px 5px" }}>{job.type}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 5 }}>
            <span style={{ color: "var(--blue)", fontSize: 11 }}>{job.company}</span>
            <span style={{ color: "var(--muted)", fontSize: 11 }}>{job.period}</span>
            <span style={{ color: "var(--muted)", fontSize: 11 }}>{job.location}</span>
          </div>
          {job.bullets.map((b, j) => (
            <div key={j} style={{ display: "flex", gap: 6, marginBottom: 2 }}>
              <span style={{ color: "var(--green)" }}>▸</span>
              <span style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.65 }}>{b}</span>
            </div>
          ))}
          <div style={{ marginTop: 5 }}>
            {job.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}

function EducationOut() {
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 10, letterSpacing: ".1em" }}>CAT EDUCATION.TXT</p>
      <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: 12, marginBottom: 12, position: "relative" }}>
        <div style={{
          position: "absolute", left: -5, top: 4,
          width: 8, height: 8, borderRadius: "50%", background: "var(--blue)"
        }} />
        <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 500 }}>{EDUCATION.degree}</p>
        <p style={{ color: "var(--blue)", fontSize: 11 }}>{EDUCATION.school}</p>
        <p style={{ color: "var(--muted)", fontSize: 11, marginBottom: 5 }}>{EDUCATION.period} · GPA {EDUCATION.gpa}</p>
        {EDUCATION.bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 6, marginBottom: 2 }}>
            <span style={{ color: "var(--green)" }}>▸</span>
            <span style={{ color: "var(--muted)", fontSize: 11 }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactOut() {
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 8, letterSpacing: ".1em" }}>CAT CONTACT.TXT</p>
      <p style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.7, maxWidth: 380, marginBottom: 10 }}>
        Always open to new opportunities, collaborations, or a chat about web tech.
        Best way to reach me is email.
      </p>
      {SOCIALS.map(s => (
        <div key={s.label} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 4 }}>
          <span style={{ color: "var(--green)", minWidth: 70, fontSize: 11 }}>{s.label}</span>
          <a href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--blue)", fontSize: 11 }}>{s.value}</a>
        </div>
      ))}
    </div>
  );
}

function NowOut() {
  const items = [
    ["🔨", "Building",  "mac-portfolio v2 — polishing animations & adding more commands"],
    ["📖", "Learning",  "Rust + WebAssembly for performance-critical frontend work"],
    ["📚", "Reading",   "The Pragmatic Programmer (for the 2nd time)"],
    ["🎧", "Listening", "Syntax.fm, The Changelog, DevMode Podcast"],
    ["💼", "Open to",   "Full-time remote roles in frontend or full-stack"],
  ];
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, marginBottom: 4, letterSpacing: ".1em" }}>CAT NOW.TXT</p>
      <p style={{ color: "var(--muted)", fontSize: 10, marginBottom: 10 }}>Updated: May 2025 · Yangon</p>
      {items.map(([ic, l, v]) => (
        <div key={l} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 5 }}>
          <span style={{ fontSize: 14, flexShrink: 0 }}>{ic}</span>
          <span style={{ color: "var(--green)", fontSize: 11 }}>{l}: </span>
          <span style={{ color: "var(--muted)", fontSize: 11 }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

function NeofetchOut() {
  const info = [
    ["OS",       "macOS Sequoia 15.1"],
    ["Host",     "MacBook Pro M3"],
    ["Shell",    "zsh 5.9"],
    ["Editor",   "VS Code + Neovim"],
    ["Stack",    "Next.js · TypeScript · Tailwind"],
    ["Location", ME.location],
    ["Memory",   "16 GB"],
    ["Coffee",   "∞ cups / day"],
  ];
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 4 }}>
      <pre style={{ color: "var(--green)", fontSize: 9, lineHeight: 1.4, flexShrink: 0 }}>{`   .:'
  _ :'_
.'\`  .\`\`.
:          ;
:          :
 \`.      .'
   \`----'`}</pre>
      <div>
        <p style={{ color: "var(--green)", marginBottom: 4, fontSize: 11 }}>{ME.handle}@macbook</p>
        <p style={{ color: "var(--muted)", marginBottom: 4, fontSize: 10 }}>─────────────────────</p>
        {info.map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: 6, marginBottom: 1 }}>
            <span style={{ color: "var(--green)", minWidth: 72, fontSize: 10 }}>{k}:</span>
            <span style={{ color: "var(--text)", fontSize: 10 }}>{v}</span>
          </div>
        ))}
        <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
          {["#ef4444","#fbbf24","#4ade80","#60a5fa","#a78bfa","#f472b6","#e2e8f0","#475569"]
            .map(c => <span key={c} style={{ width: 14, height: 14, borderRadius: 2, background: c, display: "inline-block" }} />)}
        </div>
      </div>
    </div>
  );
}

function WeatherOut() {
  const days = [
    { d: "Today", ic: "⛅", hi: 32, lo: 25, desc: "Partly cloudy" },
    { d: "Thu",   ic: "🌧", hi: 29, lo: 24, desc: "Thunderstorm"  },
    { d: "Fri",   ic: "☀️", hi: 34, lo: 26, desc: "Hot & sunny"   },
    { d: "Sat",   ic: "🌤", hi: 31, lo: 25, desc: "Mostly clear"  },
  ];
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", marginBottom: 6, fontSize: 11 }}>
        Yangon, Myanmar  ·  32°C  ·  Humid
      </p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {days.map(w => (
          <div key={w.d} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "6px 9px", minWidth: 70 }}>
            <p style={{ color: "var(--muted)", fontSize: 9, marginBottom: 3 }}>{w.d}</p>
            <p style={{ fontSize: 18 }}>{w.ic}</p>
            <p style={{ fontSize: 11 }}>{w.hi}°/<span style={{ color: "var(--muted)" }}>{w.lo}°</span></p>
            <p style={{ color: "var(--muted)", fontSize: 9 }}>{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BannerOut() {
  return (
    <>
    </>
    // <div style={{ marginTop: 4 }}>
    //   <pre style={{ color: "var(--green)", fontSize: "8px", lineHeight: 1.2, overflow: "hidden" }}>{`yarzar.dev`}</pre>
    //   <p style={{ color: "var(--muted)", fontSize: 10, marginTop: 6 }}>
    //     yarzar.dev — interactive terminal portfolio
    //   </p>
    // </div>
  );
}

/* ── Main Terminal component ─────────────────────────────────── */
export default function Terminal() {
  type Entry = { cmd: string; output: JSX.Element | null };
  const [history, setHistory]     = useState<Entry[]>([{ cmd: "", output: <InitialOut /> }]);
  const [input, setInput]         = useState("");
  const [cmdHist, setCmdHist]     = useState<string[]>([]);
  const [histIdx, setHistIdx]     = useState(-1);
  const [tabHints, setTabHints]   = useState<string[]>([]);
  const inputRef  = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function runCmd(raw: string, options?: { showPrompt?: boolean }) {
    const showPrompt = options?.showPrompt ?? true;
    const cmd = raw.trim();
    const lo  = cmd.toLowerCase();
    setTabHints([]);

    if (lo === "clear") { setHistory([]); return; }

    let out: JSX.Element | null = null;

    if      (lo === "banner")          out = <BannerOut />;
    else if (lo === "help")            out = <HelpOut />;
    else if (lo === "about")           out = <AboutOut />;
    else if (lo === "projects")        out = <ProjectsOut />;
    else if (lo === "skills")          out = <SkillsOut />;
    else if (lo === "experience")      out = <ExperienceOut />;
    else if (lo === "education")       out = <EducationOut />;
    else if (lo === "contact")         out = <ContactOut />;
    else if (lo === "now")             out = <NowOut />;
    else if (lo === "neofetch")        out = <NeofetchOut />;
    else if (lo === "weather")         out = <WeatherOut />;
    else if (lo === "whoami")          out = <p style={{ color: "var(--green)" }}>{ME.name} — {ME.title}</p>;
    else if (lo === "pwd")             out = <p style={{ color: "var(--muted)" }}>/home/{ME.handle}/portfolio</p>;
    else if (lo === "date")            out = <p style={{ color: "var(--text)" }}>{new Date().toString()}</p>;
    else if (lo === "uptime")          out = <p style={{ color: "var(--text)" }}>{new Date().toLocaleTimeString()} up — developer mode: <span style={{ color: "var(--green)" }}>active</span></p>;
    else if (lo === "ls")              out = <p style={{ color: "var(--blue)" }}>about.md&nbsp;&nbsp;projects/&nbsp;&nbsp;skills.json&nbsp;&nbsp;experience.yml&nbsp;&nbsp;education.txt&nbsp;&nbsp;contact.txt&nbsp;&nbsp;README.md</p>;
    else if (lo === "ls -la")          out = <LsLaOut />;
    else if (lo === "cat readme")      out = <ReadmeOut />;
    else if (lo === "open github")     out = <p style={{ color: "var(--green)" }}>Opening {ME.github} ↗</p>;
    else if (lo === "open linkedin")   out = <p style={{ color: "var(--green)" }}>Opening {ME.linkedin} ↗</p>;
    else if (lo === "open email")      out = <p style={{ color: "var(--green)" }}>Launching mail → {ME.email}</p>;
    else if (lo === "sudo" || lo === "sudo su") out = <p style={{ color: "var(--red)" }}>sudo: permission denied — nice try 😄</p>;
    else if (lo === "history")         out = <HistoryOut hist={cmdHist} />;
    else if (lo === "")                out = null;
    else out = (
      <p style={{ color: "var(--red)" }}>
        zsh: command not found: <span style={{ color: "var(--text)" }}>{cmd}</span>
        <span style={{ color: "var(--muted)" }}> — type </span>
        <span style={{ color: "var(--yellow)" }}>help</span>
      </p>
    );

    setHistory(p => [...p, { cmd: showPrompt ? raw : "", output: out }]);
    if (cmd && showPrompt) setCmdHist(p => [cmd, ...p]);
     setHistIdx(-1);
   }

   function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
     if (e.key === "Enter") {
       runCmd(input);
       setInput("");
     } else if (e.key === "ArrowUp") {
       e.preventDefault();
       const next = Math.min(histIdx + 1, cmdHist.length - 1);
       setHistIdx(next);
       setInput(cmdHist[next] ?? "");
     } else if (e.key === "ArrowDown") {
       e.preventDefault();
       const next = Math.max(histIdx - 1, -1);
       setHistIdx(next);
       setInput(next === -1 ? "" : (cmdHist[next] ?? ""));
     } else if (e.key === "Tab") {
       e.preventDefault();
       const p = input.toLowerCase();
       if (!p) return;
       const m = ALL_CMDS.filter(c => c.startsWith(p));
       if (m.length === 1) { setInput(m[0]); setTabHints([]); }
       else if (m.length > 1) setTabHints(m);
     } else if (e.key === "l" && e.ctrlKey) {
       e.preventDefault();
       setHistory([]);
       setTabHints([]);
     }
   }

   return (
    <div style={{
      borderRadius: 28,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgba(8,10,15,0.98), rgba(2,4,10,0.99))",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 32px 100px rgba(0,0,0,0.35)",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "14px 18px",
        background: "rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 16, color: "var(--green)" }}></span>
          <div>
            <p style={{ margin: 0, color: "var(--text)", fontSize: 12, fontWeight: 600 }}>yarzar.dev</p>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 10 }}>Interactive macOS terminal</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["home","about","projects","contact"].map(item => (
            <span key={item} style={{
              color: "var(--muted)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: ".12em",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        background: "rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ display: "flex", gap: 8 }}>
          <span title="Clear terminal" onClick={() => { setHistory([]); setTabHints([]); }} style={{
            width: 12, height: 12, borderRadius: "50%", background: "#ff5f56",
            display: "inline-block", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)", cursor: "pointer",
          }} />
          <span style={{
            width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e",
            display: "inline-block", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)",
          }} />
          <span style={{
            width: 12, height: 12, borderRadius: "50%", background: "#27c93f",
            display: "inline-block", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.12)",
          }} />
        </div>
        <span style={{ color: "var(--muted)", fontSize: 11, marginLeft: 8 }}>Terminal</span>
        <span style={{ marginLeft: "auto", color: "var(--muted)", fontSize: 10 }}>zsh</span>
      </div>

      <div
        className="term-body"
        onClick={() => inputRef.current?.focus()}
        style={{
          cursor: "text",
          padding: "22px 20px 16px",
          minHeight: 440,
          maxHeight: "calc(100vh - 220px)",
          overflowY: "auto",
          scrollbarWidth: "thin",
          background: "#02040a",
          fontFamily: "JetBrains Mono, Menlo, monospace",
          color: "var(--text)",
          lineHeight: 1.6,
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
         {history.map((entry, i) => (
           <div key={i} style={{ marginBottom: 8 }}>
             {entry.cmd && (
               <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
                 <span style={{ color: "var(--green)", flexShrink: 0, fontSize: 11 }}>{PROMPT}</span>
                 <span style={{ color: "var(--text)", fontSize: 11 }}>{entry.cmd}</span>
               </div>
             )}
             {entry.output && <div style={{ marginTop: 6, paddingLeft: 2 }}>{entry.output}</div>}
           </div>
         ))}
 
         {/* Tab suggestions */}
         {tabHints.length > 0 && (
           <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10, paddingLeft: 2 }}>
             {tabHints.map(h => (
               <span
                 key={h}
                 style={{ color: "var(--blue)", fontSize: 11, cursor: "pointer" }}
                 onClick={() => { setInput(h); setTabHints([]); inputRef.current?.focus(); }}
               >
                 {h}
               </span>
             ))}
           </div>
         )}
 
         {/* Input row */}
         <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
           <span style={{ color: "var(--green)", flexShrink: 0, fontSize: 11 }}>{PROMPT}</span>
           <input
             ref={inputRef}
             value={input}
             onChange={e => { setInput(e.target.value); setTabHints([]); }}
             onKeyDown={onKeyDown}
             className="term-input"
             autoFocus
             spellCheck={false}
             autoComplete="off"
             placeholder="Type help and press Enter"
             style={{
               width: "100%",
               border: "none",
               outline: "none",
               background: "transparent",
               color: "var(--text)",
               fontSize: 11,
               fontFamily: "inherit",
               caretColor: "var(--green)",
               padding: 0,
             }}
           />
         </div>
         <div ref={bottomRef} />
       </div>
     </div>
   );
}

/* small inline helpers */
function LsLaOut() {
  const rows = [
    ["drwxr-xr-x","portfolio/","May 15 09:00"],
    ["-rw-r--r--","about.md","May 14 18:22"],
    ["drwxr-xr-x","projects/","May 13 12:45"],
    ["-rw-r--r--","skills.json","May 12 10:00"],
    ["-rw-r--r--","experience.yml","May 10 09:30"],
    ["-rw-r--r--","education.txt","May  8 11:00"],
    ["-rw-r--r--","contact.txt","May 15 08:00"],
    ["-rw-r--r--","README.md","May 14 20:00"],
  ];
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--muted)", fontSize: 10, marginBottom: 2 }}>total 32</p>
      {rows.map(([p, f, d]) => (
        <div key={f} style={{ display: "flex", gap: 10, fontSize: 10, marginBottom: 1 }}>
          <span style={{ color: "var(--muted)" }}>{p}</span>
          <span style={{ color: f.endsWith("/") ? "var(--blue)" : "var(--text)" }}>{f}</span>
          <span style={{ color: "var(--muted)", marginLeft: "auto" }}>{d}</span>
        </div>
      ))}
    </div>
  );
}

function ReadmeOut() {
  return (
    <div style={{ marginTop: 4, maxWidth: 440 }}>
      <p style={{ color: "var(--yellow)", marginBottom: 5, fontSize: 11 }}># {ME.name} — Portfolio</p>
      <p style={{ color: "var(--text)", fontSize: 11, marginBottom: 4 }}>
        Interactive macOS terminal portfolio built with Next.js 15 + TypeScript.
      </p>
      <p style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.7, marginBottom: 8 }}>
        Full keyboard support: Tab autocomplete, ↑↓ history, Ctrl+L clear. 25+ commands. Expandable project cards, skill bars, experience timeline, and weather.
      </p>
      <p style={{ color: "var(--green)", fontSize: 11, marginBottom: 3 }}>## Stack</p>
      <p style={{ color: "var(--muted)", fontSize: 11 }}>
        Next.js 15 · TypeScript · Tailwind CSS · JetBrains Mono · Vercel
      </p>
    </div>
  );
}

function HistoryOut({ hist }: { hist: string[] }) {
  if (!hist.length) return <p style={{ color: "var(--muted)", fontSize: 11 }}>No history yet.</p>;
  return (
    <div style={{ marginTop: 4 }}>
      {hist.slice(0, 15).map((c, i) => (
        <div key={i} style={{ display: "flex", gap: 10, fontSize: 11, marginBottom: 1 }}>
          <span style={{ color: "var(--green)", minWidth: 20 }}>{i + 1}</span>
          <span style={{ color: "var(--muted)" }}>{c}</span>
        </div>
      ))}
    </div>
  );
}

function InitialOut() {
  return (
    <div style={{ marginTop: 4 }}>
      <p style={{ color: "var(--yellow)", fontSize: 10, letterSpacing: ".1em", marginBottom: 6 }}>
        WELCOME
      </p>
      <p style={{ color: "var(--text)", fontSize: 12, marginBottom: 10 }}>
        Type <span style={{ color: "var(--blue)" }}>help</span> for the full command list.
      </p>
      <p style={{ color: "var(--muted)", fontSize: 11, marginBottom: 6 }}>Important commands</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {["help", "about", "projects", "skills", "contact", "clear"].map(cmd => (
          <span key={cmd} style={{ color: "var(--green)", fontSize: 11 }}>
            {cmd}
          </span>
        ))}
      </div>
    </div>
  );
}
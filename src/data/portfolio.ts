// ══════════════════════════════════════════════════════════
//  EDIT THIS FILE TO PERSONALISE YOUR PORTFOLIO
//  Change your info here — everything else reads from here
// ══════════════════════════════════════════════════════════

export const ME = {
  name:      "Tun Yar Zar Toe",
  handle:   "yarzar.dev",
  title:     "Software Engineer",
  subtitle:  "Building things for the web",
  location:  "Tokyo, Japan",
  email:     "tunyarzartoe@gmail.com",
  github:    "https://github.com/tunyarzartoe",
  linkedin:  "https://linkedin.com/in/tunyarzartoe",
  website:   "https://tunyarzartoe.vercel.app",
  available: true,
  bio: [
    "Full-stack developer passionate about clean, fast, and accessible web.",
    "I love the space where engineering meets design — building things people actually enjoy using.",
    "Currently open to full-time roles and interesting projects.",
  ],
};

export const PROJECTS = [
  {
    id:       "personal-portfolio",
    name:     "personal-portfolio",
    emoji:    "🖥️",
    tagline:  "This portfolio — Next.js",
    desc:     "An interactive terminal portfolio that mimics macOS, with a live command system, boot animation, draggable windows, and a dock.",
    tech:     ["Next.js 15", "TypeScript", "Tailwind CSS"],
    github:   "https://github.com/tunyarzartoe/mac-portfolio",
    demo:     "https://tunyarzartoe.vercel.app",
    status:   "live" as const,
    year:     "2025",
    highlights: [
      "25+ terminal commands with Tab autocomplete and ↑↓ history",
      "Draggable macOS-style windows with z-index focus management",
      "Boot screen with realistic Darwin kernel startup sequence",
      "Deep navy background with subtle CSS grid — zero external UI libs",
    ],
  },
  // {
  //   id:       "project-2",
  //   name:     "your-next-project",
  //   emoji:    "⚡",
  //   tagline:  "Replace with your real project",
  //   desc:     "Add your real project description here — what does it do, who is it for?",
  //   tech:     ["React", "Node.js", "PostgreSQL"],
  //   github:   "https://github.com/tunyarzartoe",
  //   demo:     null,
  //   status:   "live" as const,
  //   year:     "2024",
  //   highlights: [
  //     "Add your key technical highlights here",
  //     "What made this project interesting or hard?",
  //     "Any impact metrics? (e.g. 10k users, 99.9% uptime)",
  //   ],
  // },
  // {
  //   id:       "project-3",
  //   name:     "wip-project",
  //   emoji:    "🛠️",
  //   tagline:  "Something you're currently building",
  //   desc:     "Describe what you're working on right now.",
  //   tech:     ["TypeScript", "Go", "Docker"],
  //   github:   "https://github.com/tunyarzartoe",
  //   demo:     null,
  //   status:   "wip" as const,
  //   year:     "2025",
  //   highlights: [
  //     "What are you building?",
  //     "What's the most interesting technical challenge?",
  //   ],
  // },
];

export const SKILLS = {
  Frontend: [
    { name: "TypeScript / JavaScript", level: 90 },
    { name: "React / Next.js",          level: 88 },
    { name: "Tailwind CSS",             level: 85 },
    { name: "HTML / CSS",               level: 92 },
  ],
  Backend: [
    { name: "Node.js",          level: 82 },
    { name: "Java",             level: 80 },
    { name: "Python",           level: 75 },
    { name: "C#",               level: 70 },
    { name: "REST APIs",        level: 85 },
    { name: "PostgreSQL / SQL", level: 78 },
  ],
  "Tools & Infra": [
    { name: "Git / GitHub",      level: 90 },
    { name: "Docker",            level: 70 },
    { name: "Vercel",            level: 88 },
    { name: "Linux / Terminal",  level: 80 },
  ],
};

export const EXPERIENCE = [
  {
    company:  "Your Company",
    role:     "Full-Stack Developer",
    period:   "2023 — Present",
    location: "Yangon, Myanmar",
    type:     "Full-time",
    bullets: [
      "Replace with your actual work experience",
      "What did you build? Who did it serve?",
      "Any measurable outcomes? (performance ↑, users ↑, cost ↓)",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    company:  "Freelance / Personal",
    role:     "Frontend Developer",
    period:   "2021 — 2023",
    location: "Remote",
    type:     "Contract",
    bullets: [
      "Built web projects for clients",
      "Add real details here",
    ],
    tech: ["React", "Tailwind CSS", "Firebase"],
  },
];

export const EDUCATION = {
  degree:   "B.Sc. Computer Science",
  school:   "Your University",
  period:   "2018 — 2022",
  gpa:      "3.8 / 4.0",
  bullets: [
    "Thesis: Add your thesis topic",
    "Relevant coursework: Data Structures, Algorithms, Networks",
  ],
};

export const SOCIALS = [
  { label: "Email",    value: ME.email,    href: `mailto:${ME.email}` },
  { label: "GitHub",   value: "tunyarzartoe", href: ME.github },
  { label: "LinkedIn", value: "tunyarzartoe", href: ME.linkedin },
  { label: "Website",  value: "tunyarzartoe.vercel.app", href: ME.website },
];
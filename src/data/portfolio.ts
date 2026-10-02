// ══════════════════════════════════════════════════════════
//  EDIT THIS FILE TO PERSONALISE YOUR PORTFOLIO
//  Change your info here — everything else reads from here
// ══════════════════════════════════════════════════════════

export const ME = {
  name:      "Tun Yar Zar Toe",
  handle:   "tun.dev",
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
  {
    id:       "japanese-study-guide",
    name:     "japanese-study-guide",
    emoji:    "📖",
    tagline:  "学習ガイド — Japanese self-study companion",
    desc:     "A self-study companion for learning Japanese, covering hiragana, katakana, vocabulary, grammar, kanji quizzes, exams and listening practice in a simple, focused interface.",
    tech:     ["React", "React Router", "CSS"],
    github:   "https://github.com/tunyarzartoe",
    demo:     "https://japanese-self-study-guide.vercel.app",
    status:   "live" as const,
    year:     "2026",
    highlights: [
      "Eight sections: Home, Hiragana, Katakana, Vocabulary, Grammar, Kanji Quiz, Exams, Listening",
      "Content covers JLPT N5 up to N1",
      "Gradient theme for both light and dark mode",
    ],
  },
  {
    id:       "ai-carbon-calculator",
    name:     "ai-carbon-calculator",
    emoji:    "🌍",
    tagline:  "CO2 AI — carbon footprint estimator",
    desc:     "An AI-powered carbon footprint calculator that estimates emissions from daily activities and highlights ways to reduce impact.",
    tech:     ["React", "Next.js", "Tailwind CSS", "AI Integration"],
    github:   "https://github.com/tunyarzartoe",
    demo:     "https://ai-carbon-calculator.vercel.app",
    status:   "live" as const,
    year:     "2026",
    highlights: [
      "Estimates emissions from everyday activities",
      "AI-generated suggestions for reducing your footprint",
      "Built with Next.js and Tailwind CSS",
    ],
  },
  {
    id:       "burmese-recipe-app",
    name:     "burmese-recipe-app",
    emoji:    "🍜",
    tagline:  "Burmese recipes & instructions",
    desc:     "A Burmese recipe collection app. Browse traditional recipes, view ingredients and instructions, and navigate between recipe pages.",
    tech:     ["React", "MobX", "React Router", "CSS"],
    github:   "https://github.com/tunyarzartoe",
    demo:     "https://burmese-recipe-app-iota.vercel.app",
    status:   "live" as const,
    year:     "2026",
    highlights: [
      "Traditional Burmese recipes with ingredients and step-by-step instructions",
      "MobX state management with multi-page routing",
      "Deployed on Vercel",
    ],
  },
  {
    id:       "j4u",
    name:     "j4u-job-portal",
    emoji:    "💼",
    tagline:  "J4U — job portal platform",
    desc:     "A job portal platform connecting job seekers with companies, with job listings, company profiles, job filtering, and user authentication.",
    tech:     ["React", "Redux", "React Router", "Bootstrap", "MDB UI Kit"],
    github:   "https://github.com/tunyarzartoe",
    demo:     "https://j4u-frontend.vercel.app",
    status:   "live" as const,
    year:     "2024",
    highlights: [
      "Job listings with filtering for job seekers",
      "Company profiles and user authentication",
      "Redux state management across the app",
    ],
  },
  {
    id:       "weather-app",
    name:     "weather-app",
    emoji:    "🌤️",
    tagline:  "Real-time weather & 5-day forecast",
    desc:     "A dynamic weather forecasting app providing real-time weather updates and a 5-day forecast.",
    tech:     ["React", "Bootstrap", "Axios", "React Icons"],
    github:   "https://github.com/tunyarzartoe",
    demo:     "https://react-weather-app-eta-bay.vercel.app",
    status:   "live" as const,
    year:     "2024",
    highlights: [
      "Real-time weather data fetched with Axios",
      "5-day forecast view",
    ],
  },
  {
    id:       "social-app",
    name:     "react-social-app",
    emoji:    "💬",
    tagline:  "Social app with Redux",
    desc:     "A social app built with Redux for state management, demonstrating posts with author and post CRUD.",
    tech:     ["React", "Redux", "Bootstrap", "Axios", "date-fns"],
    github:   "https://github.com/tunyarzartoe",
    demo:     "https://react-social-app-gules.vercel.app",
    status:   "live" as const,
    year:     "2024",
    highlights: [
      "Posts and authors with full CRUD",
      "Redux for centralized state management",
    ],
  },
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
    company:  "KUMO SOLUTIONS Co. Ltd",
    role:     "Junior Software Developer / Web Developer",
    period:   "Jun 2023 — Sep 2024",
    location: "Myanmar / Remote",
    type:     "Full-time",
    bullets: [
      "Engineered reusable UI components with React.js and JavaScript, standardizing design systems across client-facing apps",
      "Integrated RESTful endpoints with backend engineers, handling authentication flows and async data fetching",
      "Worked in Agile sprints with Git/GitHub version management, code reviews and release testing",
    ],
    tech: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
  },
  {
    company:  "Evercomm Singapore",
    role:     "Web Developer",
    period:   "2023 — 2024",
    location: "Singapore / Remote",
    type:     "Contract",
    bullets: [
      "Built responsive data visualization modules for energy consumption and carbon analytics dashboards",
      "Implemented state management and real-time data feeds for continuous equipment monitoring",
      "Ensured cross-browser compatibility and mobile responsiveness across complex dashboards",
    ],
    tech: ["React.js", "Data Visualization", "REST APIs", "Tailwind CSS"],
  },
  {
    company:  "Host Myanmar Software Solutions",
    role:     "Web Developer",
    period:   "2022 — 2023",
    location: "Mandalay, Myanmar",
    type:     "Full-time",
    bullets: [
      "Built dynamic web applications with Java backends and responsive frontend templates",
      "Designed MySQL databases, wrote optimized queries and built CRUD endpoints",
      "Worked directly with business stakeholders to turn operational requirements into working code",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
  },
  {
    company:  "YSK Japanese Language School",
    role:     "Technical Staff / IT Specialist",
    period:   "Jul 2022 — Feb 2023",
    location: "Myanmar",
    type:     "Part-time",
    bullets: [
      "Maintained the internal student management portal and kept system uptime high",
      "Gave frontline IT and software support to staff and students for digital course materials",
    ],
    tech: ["System Administration", "Web Support", "HTML/CSS"],
  },
];

export const EDUCATION = {
  degree:   "Specialized Training College Diploma in IT",
  school:   "Tokyo IT Programming & Accounting College (東京ITプログラミング＆会計専門学校)",
  period:   "Apr 2026 — Present",
  bullets: [
    "Professional training in software architecture, enterprise application development and system security",
    "Coursework: Advanced Web Systems, Database Management, System Architecture, Software Engineering Best Practices",
    "Earlier: Tokyo Asahi Academy Japanese Language School (2024 — 2026), JLPT N2 passed Dec 2025",
  ],
};

export const SOCIALS = [
  { label: "Email",    value: ME.email,    href: `mailto:${ME.email}` },
  { label: "GitHub",   value: "tunyarzartoe", href: ME.github },
  { label: "LinkedIn", value: "tunyarzartoe", href: ME.linkedin },
  { label: "Website",  value: "tunyarzartoe.vercel.app", href: ME.website },
];
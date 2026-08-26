import type {
  EducationItem,
  ExperienceItem,
  FeaturedWorkItem,
  ProjectItem,
  SkillGroup,
  Stat,
} from "../types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    label: "Agent & LLM",
    items: ["RAG", "LangChain", "LangGraph", "MCP", "OpenAI API", "Azure OpenAI", "Anthropic Claude", "Hugging Face", "Prompt Engineering"],
  },
  {
    label: "Agent Harness",
    items: ["OpenSandbox", "HITL Permissions", "Agent Memory", "Skills Systems"],
  },
  {
    label: "Backend & Data",
    items: ["FastAPI", "SQLAlchemy", "Celery", "Pandas", "PostgreSQL", "MySQL", "SQLite", "Redis", "Azure Cognitive Search", "Blob Storage"],
  },
  {
    label: "Computer Vision",
    items: ["YOLO", "PyTorch", "CNN", "Transformers", "CM-GAN", "DeepFillv2", "ArcFace", "Triplet Loss"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure", "Docker", "Kubernetes", "Azure DevOps", "Git/GitHub", "Pytest", "Langfuse"],
  },
  {
    label: "AI Coding Tools",
    items: ["Claude Code", "Codex", "Cursor"],
  },
];

export const heroTags = [
  "Harness", "Rag", "Agentic", "MCP", "Redis", "PyTorch", "Azure",
];

export const stats: Stat[] = [
  { value: "3+", label: "Years in production LLM/AI" },
  { value: "20", label: "Person platform team" },
  { value: "43.2K★", label: "OSS project merged" },
  { value: "1", label: "US patent filed" },
];

export const experience: ExperienceItem[] = [
  {
    period: "Jul 2025 — Present",
    org: "ITOCHU GPT",
    role: "AI Engineer",
    meta: "Client: Itochu Corporation · Team of ~20",
    points: [
      "Own the \"file agent\" subsystem: PPTX/DOCX/XLSX generation & editing, sandboxed code execution, document-conversion pipelines.",
      "Delivered video-analytics Q&A and streaming voice (TTS) features.",
      "Leading the platform's migration from workflow-based automation to a fully agentic architecture.",
    ],
  },
  {
    period: "May 2026 — Present",
    org: "Infinity",
    role: "Lead Engineer",
    meta: "Agent Harness & Sandbox Platform · Independent codebase",
    points: [
      "Designed and built an AI agent harness end-to-end — tools, permissions, sandbox, skills, and connector layer.",
      "Integrated OpenSandbox as a pluggable, isolated execution backend for agent-generated shell/file operations.",
      "Built a human-in-the-loop (HITL) tool-approval system and MCP connector layer for Microsoft 365 tools.",
    ],
  },
  {
    period: "Feb 2025 — Apr 2025",
    org: "AI Buddy",
    role: "AI Engineer",
    meta: "Client: KPMG · Team of 5",
    points: [
      "Built an automated crawling pipeline extracting financial data from structured & unstructured sources.",
      "Developed the knowledge base backing real-time RAG querying for the chatbot.",
    ],
  },
  {
    period: "Dec 2024 — Mar 2025",
    org: "Ivy Chatbot",
    role: "AI Engineer",
    meta: "FPT Software IvyChat product line",
    points: [
      "Optimized document chunking to improve retrieval accuracy across multiple source types.",
      "Implemented LangGraph to structure multi-turn conversation flow and maintain context.",
    ],
  },
];

export const featuredWork: FeaturedWorkItem[] = [
  {
    tag: "PATENT",
    title: "Query Vision",
    desc: "LLM system answering questions over live AI-camera feeds. Underlying method filed as US patent application US20260189519A1.",
    href: "https://eureka.patsnap.com/patent/US20260189519A1",
  },
  {
    tag: "OPEN SOURCE",
    title: "OmniRoute",
    desc: "Authored a Codex apply_patch compatibility fix, ported and merged into OmniRoute (43.2K★, fork of 9Router) — credited as co-author.",
    href: "https://github.com/diegosouzapw/OmniRoute/pull/4862",
  },
];

export const moreProjects: ProjectItem[] = [
  {
    date: "2025",
    title: "AI Buddy",
    desc: "Real-time financial-insights chatbot for KPMG over a continuously crawled knowledge base.",
    stack: ["Azure OpenAI", "LangGraph", "PostgreSQL"],
    art: "rag",
  },
  {
    date: "2025",
    title: "Ivy Chatbot",
    desc: "Multi-source conversational assistant — part of FPT's IvyChat product line.",
    stack: ["LangChain", "LangGraph", "FastAPI"],
    art: "chat",
  },
  {
    date: "2025",
    title: "BP Risk Search Agent",
    desc: "LangGraph + GPT + web-crawling agent for automated partner compliance-risk search.",
    stack: ["LangGraph", "FastAPI", "PostgreSQL"],
    art: "radar",
  },
  {
    date: "2024",
    title: "QaiDora Mask Ads Defender",
    desc: "Real-time CV system detecting and blurring prohibited imagery during live broadcasts.",
    stack: ["YOLOv8/v9", "CM-GAN", "OpenCV"],
    art: "vision",
  },
  {
    date: "2024",
    title: "Query Vision",
    desc: "LLM system summarizing and answering questions over live AI-camera feeds.",
    stack: ["Azure OpenAI", "PostgreSQL"],
    art: "camera",
  },
  {
    date: "2023",
    title: "Vietnamese Sign Language Translator",
    desc: "University capstone — CNN + Transformer model translating sign language to text/speech.",
    stack: ["PyTorch", "Mediapipe"],
    art: "hand",
  },
  {
    date: "—",
    title: "Helmet Violation Recognition",
    desc: "Detects helmetless motorcyclists using YOLO, PaddleOCR, and ByteTrack.",
    stack: ["YOLO", "PaddleOCR", "ByteTrack"],
    href: "https://github.com/nstung463/Vietnam_Motorbike_Helmet_Violation_Recognition",
    art: "helmet",
  },
];

export const education: EducationItem[] = [
  {
    period: "2026 — Present",
    title: "Master of Software Engineering (MSE), Artificial Intelligence",
    org: "FPT University · In Progress",
  },
  {
    period: "2020 — 2024",
    title: "B.Sc. in Artificial Intelligence",
    org: "FPT University · GPA 8.45/10",
  },
];

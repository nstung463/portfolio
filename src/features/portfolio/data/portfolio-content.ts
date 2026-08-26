import type {
  EducationItem,
  ExperienceItem,
  FeaturedWorkItem,
  HarnessNode,
  ProjectItem,
  SectionRef,
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
  { value: "7", label: "Projects shipped" },
  { value: "1", label: "US patent filed" },
];

export const experience: ExperienceItem[] = [
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
    desc: "A small apply_patch compatibility fix for Codex, ported upstream and merged into OmniRoute. Minor in scope — it is here because I read unfamiliar code and left it working.",
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

export const sections: SectionRef[] = [
  { id: "about", n: "01", label: "About" },
  { id: "skills", n: "02", label: "Skills" },
  { id: "experience", n: "03", label: "Experience" },
  { id: "harness", n: "04", label: "Harness" },
  { id: "work", n: "05", label: "Work" },
  { id: "more-projects", n: "06", label: "Projects" },
  { id: "writing", n: "07", label: "Writing" },
  { id: "education", n: "08", label: "Education" },
  { id: "contact", n: "09", label: "Contact" },
];

export const harnessNodes: HarnessNode[] = [
  {
    id: "loop",
    step: "01",
    title: "Agent loop",
    short: "Plan → act → observe, until the task is actually done.",
    detail:
      "The loop owns the conversation state, decides when to call a tool, and feeds the result back to the model. It is resumable: a session can be interrupted, persisted, and picked up later without losing the plan.",
    bullets: ["Streaming turn execution", "Resumable session state", "Token & cost accounting", "Sub-agent delegation"],
  },
  {
    id: "tools",
    step: "02",
    title: "Tool layer",
    short: "A typed contract between the model and everything it can touch.",
    detail:
      "Every capability is a schema-validated tool with a narrow surface. Bad arguments fail loudly before anything executes, and each tool declares whether it reads, writes, or reaches the network — which is what the permission layer keys on.",
    bullets: ["JSON-schema validated args", "Read / write / network classes", "Structured tool results", "Per-tool timeouts"],
  },
  {
    id: "sandbox",
    step: "03",
    title: "Sandbox",
    short: "Model-authored code runs somewhere it cannot hurt anyone.",
    detail:
      "Shell and file operations execute inside a pluggable isolated backend rather than the host. The filesystem is scoped to the session workspace, the network is deny-by-default, and the whole environment is disposable.",
    bullets: ["Pluggable execution backend", "Workspace-scoped filesystem", "Deny-by-default egress", "Disposable per session"],
  },
  {
    id: "hitl",
    step: "04",
    title: "HITL approvals",
    short: "The human keeps the irreversible decisions.",
    detail:
      "Anything destructive or outward-facing pauses for an explicit approval, showing the exact command or payload. Approvals can be granted once, for a session, or persisted as a rule — so the agent gets faster without getting riskier.",
    bullets: ["Diff & command preview", "Once / session / always scopes", "Persisted allow rules", "Full audit trail"],
  },
  {
    id: "memory",
    step: "05",
    title: "Memory & skills",
    short: "What the agent carries between sessions.",
    detail:
      "Durable facts live in a file-backed memory store with an index the agent loads each run. Skills are packaged instruction sets that load on demand, so capability grows without inflating every prompt.",
    bullets: ["File-backed memory index", "On-demand skill loading", "Context compaction", "Project vs. user scope"],
  },
  {
    id: "connectors",
    step: "06",
    title: "MCP connectors",
    short: "Where the agent meets the systems people actually work in.",
    detail:
      "An MCP client layer mounts external servers — Microsoft 365 among them — as first-class tools. Each connector inherits the same validation, permission, and audit path as a built-in tool; nothing gets a side door.",
    bullets: ["MCP client transport", "Microsoft 365 tools", "OAuth token lifecycle", "Same permission path"],
  },
];

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
  { id: "more-projects", n: "04", label: "Projects" },
  { id: "harness", n: "05", label: "Harness" },
  { id: "work", n: "06", label: "Work" },
  { id: "education", n: "07", label: "Education" },
  { id: "contact", n: "08", label: "Contact" },
];

export const harnessNodes: HarnessNode[] = [
  {
    id: "model",
    step: "01",
    title: "Model foundations",
    short: "Data → pretraining → a base LLM.",
    detail:
      "Before an agent can act, there is a model: data becomes tokens, a Transformer learns to predict the next one, and pretraining produces a foundation LLM.",
    bullets: ["Data + tokenization", "Transformer architecture", "Next-token prediction", "Base / foundation LLM"],
  },
  {
    id: "post-training",
    step: "02",
    title: "Post-training",
    short: "Turn a base model into a chat- and tool-capable LLM.",
    detail:
      "SFT, preference tuning, and tool-use training shape how the model follows instructions, reasons through a task, and emits structured actions.",
    bullets: ["SFT / instruction tuning", "RLHF / DPO / RL", "Reasoning behavior", "Tool-use / function calling"],
  },
  {
    id: "loop",
    step: "03",
    title: "Agent loop",
    short: "LLM + tools + a loop = an agent.",
    detail:
      "The agent begins outside model training: it calls the LLM, decides whether to answer or act, executes a tool, observes the result, and loops until the goal is done.",
    bullets: ["Reason → act → observe", "Tool-call decisions", "Stop conditions", "Multi-turn execution"],
  },
  {
    id: "tools",
    step: "04",
    title: "Tool layer",
    short: "Typed hands for the model to do real work.",
    detail:
      "Tools give the agent a narrow, testable interface to files, shells, browsers, databases, APIs, and external services.",
    bullets: ["Bash / files / web", "Structured arguments", "Validation + timeouts", "Tool results"],
  },
  {
    id: "runtime",
    step: "05",
    title: "Agent harness",
    short: "The runtime that makes an agent safe, stateful, and shippable.",
    detail:
      "The harness wraps the agent with the environment and controls it needs to work for longer than a single turn: state, memory, context, sandboxing, permissions, and connectors.",
    bullets: ["Sandbox + permissions", "State + memory", "Context management", "MCP connectors"],
  },
  {
    id: "production",
    step: "06",
    title: "Production systems",
    short: "Long-running agents, task orchestration, and multi-agent workflows.",
    detail:
      "Once the runtime is durable, agents can manage tasks, run in the background, delegate to subagents, connect to real systems, and expose their work to evaluation and observability.",
    bullets: ["Background tasks", "Subagents + delegation", "Observability + evals", "Audit + recovery"],
  },
];

export const harnessDiagramContent = {
  model: {
    sources: ["Web", "Books", "Code", "Papers"],
    tokenization: "Tokenize",
    transformer: "Transformer",
    output: "Base LLM",
  },
  postTraining: {
    input: "Base LLM",
    sft: "Supervised Fine-Tuning (SFT)",
    instruction: "Instruction data",
    rewardModeling: "Reward modeling",
    dpo: "DPO",
    rlhf: "Reinforcement Learning from Human Feedback (RLHF)",
    humanFeedback: "Human feedback",
    rewardModel: "Reward model",
    checkpoint: "RLHF checkpoint",
  },
} as const;

export const contact = {
  label: "Let's talk",
  heading: "Let's build something grounded.",
  blurb: "Open to AI Engineer / LLM Application roles. I usually reply within a day.",
  availability: "Available for new work",
  emailHint: "Best way to reach me",
  resumeHint: "One page, kept current",
  resumeCta: "Read the résumé",
} as const;

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
    period: "Jul 2025 — Present",
    org: "ITOCHU GPT",
    role: "AI Engineer",
    meta: "Multi-Agent AI Platform · Client: ITOCHU Corporation · Team of ~20",
    points: [
      "Own the File Agent subsystem — PPTX/DOCX/XLSX generation inside isolated sandboxes.",
      "Delivered video-analytics Q&A and streaming text-to-speech capabilities integrated into the platform.",
      "Collaborated across backend, frontend, AI, and infrastructure teams to bring agent capabilities from architecture through production deployment.",
    ],
  },
  {
    period: "May 2026 — Present",
    org: "Infinity",
    role: "AI Engineer",
    meta: "Agent Harness & Sandbox Platform · Independent codebase · Technical Lead",
    points: [
      "Built the agent harness end-to-end: runtime, tool execution, permissions, and sandbox orchestration.",
      "Integrated OpenSandbox to isolate LLM-generated code and file-processing workloads.",
      "Designed a human-in-the-loop tool-approval system with pause, persist, and resume.",
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
    org: "FPT University",
    inProgress: true,
  },
  {
    period: "2021 — 2025",
    title: "B.Sc. in Artificial Intelligence",
    org: "FPT University",
    detail: "GPA 8.45/10",
  },
];

export const sections: SectionRef[] = [
  { id: "about", n: "01", label: "About" },
  { id: "skills", n: "02", label: "Skills" },
  { id: "experience", n: "03", label: "Experience" },
  { id: "more-projects", n: "04", label: "Projects" },
  { id: "work", n: "05", label: "Work" },
  { id: "harness", n: "06", label: "Harness" },
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
    short: "The machinery that turns an agent into a durable work system.",
    detail:
      "A harness is every non-model layer that shapes the agent's work: instructions and skills, planning and task state, memory and context management, tools and MCP, sandboxed execution, permissions, background runs, and subagent delegation.",
    bullets: [
      "Instructions + skills",
      "Plans + task graphs",
      "State + memory",
      "Background tasks",
      "Subagents + delegation",
      "Sandbox + HITL",
    ],
  },
  {
    id: "production",
    step: "06",
    title: "Loop Engineer",
    short: "Stacked loops for reliable work and continuous improvement.",
    detail:
      "Loop engineering is how an agent becomes a production system: define what done means, execute, verify the result, stop or escalate safely, and use traces to improve the next run.",
    bullets: [
      "Plan → execute → verify",
      "Done + stop conditions",
      "Retry, escalate, recover",
      "Traces → better loops",
    ],
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

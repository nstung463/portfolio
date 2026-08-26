export const siteConfig = {
  name: "Nguyen Son Tung",
  role: "AI Engineer",
  tagline: "LLM · RAG · Agent Harness",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nstung.dev",
  description:
    "AI Engineer with 3+ years shipping production LLM, RAG, and multi-agent systems. Specialised in agent harness engineering — tools, sandbox, permissions, memory, and connectors.",
  email: "nstung463@gmail.com",
  phone: "0335 955 790",
  location: "Ho Chi Minh City, Vietnam",
  links: {
    github: "https://github.com/nstung463",
    linkedin: "https://linkedin.com/in/nstung463",
  },
} as const;

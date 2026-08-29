import type { ComponentType, CSSProperties, SVGProps } from "react";
import {
  Activity,
  Blocks,
  Box,
  Brain,
  Brush,
  Database,
  FileSearch,
  GitCompare,
  Layers,
  MessageSquareCode,
  ScanFace,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiAnthropic,
  SiCelery,
  SiClaudecode,
  SiCursor,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiHuggingface,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiModelcontextprotocol,
  SiMysql,
  SiPandas,
  SiPostgresql,
  SiPytest,
  SiPytorch,
  SiRedis,
  SiSqlalchemy,
  SiSqlite,
  SiYolo,
} from "react-icons/si";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface SkillIconSpec {
  icon: IconComponent;
  /* The brand's own color. Omitted for marks that are black/white by design
     (GitHub, MCP, Cursor) and for the lucide glyphs standing in for concepts —
     those inherit the pill's color instead. */
  color?: string;
  /* Only where the brand color is too dark to read on the dark surface. */
  dark?: string;
}

/* Brand marks where one exists, a lucide glyph where the skill is a concept
   with no logo (RAG, Agent Memory, Triplet Loss, ...). Keyed by the exact label
   in `skillGroups`, so a renamed skill loses its icon rather than silently
   showing the wrong one. */
const skillIcons: Record<string, SkillIconSpec> = {
  RAG: { icon: FileSearch },
  LangChain: { icon: SiLangchain, color: "#1C3C3C", dark: "#5BC8B8" },
  LangGraph: { icon: SiLanggraph, color: "#1C3C3C", dark: "#5BC8B8" },
  MCP: { icon: SiModelcontextprotocol },
  "OpenAI API": { icon: RiOpenaiFill, color: "#0F9D77", dark: "#19C79A" },
  "Azure OpenAI": { icon: RiOpenaiFill, color: "#0F9D77", dark: "#19C79A" },
  "Anthropic Claude": { icon: SiAnthropic, color: "#C4653F", dark: "#E08C6B" },
  "Hugging Face": { icon: SiHuggingface, color: "#D9A400", dark: "#FFD21E" },
  "Prompt Engineering": { icon: MessageSquareCode },

  OpenSandbox: { icon: Box },
  "HITL Permissions": { icon: ShieldCheck },
  "Agent Memory": { icon: Brain },
  "Skills Systems": { icon: Blocks },

  FastAPI: { icon: SiFastapi, color: "#009688" },
  SQLAlchemy: { icon: SiSqlalchemy, color: "#D71F00", dark: "#F2553B" },
  Celery: { icon: SiCelery, color: "#37814A", dark: "#4FA866" },
  Pandas: { icon: SiPandas, color: "#3B1E9E", dark: "#A48BFB" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1", dark: "#6E8FF0" },
  MySQL: { icon: SiMysql, color: "#00618A", dark: "#59A7C8" },
  SQLite: { icon: SiSqlite, color: "#0B4F6C", dark: "#7BB8D4" },
  Redis: { icon: SiRedis, color: "#D6362B", dark: "#FF6257" },
  "Azure Cognitive Search": { icon: Search },
  "Blob Storage": { icon: Database },

  YOLO: { icon: SiYolo, color: "#2B3A9B", dark: "#8494E8" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  CNN: { icon: Layers },
  Transformers: { icon: SiHuggingface, color: "#D9A400", dark: "#FFD21E" },
  "CM-GAN": { icon: Sparkles },
  DeepFillv2: { icon: Brush },
  ArcFace: { icon: ScanFace },
  "Triplet Loss": { icon: GitCompare },

  Azure: { icon: VscAzure, color: "#0078D4", dark: "#4CA6E8" },
  Docker: { icon: SiDocker, color: "#2496ED", dark: "#4FAEF5" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5", dark: "#6C99F0" },
  "Azure DevOps": { icon: VscAzureDevops, color: "#0078D4", dark: "#4CA6E8" },
  "Git/GitHub": { icon: SiGithub },
  Pytest: { icon: SiPytest, color: "#0A9EDC", dark: "#3FB8EC" },
  Langfuse: { icon: Activity },

  "Claude Code": { icon: SiClaudecode, color: "#C4653F", dark: "#E08C6B" },
  Codex: { icon: RiOpenaiFill, color: "#0F9D77", dark: "#19C79A" },
  Cursor: { icon: SiCursor },
};

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const spec = skillIcons[name];
  if (!spec) return null;

  const { icon: Icon, color, dark } = spec;

  /* The color class has to be owned here, not passed in: a neutral `text-*`
     from the caller and the branded one are both text-color utilities, and the
     caller's would win the cascade and gray every logo out. */
  if (!color) {
    return <Icon aria-hidden className={`${className ?? ""} text-foreground/60`} />;
  }

  return (
    <Icon
      aria-hidden
      className={`${className ?? ""} text-[color:var(--skill-icon)] dark:text-[color:var(--skill-icon-dark)]`}
      style={{ "--skill-icon": color, "--skill-icon-dark": dark ?? color } as CSSProperties}
    />
  );
}

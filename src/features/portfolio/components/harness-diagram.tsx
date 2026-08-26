"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { harnessDiagramContent, harnessNodes } from "../data/portfolio-content";
import type { HarnessNodeId } from "../types/portfolio";

export function HarnessDiagram() {
  const [activeId, setActiveId] = useState<HarnessNodeId>(harnessNodes[0].id);
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const panelId = useId();

  const activeIndex = harnessNodes.findIndex((node) => node.id === activeId);
  const active = harnessNodes[activeIndex];

  const focusNode = (index: number) => {
    const next = (index + harnessNodes.length) % harnessNodes.length;
    setActiveId(harnessNodes[next].id);
    buttonsRef.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusNode(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusNode(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusNode(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusNode(harnessNodes.length - 1);
    }
  };

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="AI agent stack layers"
        aria-orientation="horizontal"
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
      >
        {harnessNodes.map((node, index) => {
          const isActive = node.id === activeId;
          const isPast = index < activeIndex;

          return (
            <div key={node.id} className="relative">
              {index > 0 && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-1/2 -left-2.5 hidden h-px w-2.5 lg:block",
                    isPast || isActive ? "bg-[#ff7a2f]" : "bg-white/20",
                  )}
                />
              )}
              <button
                ref={(element) => {
                  buttonsRef.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`${panelId}-tab-${node.id}`}
                aria-selected={isActive}
                aria-controls={`${panelId}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(node.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  "group relative flex h-full w-full flex-col items-start gap-1.5 rounded-md border p-3.5 text-left transition-all duration-200 outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[#ff7a2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#140c07]",
                  isActive
                    ? "-translate-y-0.5 border-[#ff7a2f] bg-[#ff7a2f]/12 shadow-[0_10px_30px_-12px_rgba(255,122,47,0.6)]"
                    : "border-white/15 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.06]",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-[0.14em]",
                    isActive ? "text-[#ff7a2f]" : "text-white/45",
                  )}
                >
                  {node.step}
                </span>
                <span className="text-sm leading-5 font-semibold">{node.title}</span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 h-0.5 w-full origin-left rounded-full transition-transform duration-300",
                    isActive ? "scale-x-100 bg-[#ff7a2f]" : "scale-x-0 bg-white/40 group-hover:scale-x-100",
                  )}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${active.id}`}
        className="mt-4 grid gap-6 rounded-lg border border-white/12 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div key={active.id} className="[animation:reveal-fade_0.35s_ease_both]">
          <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff7a2f] uppercase">
            {active.step} · {active.title}
          </p>
          <p className="mt-3 text-xl leading-7 font-semibold sm:text-2xl">{active.short}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{active.detail}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 font-mono text-[11px] tracking-wide text-white/75">
                <span aria-hidden className="mt-[3px] text-[#ff7a2f]">
                  ▪
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <StackLayerDiagram activeIndex={activeIndex} />
      </div>

      <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase">
        {"// click a layer · arrow keys to step through"}
      </p>
    </div>
  );
}

function StackLayerDiagram({ activeIndex }: { activeIndex: number }) {
  if (activeIndex === 0) {
    return (
      <GeneratedDiagramImage
        src="/images/agent-stack-model-foundations.png"
        alt="Diagram showing raw data flowing through tokenization, Transformer architecture, and pretraining into a base foundation LLM."
      />
    );
  }
  if (activeIndex === 1) {
    return (
      <GeneratedDiagramImage
        src="/images/agent-stack-post-training.png"
        alt="Diagram showing post-training flowing from supervised fine-tuning through instruction data, reward modeling, DPO, and RLHF outputs."
      />
    );
  }
  return <HarnessFlow activeIndex={activeIndex} />;
}

function GeneratedDiagramImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-lg bg-[#f7f2ee] lg:ml-auto">
      <Image src={src} alt={alt} width={1536} height={1024} className="h-auto w-full" />
    </div>
  );
}

function PaperDiagram({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden className="relative w-full max-w-xl lg:ml-auto">
      <svg viewBox="0 0 520 330" className="h-auto w-full">
        {children}
      </svg>
    </div>
  );
}

function ModelFoundationsDiagram() {
  const { sources, tokenization, transformer, output } = harnessDiagramContent.model;

  return (
    <PaperDiagram>
      <defs>
        <pattern id="model-paper-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#1a1714" opacity="0.14" />
        </pattern>
        <marker id="model-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0L8 4L0 8Z" fill="#e35b20" />
        </marker>
      </defs>
      <rect x="4" y="4" width="512" height="322" rx="18" fill="#f7f2ee" />
      <rect x="4" y="4" width="512" height="322" rx="18" fill="url(#model-paper-dots)" />
      <text x="28" y="38" fill="#1a1714" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="2">
        MODEL FOUNDATIONS
      </text>
      {sources.map((source, index) => {
        const y = 72 + index * 49;
        const rotations = [-2, 1.5, -1, 2];
        return (
          <g key={source} transform={`rotate(${rotations[index]} 62 ${y + 16})`}>
            <rect x="28" y={y} width="82" height="32" rx="7" fill={index % 2 ? "#d9e4dc" : "#f1c38c"} stroke="#1a1714" strokeWidth="1.5" />
            <text x="69" y={y + 20} textAnchor="middle" fill="#1a1714" fontSize="11" fontFamily="ui-monospace, monospace">
              {source}
            </text>
          </g>
        );
      })}
      <path d="M120 88C145 88 142 126 164 138" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#model-arrow)" />
      <path d="M120 137C146 137 142 148 164 151" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#model-arrow)" />
      <path d="M120 186C146 186 142 171 164 165" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#model-arrow)" />
      <path d="M120 235C145 235 143 188 164 178" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#model-arrow)" />
      <rect x="164" y="132" width="92" height="52" rx="10" fill="#f4a261" stroke="#1a1714" strokeWidth="2" transform="rotate(-2 210 158)" />
      <text x="210" y="154" textAnchor="middle" fill="#1a1714" fontSize="11" fontFamily="ui-monospace, monospace">
        {tokenization}
      </text>
      <text x="210" y="170" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.7">
        tokens → vectors
      </text>
      <path d="M260 158C276 158 278 158 292 158" fill="none" stroke="#e35b20" strokeWidth="2" markerEnd="url(#model-arrow)" />
      <g transform="rotate(1 350 158)">
        <rect x="292" y="83" width="116" height="150" rx="14" fill="#f7f2ee" stroke="#1a1714" strokeWidth="2" />
        <text x="350" y="106" textAnchor="middle" fill="#1a1714" fontSize="11" fontFamily="ui-monospace, monospace">
          {transformer}
        </text>
        {[0, 1, 2].map((index) => (
          <g key={index}>
            <rect x="312" y={122 + index * 31} width="76" height="20" rx="6" fill={index === 1 ? "#d9e4dc" : "#f1c38c"} stroke="#1a1714" strokeWidth="1.2" />
            <circle cx="326" cy={132 + index * 31} r="3" fill="#e35b20" />
            <circle cx="338" cy={132 + index * 31} r="3" fill="#1a1714" opacity="0.6" />
            <circle cx="350" cy={132 + index * 31} r="3" fill="#78a89a" />
          </g>
        ))}
      </g>
      <path d="M412 158C425 158 427 158 440 158" fill="none" stroke="#e35b20" strokeWidth="2" markerEnd="url(#model-arrow)" />
      <circle cx="466" cy="158" r="39" fill="#f4a261" stroke="#1a1714" strokeWidth="2" />
      <path d="M445 162L456 151L467 161L478 146L488 157" fill="none" stroke="#1a1714" strokeWidth="1.5" />
      <text x="466" y="205" textAnchor="middle" fill="#1a1714" fontSize="10" fontFamily="ui-monospace, monospace">
        {output}
      </text>
    </PaperDiagram>
  );
}

function PostTrainingDiagram() {
  const {
    input,
    sft,
    instruction,
    rewardModeling,
    dpo,
    rlhf,
    humanFeedback,
    rewardModel,
    checkpoint,
  } = harnessDiagramContent.postTraining;

  return (
    <PaperDiagram>
      <defs>
        <pattern id="post-paper-dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.8" fill="#1a1714" opacity="0.14" />
        </pattern>
        <marker id="post-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0L8 4L0 8Z" fill="#e35b20" />
        </marker>
      </defs>
      <rect x="4" y="4" width="512" height="322" rx="18" fill="#f7f2ee" />
      <rect x="4" y="4" width="512" height="322" rx="18" fill="url(#post-paper-dots)" />
      <text x="28" y="38" fill="#1a1714" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="2">
        POST-TRAINING
      </text>
      <path d="M260 43V57" fill="none" stroke="#e35b20" strokeWidth="2" markerEnd="url(#post-arrow)" />
      <text x="260" y="50" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.7">
        {input}
      </text>
      <g transform="rotate(-1 260 82)">
        <rect x="166" y="57" width="188" height="48" rx="10" fill="#e89245" stroke="#1a1714" strokeWidth="2" />
        <text x="260" y="80" textAnchor="middle" fill="#1a1714" fontSize="10" fontFamily="ui-monospace, monospace">
          {sft}
        </text>
        <text x="260" y="95" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.7">
          instruction tuning
        </text>
      </g>
      <path d="M210 105C193 119 173 123 145 128" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#post-arrow)" />
      <path d="M260 105V128" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#post-arrow)" />
      <path d="M310 105C328 118 350 123 378 128" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#post-arrow)" />
      <g transform="rotate(-2 100 145)">
        <rect x="34" y="128" width="132" height="34" rx="8" fill="#f7f2ee" stroke="#1a1714" strokeWidth="1.5" />
        <text x="100" y="149" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace">
          {instruction}
        </text>
      </g>
      <g transform="rotate(1 260 145)">
        <rect x="194" y="128" width="132" height="34" rx="8" fill="#f7f2ee" stroke="#1a1714" strokeWidth="1.5" />
        <text x="260" y="149" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace">
          {rewardModeling}
        </text>
      </g>
      <g transform="rotate(2 420 145)">
        <rect x="390" y="128" width="60" height="34" rx="8" fill="#d9e4dc" stroke="#1a1714" strokeWidth="1.5" />
        <text x="420" y="149" textAnchor="middle" fill="#1a1714" fontSize="10" fontFamily="ui-monospace, monospace">
          {dpo}
        </text>
      </g>
      <path d="M260 162V184" fill="none" stroke="#e35b20" strokeWidth="2" markerEnd="url(#post-arrow)" />
      <g transform="rotate(1 260 211)">
        <rect x="126" y="184" width="268" height="54" rx="10" fill="#e35b20" stroke="#1a1714" strokeWidth="2" />
        <text x="260" y="207" textAnchor="middle" fill="#f7f2ee" fontSize="10" fontFamily="ui-monospace, monospace">
          Reinforcement Learning from Human Feedback
        </text>
        <text x="260" y="224" textAnchor="middle" fill="#f7f2ee" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.8">
          {rlhf}
        </text>
      </g>
      <path d="M190 238C175 251 151 256 126 260" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#post-arrow)" />
      <path d="M260 238V260" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#post-arrow)" />
      <path d="M330 238C345 251 369 256 394 260" fill="none" stroke="#1a1714" strokeWidth="1.5" markerEnd="url(#post-arrow)" />
      <g transform="rotate(-1 92 280)">
        <rect x="30" y="260" width="124" height="34" rx="8" fill="#f7f2ee" stroke="#1a1714" strokeWidth="1.5" />
        <text x="92" y="281" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace">
          {humanFeedback}
        </text>
      </g>
      <g transform="rotate(1 260 280)">
        <rect x="194" y="260" width="132" height="34" rx="8" fill="#f7f2ee" stroke="#1a1714" strokeWidth="1.5" />
        <text x="260" y="281" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace">
          {rewardModel}
        </text>
      </g>
      <g transform="rotate(2 428 280)">
        <rect x="362" y="260" width="132" height="34" rx="8" fill="#d9e4dc" stroke="#1a1714" strokeWidth="1.5" />
        <text x="428" y="281" textAnchor="middle" fill="#1a1714" fontSize="9" fontFamily="ui-monospace, monospace">
          {checkpoint}
        </text>
      </g>
    </PaperDiagram>
  );
}

/** Schematic of the AI agent stack, with the selected layer lit up. */
function HarnessFlow({ activeIndex }: { activeIndex: number }) {
  const rows = harnessNodes.map((node, index) => ({
    label: node.title,
    active: index === activeIndex,
    passed: index < activeIndex,
  }));

  return (
    <div aria-hidden className="relative">
      <svg viewBox="0 0 260 210" className="h-auto w-full max-w-sm lg:ml-auto">
        <defs>
          <linearGradient id="harness-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7a2f" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff7a2f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff7a2f" stopOpacity="0" />
          </linearGradient>
        </defs>

        <line x1="26" y1="14" x2="26" y2="196" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        <line
          x1="26"
          y1="14"
          x2="26"
          y2={14 + (182 * (activeIndex + 1)) / rows.length}
          stroke="#ff7a2f"
          strokeWidth="1.5"
          style={{ transition: "all .4s ease" }}
        />

        {rows.map((row, index) => {
          const y = 22 + index * 33;
          return (
            <g key={row.label}>
              <line
                x1="26"
                y1={y}
                x2="52"
                y2={y}
                stroke={row.active || row.passed ? "#ff7a2f" : "rgba(255,255,255,0.18)"}
                strokeWidth="1"
                strokeDasharray={row.active ? undefined : "3 3"}
              />
              <rect
                x="52"
                y={y - 11}
                width="188"
                height="22"
                rx="4"
                fill={row.active ? "rgba(255,122,47,0.16)" : "rgba(255,255,255,0.035)"}
                stroke={row.active ? "#ff7a2f" : "rgba(255,255,255,0.14)"}
                strokeWidth="1"
                style={{ transition: "all .35s ease" }}
              />
              <text
                x="64"
                y={y + 4}
                fill={row.active ? "#ffd9c2" : "rgba(255,255,255,0.6)"}
                fontSize="9.5"
                fontFamily="ui-monospace, monospace"
                letterSpacing="0.8"
              >
                {row.label.toUpperCase()}
              </text>
              <circle
                cx="26"
                cy={y}
                r={row.active ? 4 : 2.4}
                fill={row.active || row.passed ? "#ff7a2f" : "rgba(255,255,255,0.3)"}
                style={{ transition: "all .35s ease" }}
              />
              {row.active && (
                <rect x="52" y={y - 11} width="188" height="22" rx="4" fill="url(#harness-beam)">
                  <animate attributeName="opacity" values="0.15;0.55;0.15" dur="2.4s" repeatCount="indefinite" />
                </rect>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

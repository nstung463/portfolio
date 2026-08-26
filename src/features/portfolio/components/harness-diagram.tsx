"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { harnessNodes } from "../data/portfolio-content";
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

        <HarnessFlow activeIndex={activeIndex} />
      </div>

      <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase">
        {"// click a layer · arrow keys to step through"}
      </p>
    </div>
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

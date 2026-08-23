"use client";

import { useEffect, useState } from "react";

export type TerminalStep =
  | { kind: "type"; text: string }
  | { kind: "print"; text: string; accent?: boolean }
  | { kind: "progress"; label: string; duration?: number }
  | { kind: "pause"; duration?: number };

type Line =
  | { kind: "prompt"; text: string }
  | { kind: "print"; text: string; accent?: boolean }
  | { kind: "progress-done"; label: string };

const DEFAULT_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "whoami" },
  { kind: "print", text: "a builder who ships" },
  { kind: "type", text: "cat status.log" },
  { kind: "progress", label: "writing this one up" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

const TYPE_SPEED = 32;
const BAR_WIDTH = 24;
const DEFAULT_PROGRESS_DURATION = 2200;
const DEFAULT_PAUSE_DURATION = 2600;

export default function ComingSoonTerminal({
  title = "status",
  script = DEFAULT_SCRIPT,
  className = "",
}: {
  title?: string;
  script?: TerminalStep[];
  className?: string;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<Line[]>([]);

  const step = script[stepIndex];

  const goToNextStep = () => {
    setStepIndex((i) => {
      const next = (i + 1) % script.length;
      if (next === 0) setLines([]);
      return next;
    });
    setCharIndex(0);
    setProgress(0);
  };

  useEffect(() => {
    if (step.kind !== "type") return;
    if (charIndex < step.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLines((l) => [...l, { kind: "prompt", text: step.text }]);
      goToNextStep();
    }, 400);
    return () => clearTimeout(t);
  }, [step, charIndex]);

  useEffect(() => {
    if (step.kind !== "print") return;
    const t = setTimeout(() => {
      setLines((l) => [
        ...l,
        { kind: "print", text: step.text, accent: step.accent },
      ]);
      goToNextStep();
    }, 350);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (step.kind !== "pause") return;
    const t = setTimeout(
      () => goToNextStep(),
      step.duration ?? DEFAULT_PAUSE_DURATION,
    );
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (step.kind !== "progress") return;
    const duration = step.duration ?? DEFAULT_PROGRESS_DURATION;
    if (progress >= 100) {
      const t = setTimeout(() => {
        setLines((l) => [...l, { kind: "progress-done", label: step.label }]);
        goToNextStep();
      }, 300);
      return () => clearTimeout(t);
    }
    const tickMs = 30;
    const increment = 100 / (duration / tickMs);
    const t = setTimeout(
      () => setProgress((p) => Math.min(100, p + increment)),
      tickMs,
    );
    return () => clearTimeout(t);
  }, [step, progress]);

  return (
    <div
      className={`rounded-lg border border-border-strong bg-surface overflow-hidden shadow-sm ${className}`}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-strong">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-text-faint font-mono">{title}</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-[1.7] min-h-[190px]">
        {lines.map((line, i) => (
          <div key={i}>
            {line.kind === "prompt" && (
              <span className="text-text-body">
                <span className="text-accent">$</span> {line.text}
              </span>
            )}
            {line.kind === "print" && (
              <span
                className={
                  line.accent ? "text-accent font-semibold" : "text-text-dim"
                }
              >
                {line.text}
              </span>
            )}
            {line.kind === "progress-done" && (
              <span className="text-text-dim">
                [{"#".repeat(BAR_WIDTH)}] 100% {line.label}
              </span>
            )}
          </div>
        ))}

        {step.kind === "type" && (
          <div className="text-text-body">
            <span className="text-accent">$</span>{" "}
            {step.text.slice(0, charIndex)}
            <span className="animate-blink">_</span>
          </div>
        )}

        {step.kind === "progress" && (
          <div className="text-text-dim">
            [
            {"#"
              .repeat(Math.floor((progress / 100) * BAR_WIDTH))
              .padEnd(BAR_WIDTH, "·")}
            ] {Math.floor(progress)}% {step.label}
          </div>
        )}

        {step.kind === "pause" && (
          <div className="text-text-body">
            <span className="text-accent">$</span>{" "}
            <span className="animate-blink">_</span>
          </div>
        )}
      </div>
    </div>
  );
}

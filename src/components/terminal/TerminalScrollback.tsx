import type { LineTone, TermLine } from "@/terminal/types";

const TONE_CLASS: Record<LineTone, string> = {
  default: "text-text-body",
  muted: "text-text-dim",
  faint: "text-text-faint",
  accent: "text-accent",
  heading: "text-text-strong font-semibold",
  error: "text-danger",
  prompt: "text-accent",
};

export default function TerminalScrollback({ lines }: { lines: TermLine[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <div
          key={index}
          className={`whitespace-pre-wrap break-words ${
            TONE_CLASS[line.tone ?? "default"]
          }`}
        >
          {line.text === "" ? " " : line.text}
        </div>
      ))}
    </>
  );
}

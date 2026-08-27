import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const RAMBL_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "rambl start --voice" },
  { kind: "print", text: "companion online... listening" },
  { kind: "type", text: "cat ./rambl/status.log" },
  { kind: "progress", label: "loading write-up" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function RamblPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="rambl"
        title="rambl"
        year="Jan. 2026"
        tag="Mental Wellness AI"
        stack={[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "LLM API",
        ]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        A judgment-free AI companion for talking through your feelings by voice
        or text.
      </p>

      <ComingSoonTerminal title="rambl — status" script={RAMBL_SCRIPT} />
    </main>
  );
}

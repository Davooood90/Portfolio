import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const TEXUME_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "docker run texume-engine" },
  { kind: "print", text: "compiling .tex... done" },
  { kind: "type", text: "cat ./texume/status.log" },
  { kind: "progress", label: "rendering pdf preview" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function TeXumePage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="texume"
        title="TeXume"
        year="Jul. 2025 – Jan. 2026"
        tag="LaTeX SaaS"
        stack={["Next.js", "TypeScript", "Supabase", "Docker", "LaTeX"]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        A containerized LaTeX compilation engine that generates PDFs from
        dynamic user data.
      </p>

      <ComingSoonTerminal title="texume — status" script={TEXUME_SCRIPT} />
    </main>
  );
}

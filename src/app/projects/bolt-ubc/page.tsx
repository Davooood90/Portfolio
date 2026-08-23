import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const BOLT_UBC_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "lighthouse --url=bolt.ubc.ca" },
  { kind: "print", text: "auditing performance... done" },
  { kind: "type", text: "cat ./bolt-ubc/status.log" },
  { kind: "progress", label: "optimizing assets" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function BoltUbcPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="bolt-ubc"
        title="BOLT UBC Website"
        year="Feb. 2025 – Aug. 2025"
        tag="Performance Engineering"
        stack={["React", "TypeScript", "Performance Engineering"]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        The public website for BOLT, a UBC student organization.
      </p>

      <ComingSoonTerminal title="bolt-ubc — status" script={BOLT_UBC_SCRIPT} />
    </main>
  );
}

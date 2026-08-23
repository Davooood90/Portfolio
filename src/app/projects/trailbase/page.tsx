import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const TRAILBASE_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "npm run seed:trailbase" },
  { kind: "print", text: "connecting to oracle db... done" },
  { kind: "type", text: "cat ./trailbase/status.log" },
  { kind: "progress", label: "building query index" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function TrailbasePage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="trailbase"
        title="Trailbase"
        year="Sep. 2025 – Nov. 2025"
        tag="Backend API"
        stack={["React", "Node.js", "Express", "Oracle SQL"]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        A layered REST API with a dynamic query builder for flexible,
        multi-criteria search.
      </p>

      <ComingSoonTerminal title="trailbase — status" script={TRAILBASE_SCRIPT} />
    </main>
  );
}

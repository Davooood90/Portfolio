import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const MELLO_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "mello checkin --energy=85%" },
  { kind: "print", text: "syncing team dashboard... done" },
  { kind: "type", text: "cat ./mello/status.log" },
  { kind: "progress", label: "charting team energy" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function MelloPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="mello"
        title="Mello"
        year="Nov. 2025"
        tag="Team Wellness SaaS"
        stack={["Vue", "TypeScript", "iOS", "Android", "Node.js", "Slack API"]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        A team energy tracker that turns 2-second daily check-ins into a
        real-time dashboard, helping managers catch burnout early.
      </p>

      <ComingSoonTerminal title="mello — status" script={MELLO_SCRIPT} />
    </main>
  );
}

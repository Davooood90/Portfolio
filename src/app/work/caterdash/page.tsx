import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const CATERDASH_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "caterdash serve --marketplace" },
  { kind: "print", text: "connecting buyers and caterers... done" },
  { kind: "type", text: "cat ./caterdash/status.log" },
  { kind: "progress", label: "loading case study" },
  {
    kind: "print",
    text: "status: COMING SOON - check back in the near future!",
    accent: true,
  },
  { kind: "pause" },
];

export default function CaterDashPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <div className="text-text-dim text-sm mb-5 ">
        ~/work $ cat caterdash.md
      </div>
      <h1 className="font-mono text-3xl font-semibold mb-2">CaterDash</h1>
      <div className="flex flex-wrap items-baseline gap-2.5 mb-8 text-[13px]">
        <span className="text-accent">
          Software Development Engineer Intern
        </span>
        <span className="text-text-dim">
          Vancouver, BC · Jan – Apr 2026
        </span>
      </div>
      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        Built the core catering marketplace end to end — 5k+ active users and
        $100k+ in sales since launch.
      </p>
      <ComingSoonTerminal title="caterdash — status" script={CATERDASH_SCRIPT} />
    </main>
  );
}

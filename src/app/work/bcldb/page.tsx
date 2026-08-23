import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const BCLDB_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "ssh intern@bcldb-portal.gov.bc.ca" },
  { kind: "print", text: "authenticating... done" },
  { kind: "type", text: "cat ./co-op/status.log" },
  { kind: "progress", label: "loading case study" },
  {
    kind: "print",
    text: "status: COMING SOON - check back in the near future!",
    accent: true,
  },
  { kind: "pause" },
];

export default function BcldbPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <div className="text-text-dim text-sm mb-5 ">
        ~/work/bcldb $ cat README.md
      </div>
      <h1 className="font-mono text-3xl font-semibold mb-2">
        BC Liquor Distribution Branch
      </h1>
      <div className="flex flex-wrap items-baseline gap-2.5 mb-8 text-[13px]">
        <span className="text-accent">Full Stack Developer Intern</span>
        <span className="text-text-dim">Burnaby, BC · Sep. 2026</span>
      </div>
      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        Coming soon! I'm excited to contribute to enterprise-scale public
        service systems. I’ll be collaborating with the engineering team to
        develop reliable full-stack applications and modernize internal tooling.
      </p>
      <ComingSoonTerminal title="bcldb-portal — status" script={BCLDB_SCRIPT} />
    </main>
  );
}

export default function BcldbPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <div className="text-text-dim text-sm mb-5 ">
        ~/work $ cat bcldb.md
      </div>
      <h1 className="font-mono text-3xl font-semibold mb-2">
        BC Liquor Distribution Branch
      </h1>
      <div className="flex flex-wrap items-baseline gap-2.5 mb-8 text-[13px]">
        <span className="text-accent">Full Stack Developer Intern</span>
        <span className="text-text-dim">Burnaby, BC · Sep. 2026</span>
      </div>
      <p className="text-[15px] leading-[1.6] text-text-body text-pretty">
        Incoming for an 8-month co-op term building full-stack web
        applications for BC Public Service IT infrastructure.
      </p>
    </main>
  );
}

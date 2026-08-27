import ComingSoonTerminal from "@/components/comingSoonTerminal";
import WorkHeader from "../_components/work-header";
import { getJob } from "@/content/work";

const job = getJob("bcldb");

export default function BcldbPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <WorkHeader job={job} />

      {job.summary && (
        <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
          {job.summary}
        </p>
      )}

      {job.comingSoon && (
        <ComingSoonTerminal
          title={job.comingSoon.title}
          script={job.comingSoon.script}
        />
      )}
    </main>
  );
}

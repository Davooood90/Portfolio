import type { Job } from "@/content/types";

export default function WorkHeader({ job }: { job: Job }) {
  return (
    <>
      <div className="mb-4 text-[13px] text-text-dim sm:mb-5 sm:text-sm">
        ~/work $ cat {job.slug}.md
      </div>

      <h1 className="font-mono text-2xl font-semibold mb-2 text-balance break-words sm:text-3xl">
        {job.company}
      </h1>

      <div className="flex flex-wrap items-baseline gap-2.5 mb-8 text-[13px]">
        <span className="text-accent">{job.role}</span>
        <span className="text-text-dim">
          {job.location} · {job.periodLong}
        </span>
      </div>
    </>
  );
}

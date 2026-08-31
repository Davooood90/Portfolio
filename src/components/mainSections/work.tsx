import Link from "next/link";
import { jobs } from "@/content/work";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="flex flex-col justify-center py-12 font-mono sm:px-8 sm:py-20"
    >
      <div className="text-text-dim text-[13px] mb-4 sm:text-sm sm:mb-5">
        ~/work $ ls -la
      </div>
      <h1 className="font-mono text-2xl font-semibold mb-6 sm:text-3xl sm:mb-10">
        Work Experience
      </h1>

      <div className="flex flex-col">
        {jobs.map((job) => {
          const body = (
            <>
              <div className="font-mono text-[13px] text-text-dim whitespace-nowrap">
                {job.period}
              </div>
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2.5">
                  <h3 className="text-base font-semibold text-balance sm:text-lg">
                    {job.role}
                  </h3>
                  <span className="font-mono text-[13px] text-accent">
                    {job.company}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-[1.6] text-text-body text-pretty">
                  {job.blurb}
                </p>
              </div>
              {job.route && (
                <span className="hidden justify-self-end font-mono text-[14px] text-text-faint sm:inline sm:justify-self-auto">
                  &gt;
                </span>
              )}
            </>
          );

          const className =
            "grid grid-cols-1 items-center gap-2 rounded-md border-t border-border py-6 sm:-mx-4 sm:grid-cols-[180px_1fr_auto] sm:gap-6 sm:px-4 sm:py-6.5" +
            (job.route ? " transition-colors hover:bg-surface" : "");

          if (!job.route) {
            return (
              <div key={`${job.company}-${job.period}`} className={className}>
                {body}
              </div>
            );
          }

          return (
            <Link
              key={`${job.company}-${job.period}`}
              href={job.route}
              className={className}
            >
              {body}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

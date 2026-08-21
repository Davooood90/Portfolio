import Link from "next/link";

type Job = {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  href?: string;
};

const jobs: Job[] = [
  {
    period: "Sep. 2026",
    title: "Full Stack Developer Intern",
    company: "BC Liquor Distribution Branch",
    location: "Burnaby, BC",
    summary:
      "Incoming for an 8-month co-op term building full-stack web applications for BC Public Service IT infrastructure.",
    href: "/work/bcldb",
  },
  {
    period: "Jan - Apr 2026",
    title: "Software Development Engineer Intern",
    company: "CaterDash",
    location: "Vancouver, BC",
    summary:
      "Built the core catering marketplace end to end — 5k+ active users and $100k+ in sales since launch.",
    href: "/work/caterdash",
  },
  {
    period: "Aug 2025 – Apr 2026",
    title: "Undergraduate Teaching Assistant",
    company: "University of British Columbia",
    location: "Vancouver, BC",
    summary:
      "Ran weekly digital logic labs for 50 students and supported exams for 400+.",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="flex flex-col justify-center px-8 py-20 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/work $ ls -la</div>
      <h1 className="font-mono text-3xl font-semibold mb-10">
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
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="font-mono text-[13px] text-accent">
                    {job.company}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-[1.6] text-text-body text-pretty">
                  {job.summary}
                </p>
              </div>
              {job.href && (
                <span className="justify-self-end font-mono text-[14px] text-text-faint sm:justify-self-auto">
                  &gt;
                </span>
              )}
            </>
          );

          const className =
            "-mx-4 grid grid-cols-1 items-center gap-2 rounded-md border-t border-border px-4 py-6.5 sm:grid-cols-[180px_1fr_auto] sm:gap-6" +
            (job.href ? " transition-colors hover:bg-surface" : "");

          if (!job.href) {
            return (
              <div key={`${job.company}-${job.period}`} className={className}>
                {body}
              </div>
            );
          }

          return (
            <Link
              key={`${job.company}-${job.period}`}
              href={job.href}
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

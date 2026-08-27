import type { Job } from "./types";

export const jobs: Job[] = [
  {
    slug: "bcldb",
    role: "Full Stack Developer Intern",
    company: "BC Liquor Distribution Branch",
    location: "Burnaby, BC",
    period: "Sep. 2026",
    periodLong: "Sep. 2026",
    blurb:
      "Incoming for an 8-month co-op term building full-stack web applications for BC Public Service IT infrastructure.",
    summary:
      "Coming soon! I'm excited to contribute to enterprise-scale public service systems. I’ll be collaborating with the engineering team to develop reliable full-stack applications and modernize internal tooling.",
    route: "/work/bcldb",
    comingSoon: {
      title: "bcldb-portal — status",
      script: [
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
      ],
    },
  },
  {
    slug: "caterdash",
    role: "Software Development Engineer Intern",
    company: "CaterDash",
    location: "Vancouver, BC",
    period: "Jan - Apr 2026",
    periodLong: "Jan – Apr 2026",
    blurb:
      "Built the core catering marketplace end to end — 5k+ active users and $100k+ in sales since launch.",
    summary:
      "Built the core catering marketplace end to end — 5k+ active users and $100k+ in sales since launch.",
    route: "/work/caterdash",
    comingSoon: {
      title: "caterdash — status",
      script: [
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
      ],
    },
  },
  {
    slug: null,
    role: "Undergraduate Teaching Assistant",
    company: "University of British Columbia",
    location: "Vancouver, BC",
    period: "Aug 2025 – Apr 2026",
    periodLong: "Aug 2025 – Apr 2026",
    blurb:
      "Ran weekly digital logic labs for 50 students and supported exams for 400+.",
    summary: null,
    route: null,
    comingSoon: null,
  },
];

export const jobsBySlug: Record<string, Job> = Object.fromEntries(
  jobs
    .filter((j): j is Job & { slug: string } => j.slug !== null)
    .map((j) => [j.slug, j]),
);

export function getJob(slug: string): Job {
  const job = jobsBySlug[slug];
  if (!job) throw new Error(`Unknown job slug: ${slug}`);
  return job;
}

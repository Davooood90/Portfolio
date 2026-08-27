import Link from "next/link";

type Project = {
  year: string;
  title: string;
  desc: string;
  tag: string;
  href?: string;
};

const projects: Project[] = [
  {
    year: "May 2026",
    title: "memri",
    desc: "Cozy, scrapbook-inspired mobile app for sharing multi-media memories as interactive digital polaroids.",
    tag: "Mobile App",
    href: "/projects/memri",
  },
  {
    year: "Mar. 2026",
    title: "VoiceAgent",
    desc: "Real-time AI voice assistant leveraging WebSockets for low-latency streaming audio.",
    tag: "Voice AI Agent",
    href: "/projects/voiceagent",
  },
  {
    year: "Jan. 2026",
    title: "rambl",
    desc: "Judgment-free AI companion for talking through your feelings by voice or text.",
    tag: "Mental Wellness AI",
    href: "/projects/rambl",
  },
  {
    year: "Nov. 2025",
    title: "Mello",
    desc: "Team energy tracker that turns 2-second daily check-ins into a real-time dashboard, helping managers catch burnout early.",
    tag: "Team Wellness SaaS",
    href: "/projects/mello",
  },
  {
    year: "Jul. 2025",
    title: "TeXume",
    desc: "Containerized LaTeX compilation engine that renders resumes to PDF with near-instant live preview.",
    tag: "LaTeX SaaS",
    href: "/projects/texume",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center px-8 py-20 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/projects $ ls</div>
      <h1 className="font-mono text-3xl font-semibold mb-10">Projects</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const body = (
            <>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-text-dim">
                  {project.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-strong underline underline-offset-4 transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-text-body text-pretty">
                {project.desc}
              </p>
              <span className="mt-auto w-fit rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-accent">
                {project.tag}
              </span>
            </>
          );

          const className =
            "group flex h-full flex-col gap-3 rounded-lg border border-border p-6" +
            (project.href
              ? " transition-colors hover:border-accent hover:bg-surface"
              : "");

          if (!project.href) {
            return (
              <div key={project.title} className={className}>
                {body}
              </div>
            );
          }

          return (
            <Link key={project.title} href={project.href} className={className}>
              {body}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

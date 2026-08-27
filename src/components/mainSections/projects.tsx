import Link from "next/link";
import { projects } from "@/content/projects";

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
                {project.blurb}
              </p>
              <span className="mt-auto w-fit rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-accent">
                {project.tag}
              </span>
            </>
          );

          const className =
            "group flex h-full flex-col gap-3 rounded-lg border border-border p-6" +
            (project.route
              ? " transition-colors hover:border-accent hover:bg-surface"
              : "");

          if (!project.route) {
            return (
              <div key={project.title} className={className}>
                {body}
              </div>
            );
          }

          return (
            <Link key={project.title} href={project.route} className={className}>
              {body}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

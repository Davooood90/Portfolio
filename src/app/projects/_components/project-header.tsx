import type { Project } from "@/content/types";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <>
      <div className="mb-4 text-[13px] text-text-dim sm:mb-5 sm:text-sm">
        ~/projects $ cat {project.slug}.md
      </div>

      <div className="mb-4 flex flex-wrap items-baseline gap-2.5">
        <h1 className="font-mono text-2xl font-semibold text-balance break-words sm:text-3xl">
          {project.title}
        </h1>
        <span className="text-[13px] text-text-dim">{project.yearLong}</span>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8">
        <span className="inline-block w-fit max-w-full rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-accent [overflow-wrap:anywhere]">
          {project.tag}
        </span>
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="inline-block w-fit max-w-full rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-dim"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

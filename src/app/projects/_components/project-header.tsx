type ProjectHeaderProps = {
  slug: string;
  title: string;
  year: string;
  tag: string;
  stack?: string[];
};

export default function ProjectHeader({
  slug,
  title,
  year,
  tag,
  stack,
}: ProjectHeaderProps) {
  return (
    <>
      <div className="mb-5 text-sm text-text-dim ">
        ~/projects $ cat {slug}.md
      </div>

      <div className="mb-4 flex flex-wrap items-baseline gap-2.5">
        <h1 className="font-mono text-3xl font-semibold">{title}</h1>
        <span className="text-[13px] text-text-dim">{year}</span>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="inline-block w-fit rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-accent">
          {tag}
        </span>
        {stack?.map((tech) => (
          <span
            key={tech}
            className="inline-block w-fit rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-dim"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

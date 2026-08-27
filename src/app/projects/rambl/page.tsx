import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal from "@/components/comingSoonTerminal";
import { getProject } from "@/content/projects";

const project = getProject("rambl");

export default function RamblPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader project={project} />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        {project.summary}
      </p>

      <ComingSoonTerminal
        title={project.comingSoon.title}
        script={project.comingSoon.script}
      />
    </main>
  );
}

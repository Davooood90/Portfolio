import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal from "@/components/comingSoonTerminal";
import { getProject } from "@/content/projects";

const project = getProject("voiceagent");

export default function VoiceAgentPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 font-mono sm:px-8 sm:py-20">
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

import ProjectHeader from "../_components/project-header";

export default function EchoPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="echo"
        title="Echo"
        year="2024"
        tag="Voice Control Agent"
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty">
        Real-time AI voice assistant with low-latency streaming audio.
      </p>

      <p className="mt-10 text-[13px] text-text-faint">
        Full write-up coming soon.
      </p>
    </main>
  );
}

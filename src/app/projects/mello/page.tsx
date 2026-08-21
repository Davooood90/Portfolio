import ProjectHeader from "../_components/project-header";

export default function MelloPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="mello"
        title="Mello"
        year="2025"
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

import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const VOICEAGENT_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "python main.py --mode=voice" },
  { kind: "print", text: "listening... done" },
  { kind: "type", text: "cat ./voiceagent/status.log" },
  { kind: "progress", label: "loading write-up" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function VoiceAgentPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="voiceagent"
        title="VoiceAgent"
        year="Mar. 2026"
        tag="Voice AI Agent"
        stack={[
          "React",
          "TypeScript",
          "Python",
          "FastAPI",
          "WebSockets",
          "OpenAI API",
        ]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        Real-time AI voice assistant leveraging WebSockets for low-latency
        streaming audio processing.
      </p>

      <ComingSoonTerminal
        title="voiceagent — status"
        script={VOICEAGENT_SCRIPT}
      />
    </main>
  );
}

import ProjectHeader from "../_components/project-header";
import ComingSoonTerminal, {
  type TerminalStep,
} from "@/components/comingSoonTerminal";

const MEMRI_SCRIPT: TerminalStep[] = [
  { kind: "type", text: "expo start --scrapbook" },
  { kind: "print", text: "bundling assets... done" },
  { kind: "type", text: "cat ./memri/status.log" },
  { kind: "progress", label: "stitching polaroids" },
  { kind: "print", text: "status: COMING SOON", accent: true },
  { kind: "pause" },
];

export default function MemriPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20 font-mono">
      <ProjectHeader
        slug="memri"
        title="memri"
        year="May 2026 – Present"
        tag="Mobile App"
        stack={["React Native", "Expo", "TypeScript", "Tailwind CSS", "Figma"]}
      />

      <p className="text-[15px] leading-[1.6] text-text-body text-pretty mb-8">
        A cozy, scrapbook-inspired mobile app for sharing multi-media
        memories as interactive digital polaroids.
      </p>

      <ComingSoonTerminal title="memri — status" script={MEMRI_SCRIPT} />
    </main>
  );
}

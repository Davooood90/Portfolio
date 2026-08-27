import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "memri",
    title: "memri",
    tag: "Mobile App",
    year: "May 2026",
    yearLong: "May 2026 – Present",
    blurb:
      "Cozy, scrapbook-inspired mobile app for sharing multi-media memories as interactive digital polaroids.",
    summary:
      "A cozy, scrapbook-inspired mobile app for sharing multi-media memories as interactive digital polaroids.",
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Figma"],
    route: "/projects/memri",
    comingSoon: {
      title: "memri — status",
      script: [
        { kind: "type", text: "expo start --scrapbook" },
        { kind: "print", text: "bundling assets... done" },
        { kind: "type", text: "cat ./memri/status.log" },
        { kind: "progress", label: "stitching polaroids" },
        { kind: "print", text: "status: COMING SOON", accent: true },
        { kind: "pause" },
      ],
    },
  },
  {
    slug: "voiceagent",
    title: "VoiceAgent",
    tag: "Voice AI Agent",
    year: "Mar. 2026",
    yearLong: "Mar. 2026",
    blurb:
      "Real-time AI voice assistant leveraging WebSockets for low-latency streaming audio.",
    summary:
      "Real-time AI voice assistant leveraging WebSockets for low-latency streaming audio processing.",
    stack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "WebSockets",
      "OpenAI API",
    ],
    route: "/projects/voiceagent",
    comingSoon: {
      title: "voiceagent — status",
      script: [
        { kind: "type", text: "python main.py --mode=voice" },
        { kind: "print", text: "listening... done" },
        { kind: "type", text: "cat ./voiceagent/status.log" },
        { kind: "progress", label: "loading write-up" },
        { kind: "print", text: "status: COMING SOON", accent: true },
        { kind: "pause" },
      ],
    },
  },
  {
    slug: "rambl",
    title: "rambl",
    tag: "Mental Wellness AI",
    year: "Jan. 2026",
    yearLong: "Jan. 2026",
    blurb:
      "Judgment-free AI companion for talking through your feelings by voice or text.",
    summary:
      "A judgment-free AI companion for talking through your feelings by voice or text.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "LLM API",
    ],
    route: "/projects/rambl",
    comingSoon: {
      title: "rambl — status",
      script: [
        { kind: "type", text: "rambl start --voice" },
        { kind: "print", text: "companion online... listening" },
        { kind: "type", text: "cat ./rambl/status.log" },
        { kind: "progress", label: "loading write-up" },
        { kind: "print", text: "status: COMING SOON", accent: true },
        { kind: "pause" },
      ],
    },
  },
  {
    slug: "mello",
    title: "Mello",
    tag: "Team Wellness SaaS",
    year: "Nov. 2025",
    yearLong: "Nov. 2025",
    blurb:
      "Team energy tracker that turns 2-second daily check-ins into a real-time dashboard, helping managers catch burnout early.",
    summary:
      "A team energy tracker that turns 2-second daily check-ins into a real-time dashboard, helping managers catch burnout early.",
    stack: ["Vue", "TypeScript", "iOS", "Android", "Node.js", "Slack API"],
    route: "/projects/mello",
    comingSoon: {
      title: "mello — status",
      script: [
        { kind: "type", text: "mello checkin --energy=85%" },
        { kind: "print", text: "syncing team dashboard... done" },
        { kind: "type", text: "cat ./mello/status.log" },
        { kind: "progress", label: "charting team energy" },
        { kind: "print", text: "status: COMING SOON", accent: true },
        { kind: "pause" },
      ],
    },
  },
  {
    slug: "texume",
    title: "TeXume",
    tag: "LaTeX SaaS",
    year: "Jul. 2025",
    yearLong: "Jul. 2025 – Jan. 2026",
    blurb:
      "Containerized LaTeX compilation engine that renders resumes to PDF with near-instant live preview.",
    summary:
      "A containerized LaTeX compilation engine that generates PDFs from dynamic user data.",
    stack: ["Next.js", "TypeScript", "Supabase", "Docker", "LaTeX"],
    route: "/projects/texume",
    comingSoon: {
      title: "texume — status",
      script: [
        { kind: "type", text: "docker run texume-engine" },
        { kind: "print", text: "compiling .tex... done" },
        { kind: "type", text: "cat ./texume/status.log" },
        { kind: "progress", label: "rendering pdf preview" },
        { kind: "print", text: "status: COMING SOON", accent: true },
        { kind: "pause" },
      ],
    },
  },
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
);

export function getProject(slug: string): Project {
  const project = projectsBySlug[slug];
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}

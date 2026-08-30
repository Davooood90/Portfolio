import { projects } from "@/content/projects";
import { jobs } from "@/content/work";
import { education, hobbies, links, profile } from "@/content/profile";
import type { Job, Project } from "@/content/types";
import type {
  CommandContext,
  FsDir,
  FsFile,
  FsNode,
  RunResult,
  TermLine,
} from "./types";

const RULE = "-".repeat(32);

function wrap(text: string, width = 56): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (line && line.length + word.length + 1 > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function file(
  name: string,
  route: string | undefined,
  render: () => TermLine[],
  external = false,
  exec?: FsFile["exec"],
): FsFile {
  return { type: "file", name, route, external, render, exec };
}

function dir(name: string, route: string | undefined, children: FsNode[]): FsDir {
  return { type: "dir", name, route, children };
}

function projectFile(project: Project): FsFile {
  return file(`${project.slug}.md`, project.route, () => {
    const lines: TermLine[] = [
      { text: `${project.title} · ${project.tag}`, tone: "heading" },
      { text: project.yearLong, tone: "muted" },
      { text: RULE, tone: "faint" },
    ];
    for (const l of wrap(project.summary)) lines.push({ text: l });
    lines.push({ text: "" });
    lines.push({ text: `stack: ${project.stack.join(", ")}`, tone: "muted" });
    lines.push({ text: "status: COMING SOON", tone: "accent" });
    lines.push({ text: "" });
    lines.push({ text: `→ open ${project.slug}`, tone: "faint" });
    return lines;
  });
}

function jobFile(job: Job): FsFile {
  const name = `${job.slug ?? "ubc-ta"}.md`;
  return file(name, job.route ?? "/#work", () => {
    const lines: TermLine[] = [
      { text: `${job.role} · ${job.company}`, tone: "heading" },
      { text: `${job.location} · ${job.periodLong}`, tone: "muted" },
      { text: RULE, tone: "faint" },
    ];
    for (const l of wrap(job.summary ?? job.blurb)) lines.push({ text: l });
    if (job.comingSoon) {
      lines.push({ text: "" });
      lines.push({ text: "status: COMING SOON", tone: "accent" });
    }
    return lines;
  });
}

function hobbyFile(hobby: string): FsFile {
  return file(`${hobby.toLowerCase()}.jpg`, "/about#hobbies", () => [
    { text: `${hobby} · one of the things David does away from a keyboard.` },
  ]);
}

function renderReadme(): TermLine[] {
  return [
    { text: profile.name, tone: "heading" },
    { text: profile.headline, tone: "muted" },
    { text: RULE, tone: "faint" },
    { text: "You're in a small virtual filesystem of this site." },
    { text: "" },
    { text: "  ls          list what's here" },
    { text: "  cd <dir>    move around  (cd ~ goes home)" },
    { text: "  cat <file>  read a file" },
    { text: "  open <path> jump to the real page" },
    { text: "  help        every command" },
    { text: "" },
    { text: "Files marked * are executable — run them with ./name.", tone: "faint" },
    { text: "Try: ls, then ./theme dark", tone: "faint" },
  ];
}

function renderMe(): TermLine[] {
  return wrap(profile.bio).map((text) => ({ text }));
}

function renderEducation(): TermLine[] {
  const lines: TermLine[] = [];
  education.forEach((edu, i) => {
    if (i > 0) lines.push({ text: "" });
    lines.push({ text: edu.school, tone: "heading" });
    lines.push({ text: edu.degree });
    lines.push({ text: edu.period, tone: "muted" });
    lines.push({ text: "" });
    for (const l of wrap(edu.coursework)) lines.push({ text: l, tone: "muted" });
  });
  return lines;
}

function renderContact(): TermLine[] {
  const lines: TermLine[] = [
    { text: "Get in touch", tone: "heading" },
    { text: RULE, tone: "faint" },
  ];
  for (const link of links) {
    lines.push({ text: `${link.action.padEnd(6)} ${link.value}`, tone: "accent" });
  }
  lines.push({ text: "" });
  lines.push({ text: "→ open contact  (jumps to the contact section)", tone: "faint" });
  return lines;
}

function renderResume(): TermLine[] {
  return [
    { text: "resume.pdf" },
    { text: "A PDF resume. Run `open resume.pdf` to view it in a new tab.", tone: "muted" },
  ];
}

function renderThemeScript(): TermLine[] {
  return [
    { text: "#!/usr/bin/env sh", tone: "faint" },
    { text: "# switch the site's color theme", tone: "faint" },
    { text: "# usage: ./theme <dark|light|system>", tone: "faint" },
  ];
}

function themeExec(args: string[], ctx: CommandContext): RunResult {
  const next = args[0];
  if (!next) {
    return { lines: [{ text: `theme: ${ctx.theme ?? "system"}`, tone: "muted" }] };
  }
  if (next !== "dark" && next !== "light" && next !== "system") {
    return {
      lines: [
        {
          text: `./theme: unknown theme '${next}' (try: dark, light, system)`,
          tone: "error",
        },
      ],
    };
  }
  return { lines: [{ text: `theme -> ${next}`, tone: "muted" }], setTheme: next };
}

export const fsRoot: FsDir = dir("~", "/", [
  file("README.md", "/", renderReadme),
  file("resume.pdf", profile.resumePath, renderResume, true),
  file("contact.md", "/#contact", renderContact),
  file("theme", undefined, renderThemeScript, false, themeExec),
  dir("about", "/about", [
    file("me.md", "/about#overview", renderMe),
    file("education.txt", "/about#education", renderEducation),
    dir("hobbies", "/about#hobbies", hobbies.map(hobbyFile)),
  ]),
  dir("work", "/#work", jobs.map(jobFile)),
  dir("projects", "/#projects", projects.map(projectFile)),
]);

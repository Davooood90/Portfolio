import { displayCwd, getNode, resolvePath } from "./path";
import type {
  CommandContext,
  FsDir,
  FsNode,
  RunResult,
  TermLine,
} from "./types";

export interface CommandMeta {
  name: string;
  usage: string;
  summary: string;
}

export const COMMANDS: readonly CommandMeta[] = [
  { name: "help", usage: "help", summary: "list every command" },
  { name: "ls", usage: "ls [path]", summary: "list a directory" },
  { name: "cd", usage: "cd [path]", summary: "change directory (cd ~ goes home)" },
  { name: "pwd", usage: "pwd", summary: "print the current path" },
  { name: "cat", usage: "cat <file>", summary: "print a file" },
  { name: "open", usage: "open <path>", summary: "open the matching page" },
  { name: "clear", usage: "clear", summary: "clear the screen" },
  { name: "echo", usage: "echo [text]", summary: "print text back" },
  { name: "exit", usage: "exit", summary: "close the terminal" },
];

type Handler = (args: string[], ctx: CommandContext) => RunResult;

const output = (lines: TermLine[]): RunResult => ({ lines });
const fail = (text: string): RunResult => ({
  lines: [{ text, tone: "error" }],
});

function help(): RunResult {
  const width = Math.max(...COMMANDS.map((c) => c.usage.length));
  const lines: TermLine[] = [{ text: "commands", tone: "heading" }];
  for (const c of COMMANDS) {
    lines.push({ text: `  ${c.usage.padEnd(width + 3)}${c.summary}` });
  }
  lines.push({ text: "" });
  lines.push({
    text: "tab completes names and paths · ↑/↓ recall history",
    tone: "faint",
  });
  return output(lines);
}

function ls(args: string[], ctx: CommandContext): RunResult {
  const target = args[0];
  const node = getNode(ctx.root, resolvePath(ctx.cwd, target));
  if (!node) return fail(`ls: ${target ?? "."}: No such file or directory`);
  if (node.type === "file") return output([{ text: node.name }]);
  return output(
    node.children.map((child) => {
      if (child.type === "dir") {
        return { text: `${child.name}/`, tone: "accent" };
      }
      if (child.exec) return { text: `${child.name}*`, tone: "accent" };
      return { text: child.name };
    }),
  );
}

function cd(args: string[], ctx: CommandContext): RunResult {
  const target = args[0];
  const abs = target ? resolvePath(ctx.cwd, target) : "/";
  const node = getNode(ctx.root, abs);
  if (!node) return fail(`cd: ${target}: No such file or directory`);
  if (node.type !== "dir") return fail(`cd: ${target}: Not a directory`);
  return { lines: [], cwd: abs };
}

function pwd(_args: string[], ctx: CommandContext): RunResult {
  return output([{ text: displayCwd(ctx.cwd) }]);
}

function cat(args: string[], ctx: CommandContext): RunResult {
  const target = args[0];
  if (!target) return fail("usage: cat <file>");
  const node =
    getNode(ctx.root, resolvePath(ctx.cwd, target)) ??
    findByName(ctx.root, target);
  if (!node) return fail(`cat: ${target}: No such file or directory`);
  if (node.type === "dir") return fail(`cat: ${target}: Is a directory`);
  return output(node.render());
}

function findByName(root: FsDir, term: string): FsNode | null {
  const names = new Set([term, `${term}.md`, `${term}.txt`, `${term}.jpg`]);
  let found: FsNode | null = null;
  const visit = (node: FsDir): void => {
    for (const child of node.children) {
      if (!found && names.has(child.name)) found = child;
      if (child.type === "dir") visit(child);
    }
  };
  visit(root);
  return found;
}

function open(args: string[], ctx: CommandContext): RunResult {
  const target = args[0];
  if (!target) return fail("usage: open <path>");
  const node =
    getNode(ctx.root, resolvePath(ctx.cwd, target)) ??
    findByName(ctx.root, target);
  if (!node) return fail(`open: ${target}: No such file or directory`);
  if (!node.route) return fail(`open: ${target}: nothing to open here`);
  const external = Boolean(node.external);
  return {
    lines: [{ text: `opening ${node.name} ...`, tone: "muted" }],
    navigate: { href: node.route, external },
    close: !external,
  };
}

function clear(): RunResult {
  return { lines: [], clearScreen: true };
}

function echo(args: string[]): RunResult {
  return output([{ text: args.join(" ") }]);
}

function exit(): RunResult {
  return { lines: [], close: true };
}

const HANDLERS: Record<string, Handler> = {
  help,
  ls,
  cd,
  pwd,
  cat,
  open,
  clear,
  echo,
  exit,
  close: exit,
};

export function run(input: string, ctx: CommandContext): RunResult {
  const trimmed = input.trim();
  if (!trimmed) return { lines: [] };
  const [name, ...args] = trimmed.split(/\s+/);

  // path-like first token → run an executable file (e.g. ./theme dark)
  if (name.includes("/")) {
    const node = getNode(ctx.root, resolvePath(ctx.cwd, name));
    if (!node) return fail(`${name}: No such file or directory`);
    if (node.type === "dir") return fail(`${name}: Is a directory`);
    if (!node.exec) return fail(`${name}: Permission denied`);
    return node.exec(args, ctx);
  }

  const handler = HANDLERS[name];
  if (!handler) {
    return fail(`command not found: ${name}. Type 'help'.`);
  }
  return handler(args, ctx);
}

export type LineTone =
  | "default"
  | "muted"
  | "faint"
  | "accent"
  | "heading"
  | "error"
  | "prompt";

export interface TermLine {
  text: string;
  tone?: LineTone;
}

interface FsBase {
  name: string;
  /** target for `open` — an internal path, a "/#anchor", or an external URL */
  route?: string;
  /** open in a new tab and leave the terminal open */
  external?: boolean;
}

export interface FsFile extends FsBase {
  type: "file";
  /** plain-text `cat` output, already styled */
  render: () => TermLine[];
  /** when present the file is executable: `./name [args]` runs this */
  exec?: (args: string[], ctx: CommandContext) => RunResult;
}

export interface FsDir extends FsBase {
  type: "dir";
  children: FsNode[];
}

export type FsNode = FsFile | FsDir;

export interface CommandContext {
  readonly cwd: string;
  readonly root: FsDir;
  readonly theme: string | undefined;
}

export interface RunResult {
  lines: TermLine[];
  clearScreen?: boolean;
  cwd?: string;
  setTheme?: "light" | "dark" | "system";
  navigate?: { href: string; external: boolean };
  close?: boolean;
}

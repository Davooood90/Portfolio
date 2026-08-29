import type { FsDir, FsNode } from "./types";

function segments(p: string): string[] {
  return p.split("/").filter(Boolean);
}

/**
 * Resolve `input` against absolute `cwd` (where "/" == "~") into a
 * normalized absolute path: "/", "/projects", "/about/hobbies", ...
 */
export function resolvePath(cwd: string, input: string | undefined): string {
  const raw = (input ?? "").trim();
  if (raw === "~" || raw === "~/" || raw === "/") return "/";

  // no argument resolves to the current directory
  let parts: string[];
  if (raw.startsWith("~/")) parts = segments(raw.slice(2));
  else if (raw.startsWith("/")) parts = segments(raw.slice(1));
  else parts = [...segments(cwd), ...segments(raw)];

  const out: string[] = [];
  for (const seg of parts) {
    if (seg === "." || seg === "") continue;
    if (seg === "..") out.pop();
    else out.push(seg);
  }
  return "/" + out.join("/");
}

/** Look up a node by absolute path. Returns null if the path does not exist. */
export function getNode(root: FsDir, absPath: string): FsNode | null {
  if (absPath === "/") return root;
  let node: FsNode = root;
  for (const seg of segments(absPath)) {
    if (node.type !== "dir") return null;
    const next: FsNode | undefined = node.children.find((c) => c.name === seg);
    if (!next) return null;
    node = next;
  }
  return node;
}

/** "/" -> "~", "/projects" -> "~/projects" */
export function displayCwd(absPath: string): string {
  return absPath === "/" ? "~" : "~" + absPath;
}

export function parentPath(absPath: string): string {
  const parts = segments(absPath);
  parts.pop();
  return "/" + parts.join("/");
}

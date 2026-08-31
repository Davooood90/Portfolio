import { COMMANDS } from "./commands";
import { getNode, resolvePath } from "./path";
import type { FsDir } from "./types";

export interface CompleteResult {
  /** the full input line after applying the completion */
  value: string;
  /** shown to the user when the completion is ambiguous */
  suggestions: string[];
}

const COMMAND_NAMES = COMMANDS.map((c) => c.name);
const THEME_ARGS = ["dark", "light", "system"];

function commonPrefix(values: string[]): string {
  if (values.length === 0) return "";
  let prefix = values[0];
  for (const value of values.slice(1)) {
    while (prefix && !value.startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  return prefix;
}

function apply(
  before: string,
  token: string,
  matches: string[],
  dirPart: string,
): CompleteResult {
  if (matches.length === 0) {
    return { value: before + token, suggestions: [] };
  }
  if (matches.length === 1) {
    const done = matches[0];
    const suffix = done.endsWith("/") ? "" : " ";
    return { value: `${before}${dirPart}${done}${suffix}`, suggestions: [] };
  }
  return {
    value: `${before}${dirPart}${commonPrefix(matches)}`,
    suggestions: matches,
  };
}

export function complete(
  input: string,
  ctx: { cwd: string; root: FsDir },
): CompleteResult {
  const token = input.match(/(\S*)$/)?.[1] ?? "";
  const before = input.slice(0, input.length - token.length);

  // first token: complete command names, unless it looks like a path (./x)
  if (before.trim() === "" && !token.includes("/")) {
    return apply(
      before,
      token,
      COMMAND_NAMES.filter((name) => name.startsWith(token)),
      "",
    );
  }

  const command = input.trim().split(/\s+/)[0];
  const commandBase = command.split("/").pop() ?? command;

  // argument completion for the theme executable (./theme <dark|light|system>)
  if (before.trim() !== "" && command.includes("/") && commandBase === "theme") {
    return apply(
      before,
      token,
      THEME_ARGS.filter((arg) => arg.startsWith(token)),
      "",
    );
  }

  const slash = token.lastIndexOf("/");
  const dirPart = slash >= 0 ? token.slice(0, slash + 1) : "";
  const partial = slash >= 0 ? token.slice(slash + 1) : token;
  const dirNode = getNode(ctx.root, resolvePath(ctx.cwd, dirPart || "."));
  if (!dirNode || dirNode.type !== "dir") {
    return { value: input, suggestions: [] };
  }

  const matches = dirNode.children
    .filter((child) => child.name.startsWith(partial))
    .map((child) => (child.type === "dir" ? `${child.name}/` : child.name));

  return apply(before, token, matches, dirPart);
}

const KEY = "portfolio:terminal:history";
const CAP = 100;

export function loadHistory(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((entry): entry is string => typeof entry === "string")
      .slice(-CAP);
  } catch {
    return [];
  }
}

export function pushHistory(list: string[], entry: string): string[] {
  const trimmed = entry.trim();
  if (!trimmed) return list;
  if (list[list.length - 1] === trimmed) return list;
  return [...list, trimmed].slice(-CAP);
}

export function saveHistory(list: string[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // storage full or unavailable — history is a convenience, ignore
  }
}

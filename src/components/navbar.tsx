"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useTerminal } from "@/components/terminal/terminal-provider";

const pageSections: Record<string, { id: string; label: string }[]> = {
  "/": [
    { id: "about", label: "about/" },
    { id: "work", label: "work/" },
    { id: "projects", label: "projects/" },
    { id: "contact", label: "contact/" },
  ],
  "/about": [
    { id: "overview", label: "me.md" },
    { id: "education", label: "education.txt" },
    { id: "hobbies", label: "hobbies/" },
  ],
  "/work": [],
  "/projects": [],
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isOpen: terminalOpen, toggle: toggleTerminal } = useTerminal();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const isHome = pathname === "/";
  const isDark = mounted ? theme === "dark" : true;
  const sections = pageSections[pathname] ?? [];
  const segments = pathname.split("/").filter(Boolean);
  const homeSectionIds = new Set(pageSections["/"].map((s) => s.id));
  const upHref =
    segments.length > 1 && homeSectionIds.has(segments[0])
      ? `/#${segments[0]}`
      : "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-nav backdrop-blur">
      <nav className="flex flex-wrap items-center gap-7 px-8 py-4 font-mono">
        <Link href="/" className="text-sm whitespace-nowrap">
          <span className="text-accent">david@portfolio</span>
          <span className="text-text-dim">
            :~{pathname === "/" ? "" : pathname}$
          </span>{" "}
          <span className="text-text">ls</span>
        </Link>

        <div className="flex flex-wrap gap-[22px] text-[13.5px] text-text-muted">
          {!isHome && (
            <Link
              href={upHref}
              className="transition-colors hover:text-text-strong"
            >
              ../
            </Link>
          )}
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition-colors hover:text-text-strong"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            aria-pressed={isDark}
            aria-label="Toggle dark mode"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center rounded border border-border-strong p-2.5 text-text-muted transition-colors hover:border-border hover:text-text-strong"
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={toggleTerminal}
            aria-haspopup="dialog"
            aria-expanded={terminalOpen}
            className="whitespace-nowrap rounded border border-accent px-4 py-2 text-[13px] text-accent transition-colors hover:bg-accent hover:text-background"
          >
            terminal.exe
          </button>
        </div>
      </nav>
    </header>
  );
}

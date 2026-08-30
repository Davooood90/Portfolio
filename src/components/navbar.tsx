"use client";

import { useEffect, useRef, useState } from "react";
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

const THEME_BTN_DESKTOP =
  "flex items-center justify-center rounded border border-border-strong p-2.5 text-text-muted transition-colors hover:border-border hover:text-text-strong";
const THEME_BTN_MOBILE =
  "flex h-11 w-11 items-center justify-center rounded border border-border-strong text-text-muted transition-colors hover:border-border hover:text-text-strong";

function ThemeToggle({
  isDark,
  onToggle,
  className,
}: {
  isDark: boolean;
  onToggle: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className={className}
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
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isOpen: terminalOpen, toggle: toggleTerminal } = useTerminal();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
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

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-nav backdrop-blur">
      <nav className="px-4 py-3 font-mono sm:px-8 sm:py-4">
        {/* Desktop — unchanged inline layout */}
        <div className="hidden flex-wrap items-center gap-7 sm:flex">
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
            <ThemeToggle
              isDark={isDark}
              onToggle={toggleTheme}
              className={THEME_BTN_DESKTOP}
            />
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
        </div>

        {/* Mobile */}
        <div className="flex items-center sm:hidden">
          <Link
            href="/"
            aria-label="Home"
            className="whitespace-nowrap text-[13px]"
          >
            <span className="text-accent">david@portfolio</span>
            <span className="text-text-dim"> $</span>
          </Link>

          <div className="ml-auto flex items-center gap-0.5">
            <ThemeToggle
              isDark={isDark}
              onToggle={toggleTheme}
              className={THEME_BTN_MOBILE}
            />
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                toggleTerminal();
              }}
              aria-haspopup="dialog"
              aria-expanded={terminalOpen}
              aria-label="Open terminal"
              className="flex h-11 w-11 items-center justify-center rounded border border-accent text-accent transition-colors hover:bg-accent hover:text-background"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </button>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded border border-border-strong text-text-muted transition-colors hover:border-border hover:text-text-strong"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 sm:hidden"
            aria-hidden="true"
            onClick={closeMenu}
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 border-b border-border-strong bg-nav px-2 pb-2 pt-1 backdrop-blur sm:hidden"
          >
            <ul className="flex flex-col font-mono text-[15px] text-text-muted">
              {!isHome && (
                <li>
                  <Link
                    href={upHref}
                    onClick={closeMenu}
                    className="block rounded px-3 py-3 transition-colors hover:bg-surface hover:text-text-strong"
                  >
                    ../
                  </Link>
                </li>
              )}
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={closeMenu}
                    className="block rounded px-3 py-3 transition-colors hover:bg-surface hover:text-text-strong"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

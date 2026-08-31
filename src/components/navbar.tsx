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

const THEME_BTN =
  "flex shrink-0 items-center justify-center rounded border border-border-strong p-2.5 text-text-muted transition-colors hover:border-border hover:text-text-strong";

const TERMINAL_BTN =
  "shrink-0 whitespace-nowrap rounded border border-accent px-4 py-2 text-[13px] text-accent transition-colors hover:bg-accent hover:text-background";

const NAV_LINK =
  "shrink-0 text-[13px] text-text-muted transition-colors hover:text-text-strong sm:text-[13.5px]";

// Executables (theme.sh, terminal.exe) — green, the way `ls --color` flags them.
const NAV_EXEC =
  "shrink-0 text-[13px] text-accent transition-colors hover:brightness-110 sm:text-[13.5px]";

// Fade whichever end of a horizontal scroll strip still has hidden content.
// `active` gates the listeners (the mobile dropdown row only exists while open);
// `resetKey` forces a re-measure when the link set changes without a resize.
function useEdgeFade(active: boolean, resetKey: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) {
      setEdges((p) => (p.start || p.end ? { start: false, end: false } : p));
      return;
    }
    const update = () => {
      const start = el.scrollLeft > 2;
      const end =
        Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth - 2;
      setEdges((p) =>
        p.start === start && p.end === end ? p : { start, end },
      );
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [active, resetKey]);

  const mask =
    edges.start || edges.end
      ? `linear-gradient(to right, transparent, #000 ${
          edges.start ? "1.75rem" : "0px"
        }, #000 calc(100% - ${edges.end ? "1.75rem" : "0px"}), transparent)`
      : undefined;

  return {
    ref,
    style: mask ? { maskImage: mask, WebkitMaskImage: mask } : undefined,
  };
}

function NavLinks({
  isHome,
  upHref,
  sections,
  onNavigate,
}: {
  isHome: boolean;
  upHref: string;
  sections: { id: string; label: string }[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {!isHome && (
        <Link href={upHref} onClick={onNavigate} className={NAV_LINK}>
          ../
        </Link>
      )}
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} onClick={onNavigate} className={NAV_LINK}>
          {label}
        </a>
      ))}
    </>
  );
}

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
  const [showHint, setShowHint] = useState(false);
  const enterRef = useRef<HTMLButtonElement>(null);
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

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const closeMenu = () => setMenuOpen(false);

  const deskFade = useEdgeFade(true, pathname);
  const menuFade = useEdgeFade(menuOpen, pathname);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onScroll = () => setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  // On every mobile page load, briefly nudge the reader toward the menu button.
  useEffect(() => {
    if (!window.matchMedia("(max-width: 639px)").matches) return;
    const t = setTimeout(() => setShowHint(true), 900);
    return () => clearTimeout(t);
  }, []);

  // Auto-dismiss the hint after a while.
  useEffect(() => {
    if (!showHint) return;
    const t = setTimeout(() => setShowHint(false), 10000);
    return () => clearTimeout(t);
  }, [showHint]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-nav backdrop-blur">
      <nav className="relative z-50 flex items-center gap-6 px-4 py-3 font-mono sm:px-8 sm:py-4">
        {/* Prompt — always visible. Blinking cursor is mobile-only + closed-only. */}
        <Link
          href="/"
          aria-label="Home"
          className="shrink-0 text-[13px] sm:text-sm"
        >
          <span className="text-accent">david@portfolio</span>
          <span className="text-text-dim">
            :~{isHome ? "" : pathname}$
          </span>{" "}
          <span className="text-text">
            ls
            {!menuOpen && <span className="animate-blink sm:hidden">_</span>}
          </span>
        </Link>

        {/* Desktop — links + controls in one horizontal scroll strip. */}
        <div
          ref={deskFade.ref}
          style={deskFade.style}
          className="no-scrollbar hidden min-w-0 flex-1 items-center gap-6 overflow-x-auto whitespace-nowrap sm:-mr-8 sm:flex sm:pr-8"
        >
          <NavLinks isHome={isHome} upHref={upHref} sections={sections} />

          <div className="ml-auto flex shrink-0 items-center gap-3">
            <ThemeToggle
              isDark={isDark}
              onToggle={toggleTheme}
              className={THEME_BTN}
            />
            <button
              type="button"
              onClick={toggleTerminal}
              aria-haspopup="dialog"
              aria-expanded={terminalOpen}
              className={TERMINAL_BTN}
            >
              terminal.exe
            </button>
          </div>
        </div>

        {/* Mobile — press ↵ to "run ls". Kept mounted while open (invisible)
            so the nav row height never changes. The first-load hint hangs
            below the button (absolute) so it never shifts the row. */}
        <div className="group relative -mr-2 ml-auto flex shrink-0 items-center sm:hidden">
          <button
            ref={enterRef}
            type="button"
            onClick={() => {
              setMenuOpen((v) => !v);
              setShowHint(false);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className={`flex h-10 w-10 items-center justify-center text-lg leading-none text-text-muted transition-colors duration-300 group-hover:text-text-strong ${
              menuOpen ? "invisible" : ""
            }`}
          >
            ↵
          </button>

          <button
            type="button"
            tabIndex={showHint && !menuOpen ? 0 : -1}
            aria-hidden={!(showHint && !menuOpen)}
            onClick={() => {
              setMenuOpen(true);
              setShowHint(false);
            }}
            className={`absolute right-0 top-8 z-50 mt-2.5 flex items-center whitespace-nowrap rounded border border-border-strong bg-surface px-2 py-1 text-[11px] leading-none text-text-muted shadow-sm transition-all duration-300 group-hover:border-border group-hover:text-text-strong ${
              showHint && !menuOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute -top-[5px] right-4 h-2 w-2 rotate-45 border-l border-t border-border-strong bg-surface transition-all duration-300 group-hover:border-border"
            />
            click me
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — the "ls" output. */}
      {menuOpen && (
        <>
          {/* Tap-catcher + scrim. Must be `absolute top-full h-dvh`, not
              `fixed inset-0`: the header's backdrop-blur is a containing block
              for fixed descendants and would trap it inside the header bar. */}
          <div
            className="absolute inset-x-0 top-full z-40 h-dvh bg-black/20 sm:hidden"
            aria-hidden="true"
            onClick={closeMenu}
          />
          <div
            id="mobile-nav-menu"
            className="absolute inset-x-0 top-full z-40 border-b border-border-strong bg-nav backdrop-blur sm:hidden"
          >
            <div
              ref={menuFade.ref}
              style={menuFade.style}
              className="no-scrollbar flex items-center gap-6 overflow-x-auto whitespace-nowrap px-4 py-3 font-mono"
            >
              <NavLinks
                isHome={isHome}
                upHref={upHref}
                sections={sections}
                onNavigate={closeMenu}
              />
              {/* Theme + terminal as plain "executables" in the same ls row. */}
              <button
                type="button"
                aria-pressed={isDark}
                onClick={toggleTheme}
                className={NAV_EXEC}
              >
                theme.sh
              </button>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  toggleTerminal();
                }}
                aria-haspopup="dialog"
                aria-expanded={terminalOpen}
                className={NAV_EXEC}
              >
                terminal.exe
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

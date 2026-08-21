"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
  { href: "#about", label: "about/" },
  { href: "#work", label: "work/" },
  { href: "#projects", label: "projects/" },
  { href: "#contact", label: "contact/" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-nav backdrop-blur">
      <nav className="flex flex-wrap items-center gap-7 px-8 py-4 font-mono">
        <Link href="/" className="text-sm whitespace-nowrap">
          <span className="text-accent">david@portfolio</span>
          <span className="text-text-dim">:~$</span>{" "}
          <span className="text-text">ls</span>
        </Link>

        <div className="flex flex-wrap gap-[22px] text-[13.5px] text-text-muted">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-text-strong"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="whitespace-nowrap rounded border border-border-strong px-3 py-2 text-[13px] text-text-muted"
          >
            {mounted ? theme : "theme"}
          </button>
          <button className="whitespace-nowrap rounded border border-accent px-4 py-2 text-[13px] text-accent">
            terminal
          </button>
        </div>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav backdrop-blur">
      <nav className="mx-auto flex items-center justify-between px-8 py-4 font-mono">
        <Link href="/" className="font-medium text-text-strong">
          David Liu
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? "text-text-strong"
                      : "text-text-muted transition-colors hover:text-text-strong"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

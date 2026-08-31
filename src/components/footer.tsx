import type { ReactElement } from "react";
import { links } from "@/content/profile";
import type { LinkId } from "@/content/types";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a13.38 13.38 0 0 0-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const ICON: Record<LinkId, () => ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
};

// Footer display order (the contact section renders links in their source order).
const FOOTER_ORDER: LinkId[] = ["github", "linkedin", "email"];

const socials = FOOTER_ORDER.map((id) => {
  const link = links.find((l) => l.id === id)!;
  return {
    label: link.label,
    href: link.href,
    external: link.external,
    Icon: ICON[id],
  };
});

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-6 font-mono sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-[12.5px] text-text-faint">
          David Liu. Built with care, {year}.
        </p>
        <div className="flex items-center gap-1 sm:gap-2">
          {socials.map(({ label, href, external, Icon }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center text-text-faint transition-colors hover:text-accent"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

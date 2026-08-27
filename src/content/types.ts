// Central content model for the site. Pure data + types only:
// no React, no next/*, no "use client" — this is imported by both
// server components (detail pages) and client components (hobbies, terminal).

import type { TerminalStep } from "@/components/comingSoonTerminal";

export type { TerminalStep };

export interface ComingSoon {
  /** window title, e.g. "memri — status" */
  title: string;
  script: TerminalStep[];
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  /** short label for the projects list card, e.g. "May 2026" */
  year: string;
  /** full label for the detail header, e.g. "May 2026 – Present" */
  yearLong: string;
  /** projects list card copy */
  blurb: string;
  /** detail page paragraph (sometimes differs from blurb) */
  summary: string;
  stack: string[];
  route: string;
  comingSoon: ComingSoon;
}

export interface Job {
  /** null = no detail page (e.g. the UBC TA role) */
  slug: string | null;
  role: string;
  company: string;
  location: string;
  /** short label for the work list, e.g. "Jan - Apr 2026" */
  period: string;
  /** full label for the detail header, e.g. "Jan – Apr 2026" */
  periodLong: string;
  /** work list copy */
  blurb: string;
  /** detail page paragraph; null when there is no detail page */
  summary: string | null;
  route: string | null;
  comingSoon: ComingSoon | null;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  coursework: string;
}

export type LinkId = "email" | "linkedin" | "github";

export interface SocialLink {
  id: LinkId;
  /** aria-label / footer label, e.g. "GitHub" */
  label: string;
  /** contact-section verb, e.g. "mail" | "open" */
  action: string;
  /** display value, e.g. "github.com/Davooood90" */
  value: string;
  href: string;
  external: boolean;
}

export interface Profile {
  name: string;
  headline: string;
  resumePath: string;
  aboutHeading: string;
  bio: string;
  photo: string;
  whoami: string;
  location: string;
}

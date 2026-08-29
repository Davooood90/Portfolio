import type { TerminalStep } from "@/components/comingSoonTerminal";

export type { TerminalStep };

export interface ComingSoon {
  title: string;
  script: TerminalStep[];
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  year: string;
  yearLong: string;
  blurb: string;
  summary: string;
  stack: string[];
  route: string;
  comingSoon: ComingSoon;
}

export interface Job {
  slug: string | null;
  role: string;
  company: string;
  location: string;
  period: string;
  periodLong: string;
  blurb: string;
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
  label: string;
  action: string;
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
  location: string;
}

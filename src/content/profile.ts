import type { Education, Profile, SocialLink } from "./types";

export const profile: Profile = {
  name: "David Liu",
  headline:
    "CS @ UBC | Full-stack developer, exploring AI, building memri & more.",
  resumePath: "/resume.pdf",
  aboutHeading: "About Me",
  bio: `I'm a Computer Science student at UBC who likes building things that people actually use. Most of my work sits at the seam between a clean interface and the messy systems behind it — streaming audio pipelines, containerized compilers, marketplace backends. I care about shipping. My favourite projects are the ones that went from "wouldn't it be cool if" to something with real users in a matter of weeks, and I'd rather learn a tool in production than read about it for a month first.`,
  photo: "https://www.devbydavidliu.com/person.png",
  location: "Vancouver, BC",
};

export const education: Education[] = [
  {
    school: "University of British Columbia",
    degree: "B.Sc. Computer Science, Co-op — Dean's Scholar, 4.33/4.33 GPA",
    period: "Expected May 2028",
    coursework:
      "Coursework I've gotten the most out of: Algorithm Design & Analysis, Software Engineering, Relational Databases, Computer Systems, Computer Networking.",
  },
];

export const hobbies: string[] = [
  "Badminton",
  "Piano",
  "Cooking",
  "Volleyball",
  "Hiking",
];

export const links: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    action: "mail",
    value: "david.liu906@gmail.com",
    href: "mailto:david.liu906@gmail.com",
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    action: "open",
    value: "linkedin.com/in/davidliu906",
    href: "https://linkedin.com/in/davidliu906",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    action: "open",
    value: "github.com/Davooood90",
    href: "https://github.com/Davooood90",
    external: true,
  },
];

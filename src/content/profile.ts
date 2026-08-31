import type { Education, Profile, SocialLink } from "./types";

export const profile: Profile = {
  name: "David Liu",
  headline:
    "CS @ UBC | Full-stack developer, exploring AI, building memri & more.",
  resumePath: "/resume.pdf",
  aboutHeading: "About Me",
  bio: [
    `Hi! I’m David 👋 I’m a third-year Computer Science student at UBC. I really like figuring out how things work and turning an idea into something real. If something grabs my attention, I’ll happily go down a rabbit hole at 6am to understand it.`,
    `Outside of code, I’m usually out hiking around Vancouver. Most of my other free time goes to TFT and hunting down good food. Thanks for stopping by :)`,
  ],
  photo: "/pfp.png",
  location: "Vancouver, BC",
};

export const education: Education[] = [
  {
    school: "University of British Columbia",
    degree:
      "B.Sc. Computer Science, Co-op, Specialization in Artificial Intelligence",
    period: "Expected May 2028",
    coursework:
      "Algorithm Design and Analysis, Software Engineering, Relational Databases, Software Construction, Computer Systems, Computer Networking, Matrix Algebra, Statistics, Data Science",
    awards: "Dean's Scholar (4.33/4.33 GPA), J Fred Muir Memorial Scholarship",
  },
];

export const hobbies: string[] = [
  "Piano",
  "Badminton",
  "Volleyball",
  "Cooking",
  "Baking",
  "Hiking",
  "Running",
  "Gaming",
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

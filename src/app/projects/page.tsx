"use client";

import TitlePage from "../../components/title";
import InfoCard from "../../components/infocard";
import { motion } from "framer-motion";

const projectItems = [
  {
    projectName: "Project Name",
    imagePath: "/images/student-navigator-platform.jpg",
    links: [
      { title: "GitHub", url: "https://github.com/username/student-navigator" },
      { title: "Live Demo", url: "https://student-navigator.app" },
      { title: "Documentation", url: "https://docs.student-navigator.app" },
    ],
    description:
      "Built a unified student platform using Next.js and TypeScript, integrating academic, housing, and financial data through web scraping and LLM APIs. Improved usability and accessibility across devices. Collaborated in a team of 4 using agile workflows.",
    duration: {
      start: "Jan 2024",
      end: "Apr 2024",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Puppeteer",
      "OpenAI API",
    ],
  },
  {
    projectName: "Project Name",
    imagePath: "/images/student-navigator-platform.jpg",
    links: [
      { title: "GitHub", url: "https://github.com/username/student-navigator" },
      { title: "Live Demo", url: "https://student-navigator.app" },
      { title: "Documentation", url: "https://docs.student-navigator.app" },
    ],
    description:
      "Built a unified student platform using Next.js and TypeScript, integrating academic, housing, and financial data through web scraping and LLM APIs. Improved usability and accessibility across devices. Collaborated in a team of 4 using agile workflows.",
    duration: {
      start: "Jan 2024",
      end: "Apr 2024",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Puppeteer",
      "OpenAI API",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <div className="custom-gradient">
        <TitlePage title="My Projects" />
      </div>
      <div className="py-16">
        {projectItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <InfoCard item={item} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

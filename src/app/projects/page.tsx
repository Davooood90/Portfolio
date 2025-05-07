"use client";

import TitlePage from "../../components/title";
import InfoCard from "../../components/infocard";
import { motion } from "framer-motion";

const projectItems = [
  {
    projectName: "UBC BOLT Bootcamp",
    imagePath: "/thumbnails/bootcamp.jpeg",
    links: [
      { title: "GitHub", url: "https://github.com/BOLT-UBC/Bootcamp" },
      { title: "Live Website", url: "https://boltubc.com" },
    ],
    description:
      "Collaborated on building a centralized web portal for the BOLT Bootcamp, featuring event details, registration, and case submissions. Developed a responsive React frontend and integrated a Supabase backend for real-time data handling.",
    duration: {
      start: "Feb 2025",
      end: "Feb 2025",
    },
    stack: ["React", "TypeScript", "CSS", "Supabase", "Figma"],
  },
  {
    projectName: "NestEd",
    imagePath: "/thumbnails/nested.jpg",
    links: [
      { title: "GitHub", url: "https://github.com/Davooood90/NWHacks" },
      {
        title: "Devpost",
        url: "https://devpost.com/software/nested-s8xtg1?_gl=1*g9d6wx*_gcl_au*NDg5MDM3MTM5LjE3NDY2NTcwNjQ.*_ga*ODI0Nzk5MDU4LjE3MzczMDEyNzk.*_ga_0YHJK3Y10M*czE3NDY2NTcwNjQkbzE0JGcxJHQxNzQ2NjU3MTI1JGowJGwwJGgw",
      },
    ],
    description:
      "Built a course scheduling platform that exports Workday timetables to calendar apps. Designed a sleek, intuitive interface with integrated timetable visualization for streamlined academic planning.",
    duration: {
      start: "Jan 2025",
      end: "Jan 2025",
    },
    stack: ["React", "JavaScript", "MongoDB", "Node.js", "Google OAuth 2.0"],
  },
  {
    projectName: "OSAthletics Website",
    imagePath: "/thumbnails/osathletics.jpeg",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Davooood90/OSAthletics-Website",
      },
    ],
    description:
      "Developed a dynamic website to manage school athletics content. Empowered administrators to update team info and announcements directly through an easy-to-use dashboard.",
    duration: {
      start: "May 2022",
      end: "June 2023",
    },
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL"],
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

"use client";

import TitlePage from "../../components/title";
import TimeCard from "../../components/timecard";
import { motion } from "framer-motion";

const timelineItems = [
  {
    startDate: "Oct 2024",
    endDate: "May 2025",
    position: "First Year Representative",
    company: "UBC GDSC",
    description:
      "Contributed to the Developer Student Clubs (GDSC) chapter at UBC by collaborating with the development team and supporting event organization and outreach initiatives. Created presentations for key student-focused events, including resume review workshops and LeetCode preparation sessions. Gained experience in technical communication, team collaboration, and supporting a large student tech community through accessible, educational content.",
    side: "left" as const,
  },
  {
    startDate: "September 2024",
    endDate: "May 2025",
    position: "Junior Developer",
    company: "BOLT UBC",
    description:
      "Contributed to the development of internal tools and event platforms at BOLT UBC as a Junior Developer. Led front-end development for the BOLT Bootcamp Portal, a centralized web app for registration, event schedules, and case submissions.Also developed the First Byte Webpage, a lightweight site providing resources, guidance, and tips to help participants succeed in BOLT UBC’s First Byte Datathon. Focused on clear information architecture and responsive design. Gained experience in collaborative development workflows, version control, and front-end best practices across both projects.",
    side: "right" as const,
  },
  {
    startDate: "Sept 2021",
    endDate: "May 2024",
    position: "Windows Server Specialist",
    company: "Cyber Patriots",
    description:
      "Worked as part of a competitive cybersecurity team focused on securing Windows Server environments during timed challenges that simulated real-world cyber attacks. Gained hands-on experience with Windows Server hardening, Active Directory, and threat response strategies in high-pressure, team-based environments. Contributed to consistent top-tier placements at the national level: National Champion (2024), National Finalist (2022, 2023, 2024), and State Champion (2023).",
    side: "left" as const,
  },
];

export default function Experiences() {
  return (
    <>
      <div className="custom-gradient">
        <TitlePage title="My Experiences" />
      </div>
      <div className="relative py-8">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <TimeCard item={item} />
          </motion.div>
        ))}

        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-3 bg-waterblue transform -translate-x-1/2"></div>
      </div>
    </>
  );
}

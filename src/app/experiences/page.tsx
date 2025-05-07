"use client";

import TitlePage from "../../components/title";
import TimeCard from "../../components/timecard";
import { motion } from "framer-motion";

const timelineItems = [
  {
    startDate: "Start Date",
    endDate: "End Date",
    position: "Position Title",
    company: "Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    side: "left" as const,
  },
  {
    startDate: "Start Date",
    endDate: "End Date",
    position: "Position Title",
    company: "Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    side: "right" as const,
  },
  {
    startDate: "Start Date",
    endDate: "End Date",
    position: "Position Title",
    company: "Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

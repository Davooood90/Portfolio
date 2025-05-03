import TitlePage from "../../components/title";
import TimeCard from "../../components/timecard";

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
      <TitlePage title="My Experiences" />{" "}
      <div className="relative py-8">
        {timelineItems.map((item, index) => (
          <TimeCard key={index} item={item} />
        ))}

        <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-waterblue transform -translate-x-1/2"></div>
      </div>
    </>
  );
}

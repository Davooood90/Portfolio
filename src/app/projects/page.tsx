import TitlePage from "../../components/title";
import InfoCard from "../../components/infocard";

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
  },
];

export default function Projects() {
  return (
    <>
      <TitlePage title="My Projects" />{" "}
      <div className="py-16">
        {projectItems.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}

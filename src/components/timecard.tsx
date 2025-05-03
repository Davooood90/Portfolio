interface TimelineItemProps {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
  side: "left" | "right";
}

interface TimelineProps {
  item: TimelineItemProps;
}

export default function TimeCard({ item }: TimelineProps) {
  const company = (
    <>
      <h3 className="font-bold text-6xl text-center">{item.company}</h3>
    </>
  );

  const content = (
    <div>
      <p className="text-lg">
        {item.startDate} - {item.endDate}
      </p>
      <p className="text-4xl">{item.position}</p>

      <p className="text-lg">{item.description}</p>
    </div>
  );

  return (
    <>
      <div className="flex relative my-8 mx-80 min-h-[300px]">
        <div
          className={`w-1/2 rounded-l-3xl p-6 flex flex-column items-center justify-center text-lightblue ${
            item.side === "left" ? "bg-midblue" : "bg-cardblue"
          }`}
        >
          {item.side === "left" ? company : content}
        </div>

        <div
          className={`w-1/2 rounded-r-3xl p-6 flex flex-column items-center justify-center text-lightblue ${
            item.side === "right" ? "bg-midblue" : "bg-cardblue"
          }`}
        >
          {item.side === "right" ? company : content}
        </div>

        <div className="absolute left-1/2 top-1/2 h-8 w-8 rounded-2xl bg-waterblue transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-waterblue transform -translate-x-1/2"></div>
    </>
  );
}

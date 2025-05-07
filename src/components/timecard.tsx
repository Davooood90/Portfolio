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
    <div className="md:mx-auto container">
      <div className="md:flex relative my-8 mx-3 md:mx-2 md:min-h-[300px]">
        {/* Mobile view */}
        <div className="flex flex-col w-full md:hidden">
          <div className="rounded-tr-3xl p-6 flex flex-col items-center justify-center text-lightblue bg-midblue">
            {company}
          </div>
          <div className="rounded-br-3xl p-6 flex flex-col items-center justify-center text-lightblue bg-cardblue">
            {content}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex w-full">
          <div
            className={`w-1/2 rounded-l-3xl p-6 flex flex-col items-center justify-center text-lightblue ${
              item.side === "left" ? "bg-midblue" : "bg-cardblue"
            }`}
          >
            {item.side === "left" ? company : content}
          </div>

          <div
            className={`w-1/2 rounded-r-3xl p-6 flex flex-col items-center justify-center text-lightblue ${
              item.side === "right" ? "bg-midblue" : "bg-cardblue"
            }`}
          >
            {item.side === "right" ? company : content}
          </div>
        </div>

        <div className="hidden md:block absolute left-1/2 top-1/2 h-8 w-8 rounded-full bg-waterblue transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}

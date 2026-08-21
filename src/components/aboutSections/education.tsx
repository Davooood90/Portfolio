type Education = {
  school: string;
  degree: string;
  period: string;
  coursework: string;
};

const education: Education[] = [
  {
    school: "University of British Columbia",
    degree: "B.Sc. Computer Science, Co-op — Dean's Scholar, 4.33/4.33 GPA",
    period: "Expected May 2028",
    coursework:
      "Coursework I've gotten the most out of: Algorithm Design & Analysis, Software Engineering, Relational Databases, Computer Systems, Computer Networking.",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="flex flex-col justify-center px-8 py-20 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">
        ~/about $ cat education.txt
      </div>
      <div className="flex flex-col gap-5">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-lg border border-border-strong bg-surface p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{edu.school}</h3>
              <span className="font-mono text-[13px] text-text-dim whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            <p className="mt-2 text-[15px] text-text-body">{edu.degree}</p>
            <p className="mt-4 text-sm leading-[1.7] text-text-muted text-pretty">
              {edu.coursework}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

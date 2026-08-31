import { education } from "@/content/profile";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="flex flex-col justify-center py-8 font-mono sm:px-8 sm:py-10"
    >
      <div className="text-text-dim text-[13px] mb-4 sm:text-sm sm:mb-5">
        ~/about $ cat education.txt
      </div>
      <div className="flex flex-col gap-5">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-lg border border-border-strong bg-surface p-5 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-balance sm:text-lg">
                {edu.school}
              </h3>
              <span className="font-mono text-[13px] text-text-dim whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            <p className="mt-2 text-[15px] text-text-body">{edu.degree}</p>
            <p className="mt-4 text-sm leading-[1.7] text-text-muted text-pretty">
              <b>Coursework: </b>
              {edu.coursework}
            </p>
            <p className="mt-4 text-sm leading-[1.7] text-text-muted text-pretty">
              <b>Awards and Scholarships: </b>
              {edu.awards}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

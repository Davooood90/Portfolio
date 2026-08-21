import EducationSection from "@/components/aboutSections/education";
import OverviewSection from "@/components/aboutSections/overview";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <OverviewSection />
      <EducationSection />
    </div>
  );
}

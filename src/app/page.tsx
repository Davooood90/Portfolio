import AboutSection from "@/components/sections/about";
import WorkSection from "@/components/sections/work";
import ProjectsSection from "@/components/sections/projects";
import EducationSection from "@/components/sections/education";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-8">
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}

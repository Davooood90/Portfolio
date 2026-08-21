import AboutSection from "@/components/mainSections/about";
import WorkSection from "@/components/mainSections/work";
import ProjectsSection from "@/components/mainSections/projects";
import ContactSection from "@/components/mainSections/contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-8">
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

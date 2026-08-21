import AboutSection from "@/components/sections/about";
import WorkSection from "@/components/sections/work";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";

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

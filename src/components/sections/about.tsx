import Link from "next/link";
import Typewriter from "@/components/typewriter";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center px-8 py-20 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/about $ whoami</div>
      <h1 className="font-semibold text-text text-[clamp(36px,6vw,64px)] leading-[1.1] tracking-[-0.01em]">
        David Liu
      </h1>
      <p className="text-accent text-[clamp(16px,2vw,20px)] mt-3.5">
        <Typewriter text="CS @ UBC | Full-stack developer, exploring AI, building memri & more." />
      </p>
      <div className="flex gap-4 mt-9 flex-wrap">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm py-3 px-5.5 bg-accent text-background rounded font-semibold"
        >
          ./resume.pdf
        </a>
        <Link
          href={"/about"}
          className="text-sm py-3 px-5.5 border border-border-strong rounded text-text-body"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

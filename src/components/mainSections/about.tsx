import Link from "next/link";
import Typewriter from "@/components/typewriter";
import { profile } from "@/content/profile";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center py-12 font-mono sm:px-8 sm:py-20"
    >
      <div className="text-text-dim text-[13px] mb-4 sm:text-sm sm:mb-5">
        ~/about $ whoami
      </div>
      <h1 className="font-semibold text-text text-3xl leading-[1.15] tracking-[-0.01em] text-balance sm:text-[clamp(40px,6vw,64px)] sm:leading-[1.1]">
        {profile.name}
      </h1>
      <p className="text-accent text-[clamp(16px,2vw,20px)] mt-3.5">
        <Typewriter text={profile.headline} />
      </p>
      <div className="flex flex-wrap gap-3 mt-7 sm:gap-4 sm:mt-9">
        <a
          href={profile.resumePath}
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

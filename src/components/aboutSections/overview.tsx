import Image from "next/image";
import { profile } from "@/content/profile";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="flex flex-col justify-center px-8 py-10 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/about $ cat me.md</div>
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-stretch md:justify-between mb-8 ">
        <div className="max-w-md ">
          <h1 className="font-mono text-5xl font-semibold mb-10">
            {profile.aboutHeading}
          </h1>

          <p className="text-[17px] leading-[1.6] text-text-body text-pretty">
            {profile.bio}
          </p>
        </div>

        <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-md border border-border-strong bg-surface md:h-auto md:w-[320px]">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

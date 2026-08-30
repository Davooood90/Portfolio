import Image from "next/image";
import { profile } from "@/content/profile";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="flex flex-col justify-center py-8 font-mono sm:px-8 sm:py-10"
    >
      <div className="text-text-dim text-[13px] mb-4 sm:text-sm sm:mb-5">
        ~/about $ cat me.md
      </div>
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-stretch md:justify-between mb-6 sm:mb-8">
        <div className="max-w-md ">
          <h1 className="font-mono text-3xl font-semibold mb-5 sm:text-5xl sm:mb-10">
            {profile.aboutHeading}
          </h1>

          <p className="text-[15px] leading-[1.6] text-text-body text-pretty sm:text-[17px]">
            {profile.bio}
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md border border-border-strong bg-surface md:aspect-auto md:h-auto md:w-[320px]">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

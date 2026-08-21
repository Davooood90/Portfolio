import Image from "next/image";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="flex flex-col justify-center px-8 py-20 font-mono"
    >
      <div className="text-text-dim text-sm mb-5 ">~/about $ cat me.md</div>
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-stretch md:justify-between mb-8 ">
        <div className="max-w-md ">
          <h1 className="font-mono text-5xl font-semibold mb-10">About Me</h1>

          <p className="text-[17px] leading-[1.6] text-text-body text-pretty">
            I'm a Computer Science student at UBC who likes building things that
            people actually use. Most of my work sits at the seam between a
            clean interface and the messy systems behind it — streaming audio
            pipelines, containerized compilers, marketplace backends. I care
            about shipping. My favourite projects are the ones that went from
            "wouldn't it be cool if" to something with real users in a matter of
            weeks, and I'd rather learn a tool in production than read about it
            for a month first.
          </p>
        </div>

        <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-md border border-border-strong bg-surface md:h-auto md:w-[320px]">
          <Image
            src="https://www.devbydavidliu.com/_next/image?url=%2Fperson.png&w=2048&q=75"
            alt="David Liu"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

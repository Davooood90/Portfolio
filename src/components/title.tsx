"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface TitlePageProps {
  title?: string;
}

export default function TitlePage({ title = " " }: TitlePageProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative w-full aspect-[16/9] mx-auto overflow-x-hidden ${
        pathname === "/" ? "" : "h-screen"
      }`}
    >
      <img
        src="/small-stars.png"
        alt="small stars"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-fade-medium"
      />
      <img
        src="/med-stars.png"
        alt="medium stars"
        className="absolute inset-0 w-full h-full object-cover z-1 animate-fade-fast"
      />
      <img
        src="/big-stars.png"
        alt="big stars"
        className="absolute inset-0 w-full h-full object-cover z-2 animate-fade-slow"
      />
      <img
        src="/backdrop.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-3"
      />

      <div
        className="absolute inset-0 h-full w-full z-4"
        style={{
          transform: `translateX(${scrollPosition * 0.2}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="/right-iceberg.png"
          alt="Layer 3"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 h-full w-full z-5"
        style={{
          transform: `translateX(${scrollPosition * -0.1}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="/left-iceberg.png"
          alt="Layer 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
        <h1 className="text-darkblue text-5xl lg:text-8xl text-shadow-lg/20 text-shadow-white">
          {title}
        </h1>
      </div>
    </div>
  );
}

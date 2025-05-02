"use client";
import { useEffect, useState } from "react";

interface TitlePageProps {
  title?: string;
}

export default function TitlePage({ title = " " }: TitlePageProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] mx-auto">
      <img
        src="/backdrop.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute inset-0 h-full w-full"
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
        className="absolute inset-0 h-full w-full"
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
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
}

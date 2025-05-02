"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import LandingPage from "../../components/landing";
import TitlePage from "../../components/title";

export default function Home() {
  const titlePageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When TitlePage is in view, scroll to the welcome section
            welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
            // Disconnect after first trigger to prevent repeated jumps
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the element is visible
    );

    if (titlePageRef.current) {
      observer.observe(titlePageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="custom-gradient">
        <LandingPage />
        <div ref={titlePageRef}>
          <TitlePage />
        </div>
      </div>
      <h1 ref={welcomeRef} className="h-screen" id="welcome">
        Welcome home!
      </h1>
      <Link href="/projects">Projects</Link>
      <Link href="/experiences">Experiences</Link>
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import LandingPage from "../components/landing";
import TitlePage from "../components/title";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const titlePageRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (pathname !== "/" || window.location.hash) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titlePageRef.current) {
      observer.observe(titlePageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className="custom-gradient">
        <LandingPage />
        <div ref={titlePageRef}>
          <TitlePage />
        </div>
      </div>
      <div ref={welcomeRef} id="about">
        <AboutPage />
      </div>
      <div ref={contactRef} id="contact">
        <ContactPage />
      </div>
    </>
  );
}

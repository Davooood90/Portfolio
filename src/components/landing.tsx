"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "developer",
    "designer",
    "innovator",
    "problem solver",
    "collaborator",
  ];
  const currentWordIndex = loopNum % words.length;
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(75);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(150);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, currentWord, typingSpeed]);

  const scrollToElement = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      scrollToElement(id);
    }
  }, [pathname, searchParams]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (
      (href.includes("#") && href.split("#")[0] === "") ||
      href.split("#")[0] === "/"
    ) {
      e.preventDefault();
      const id = href.split("#")[1];
      scrollToElement(id);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src="/small-stars.png"
        alt="small stars"
        fill
        className="absolute inset-0 w-full h-full object-cover z-0 animate-fade-medium"
      />
      <Image
        src="/med-stars.png"
        alt="medium stars"
        fill
        className="absolute inset-0 w-full h-full object-cover z-1 animate-fade-fast"
      />
      <Image
        src="/big-stars.png"
        alt="big stars"
        fill
        className="absolute inset-0 w-full h-full object-cover z-2 animate-fade-slow"
      />
      <Image
        src="/lights.png"
        alt="northern lights"
        fill
        className="absolute inset-0 w-full h-full object-cover z-3"
      />
      <div className="absolute top-0 left-0 w-full max-w-screen px-4 py-3 h-full z-30">
        <div className="container flex flex-col justify-center h-screen px-4 lg:px-25 mx-auto">
          <div className="text-left">
            <h1 className="text-5xl md:text-8xl text-lightblue">
              Hi, I&apos;m David Liu
            </h1>
            <h2 className="text-2xl md:text-4xl text-lightblue my-4">
              Your future{" "}
              <span className="text-hoverblue inline-block">{text}</span>
            </h2>
            <div className="flex gap-4">
              <Link
                href="/#about"
                onClick={(e) => handleNavClick(e, "/#about")}
              >
                <button className="flex cursor-pointer bg-transparent text-lightblue border-2 px-5 py-1 rounded-lg text-xl hover:opacity-[80%] transition duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </Link>
              <a
                href="https://drive.google.com/file/d/14SUdo8Gye6ksOQmTYIkGSFlUy-vPMyay/view?usp=sharing"
                target="_blank"
              >
                <button className="flex cursor-pointer bg-transparent text-lightblue border-2 px-5 py-1 rounded-lg text-xl hover:opacity-[80%] transition duration-300 transform hover:-translate-y-1">
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 18 24"
                    className="ml-1"
                  >
                    <path
                      fill="currentColor"
                      d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

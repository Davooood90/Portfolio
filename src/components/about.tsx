"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function AboutPage() {
  const similar = [
    "Driven",
    "Curious",
    "Open-minded",
    "Friendly",
    "Adaptable",
    "Reliable",
  ];
  const opposite = [
    "Disorganized",
    "Stubborn",
    "Impatient",
    "Moody",
    "Procrastinator",
    "Controlling",
  ];

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
    <div className="w-full max-w-screen lg:px-4 py-3 flex flex-col">
      <div className="container mx-auto">
        <div className="md:flex text-lightblue p-8 items-center">
          <div className="flex items-center">
            <h1 className="text-4xl lg:text-6xl mr-2 lg:mr-4">David Liu</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8 2.5a1.22 1.22 0 0 1 1.25 1.17A1.21 1.21 0 0 1 8 4.84a1.21 1.21 0 0 1-1.25-1.17A1.22 1.22 0 0 1 8 2.5m0 8.66a1.17 1.17 0 1 1-1.25 1.17A1.21 1.21 0 0 1 8 11.16m0-4.33a1.17 1.17 0 1 1 0 2.34a1.17 1.17 0 1 1 0-2.34"
              />
            </svg>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide mt-4 md:mt-0 md:ml-4">
            <a href="/#about">
              <button className="cursor-pointer bg-midblue p-2 px-6 lg:px-8 text-md lg:text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
                Overview
              </button>
            </a>
            <a href="/experiences">
              <button className="cursor-pointer bg-midblue p-2 px-6 lg:px-8 text-md lg:text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
                Experiences
              </button>
            </a>
            <a href="/projects">
              <button className="cursor-pointer bg-midblue p-2 px-6 lg:px-8 text-md lg:text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
                Projects
              </button>
            </a>
            <a href="/">
              <button className="cursor-pointer bg-midblue p-2 px-6 lg:px-8 text-md lg:text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="md:flex bg-midblue m-8 mt-0 rounded-2xl overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-3/7">
            <img
              src="/person.png"
              alt="Photo of David Liu"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-4/7 p-6 text-lightblue flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <div className="bg-blue-200 p-2 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="midblue"
                      d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM21.581 7.78l-.602-.799l-1.596 1.206l.602.798a5 5 0 0 1-.002 6.03l-.603.797l1.595 1.206l.603-.797a7 7 0 0 0 .003-8.442"
                    />
                    <path
                      fill="midblue"
                      d="m18.789 9.889l-.603-.798l-1.596 1.205l.603.798a1.5 1.5 0 0 1 0 1.809l-.604.797l1.595 1.207l.603-.798a3.5 3.5 0 0 0 .002-4.22"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex md:flex-col justify-center items-baseline">
                <h1 className="text-2xl md:text-2xl/5">Da·vid Li·u</h1>
                <h2 className="text-m ml-3 md:ml-0">/ˈdeɪ.vɪd lɪʊ/</h2>
              </div>
            </div>
            <p className="text-m text-descgrey">noun</p>
            <div className="ml-2 text-lg">
              A student at the University of British Columbia (Class of 2028),
              passionate about technology.
              <div className="flex items-center mt-2 mb-3">
                <p className="text-descgreen mr-2">Similar:</p>
                <div className="flex overflow-x-auto scrollbar-hide">
                  {similar.map((word, index) => (
                    <p
                      key={index}
                      className="text-m text-descgrey pl-2 pr-2 border-descgrey border-2 mr-2 rounded-2xl whitespace-nowrap"
                    >
                      {word}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center mt-3 mb-2">
                <p className="text-descred mr-2">Opposite:</p>
                <div className="flex overflow-x-auto scrollbar-hide">
                  {opposite.map((word, index) => (
                    <p
                      key={index}
                      className="text-m text-descgrey pl-2 pr-2 border-descgrey border-2 mr-2 rounded-2xl whitespace-nowrap"
                    >
                      {word}
                    </p>
                  ))}
                </div>
              </div>
              <ul className="list-none pl-0">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:top-0 style-indent">
                  <span className="block ">
                    Interested about Cybersecurity, Artificial Intelligence, and
                    Web Design & Development
                  </span>
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:top-0 style-indent">
                  <span className="block">
                    Enjoys playing badminton, volleyball, and piano, as well as
                    watching hockey
                  </span>
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:top-0 style-indent">
                  <span className="block">
                    Driven by a love for learning new skills and discovering new
                    places
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

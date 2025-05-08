"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experiences", href: "/experiences" },
    { name: "Projects", href: "/projects" },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const scrollToElement = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      scrollToElement(id);
    }
  }, [pathname, searchParams]);

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const [path, hash] = href.split("#");

    if (hash) {
      e.preventDefault();

      if (pathname !== path) {
        await router.push(`${path}#${hash}`);
        setTimeout(() => scrollToElement(hash), 100);
      } else {
        scrollToElement(hash);
        window.history.pushState(null, "", `#${hash}`);
      }
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navbarStyle = `block w-full max-w-screen px-4 py-3 mx-auto bg-opacity-0 top-3 z-[9999] ${
    pathname === "/" ? "absolute" : "fixed"
  }`;

  const containerClass = `container flex flex-wrap items-center justify-between mx-auto text-slate-800 px-8 rounded-4xl transition duration-150 bg-darkblue/80 backdrop-blur-md backdrop-saturate-150`;

  return (
    <div>
      <nav className={navbarStyle}>
        <div className={containerClass}>
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-lightblue font-bold text-2xl hover:text-hoverblue"
          >
            DAVID LIU
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-lightblue transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 gap-x-2 text-lightblue hover:text-hoverblue text-xl"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        <div className="container mx-auto flex justify-end">
          {isMobileMenuOpen && (
            <div className="w-[180px] right-0 mt-2 bg-midblue/80 backdrop-blur-md backdrop-saturate-150 shadow-md rounded-3xl z-50 lg:hidden">
              <ul className="flex flex-col p-6 gap-2">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-lightblue hover:text-hoverblue text-xl"
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

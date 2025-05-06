"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface ProjectLink {
  title: string;
  url: string;
}

interface ProjectItemProps {
  projectName: string;
  imagePath: string;
  links: ProjectLink[];
  description: string;
  duration: {
    start: string;
    end: string;
  };
}

interface ProjectProps {
  item: ProjectItemProps;
}

export default function InfoCard({ item }: ProjectProps) {
  return (
    <div className="flex flex-col px-80">
      <div className="flex text-lightblue p-8 items-center">
        <h1 className="text-6xl mr-4">{item.projectName}</h1>
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
        <div className="flex gap-2 ml-20">
          {item.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <button className="cursor-pointer bg-midblue p-2 px-8 text-xl rounded-3xl border-1 border-midblue hover:border-lightblue transition duration-300">
                {link.title}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="flex bg-midblue m-8 mt-0 rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="w-3/7">
          <img src={item.imagePath} className="object-cover w-full h-full" />
        </div>

        {/* Description Section */}
        <div className="w-4/7 p-6 text-lightblue flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl/8">{item.projectName}</h1>
              <h2 className="text-m">
                {item.duration.start} - {item.duration.end}
              </h2>
            </div>
          </div>
          <div className="text-lg">{item.description}</div>
        </div>
      </div>
    </div>
  );
}

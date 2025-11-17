"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import projects from "@/data/projects.json";
import Image from "next/image";

export default function ProjectsList() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {projects.map((project, i) => (
        <Link
          key={i}
          href={project.href}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="project-card border-b border-neutral-300"
            data-cursor-image={project.image}
          >
            <div
              className={` grid grid-cols-1 items-center py-6 transition-all duration-500 ease-out md:grid-cols-4 ${
                hovered !== null && hovered !== i ? "opacity-10" : "opacity-100"
              }`}
            >
              <div className="mb-6 w-full md:hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={project.image}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 mb-6 md:mb-0">
                <h1 className="text-3xl">{project.title}</h1>
              </div>
              <div>
                <h1 className="text-lg">{project.type}</h1>
              </div>
              <div className="hidden justify-self-end md:inline">
                <ArrowRightIcon
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  size={32}
                  className={`transition-transform duration-500 ease-out ${
                    hovered === i
                      ? "scale-110 -rotate-45"
                      : "scale-100 rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

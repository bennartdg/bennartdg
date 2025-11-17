"use client";
import services from "@/data/services.json";
import { useState } from "react";

export default function CardServices() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className="grid cursor-pointer border-b border-neutral-300 py-6 transition-colors duration-300"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex gap-3">
            <p className="text-lg text-neutral-500">
              {(index + 1).toString().padStart(2, "0")}
            </p>
            <h1
              className={`text-3xl transition-colors duration-300 ${
                hovered === index ? "text-foreground" : ""
              }`}
            >
              {service.title}
            </h1>
          </div>

          <div
            className={`mt-4 max-h-full overflow-hidden opacity-100 transition-all duration-500 ease-in-out lg:mt-0 ${
              hovered === index
                ? "lg:mt-4 lg:max-h-50 lg:opacity-100"
                : "lg:max-h-0 lg:opacity-0"
            }`}
          >
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

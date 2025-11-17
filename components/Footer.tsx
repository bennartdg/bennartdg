"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { BennartIcon } from "@/util/svg";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const text = "MASSIVETRAUMA".split("");

  const letterVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: () => ({
      y: 0,
      opacity: 1,
      transition: {
        // delay: i * 0.05, // build-up sequentially
        delay: 0.05, // build-up sequentially
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <footer className="mt-52" ref={ref}>
      <div className="pb-6">
        <section className="mx-4 grid max-w-7xl gap-6 pt-20 xl:mx-auto">
          <h1 className="flex justify-between overflow-hidden text-[9vw] leading-none font-semibold">
            {text.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:place-items-center">
            <div className="order-2 w-full md:order-1">
              <p className="md:place-self-start">
                &copy; 2025 BENNART DEM GUNAWAN
              </p>
            </div>

            <div className="order-1 hidden animate-pulse md:inline">
              <BennartIcon w={24} h={24} />
            </div>

            <div className="order-1 flex w-full gap-6 md:order-2 md:justify-end">
              <a
                href="https://www.linkedin.com/in/bennartdemgunawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/bennartdg"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/bennartdg/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit"
              >
                Instagram
              </a>
              <a
                href="mailto:bennart.dgunawan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

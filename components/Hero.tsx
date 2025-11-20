"use client";
import { motion, Variants } from "framer-motion";


export default function Hero() {
  
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  } satisfies Variants;
  
  const textLines = [
    <>
      Welcome to <span className="font-semibold">MASSIVETRAUMA</span>
    </>,
    "A space where thoughts turn into builds.",
    "THINK VISUALLY",
    "CODE BOLDLY",
  ];

  return (
    <section className="relative mx-4 flex h-screen max-w-full flex-col justify-center md:max-w-7xl xl:mx-auto" id="#">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 items-center lg:grid-cols-5">
          <div className="mb-4 lg:m-0">
            {textLines.slice(0, 2).map((text, i) => (
              <motion.h1
                key={i}
                custom={i}
                variants={textVariant}
                initial="hidden"
                animate={"visible"}
                className="text-2xl leading-none tracking-tighter"
              >
                {text}
              </motion.h1>
            ))}
          </div>

          <div className="col-span-4">
            <motion.h1
              custom={2}
              variants={textVariant}
              initial="hidden"
              animate={"visible"}
              className="items-center text-5xl leading-none font-semibold uppercase md:text-[8vw] lg:text-end"
            >
              THINK VISUALLY
            </motion.h1>
          </div>
        </div>

        <motion.h1
          custom={3}
          variants={textVariant}
          initial="hidden"
          animate={"visible"}
          className="text-5xl leading-none font-semibold uppercase md:text-[8vw]"
        >
          CODE BOLDLY
        </motion.h1>
      </div>
    </section>
  );
}

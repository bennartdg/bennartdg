"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]"),
    );

    if (sections.length === 0) return;

    let ticking = false;

    const computeActive = () => {
      const windowHeight = window.innerHeight;

      const intersecting = sections.filter((section) => {
        const r = section.getBoundingClientRect();
        return r.top < windowHeight && r.bottom > 0;
      });

      let newActive = "";

      if (intersecting.length === 0) {
        newActive = "";
      } else {
        for (const section of intersecting) {
          const sectionName = section.dataset.section ?? "";

          const title = section.querySelector<HTMLElement>("[data-title]");

          const titleRect = title?.getBoundingClientRect();

          const titleVisible =
            !!titleRect && titleRect.top < windowHeight && titleRect.bottom > 0;

          const titleAbove = !!titleRect && titleRect.bottom < 0;

          if (titleVisible) {
            newActive = "";
            break;
          } else if (titleAbove) {
            newActive = sectionName;
            break;
          } else {
            continue;
          }
        }
      }

      setActiveSection((prev) => {
        if (prev !== newActive) return newActive;
        return prev;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
      }
    };

    computeActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      className="fixed z-9998 w-full py-6 transition-colors duration-500"
      style={{
        background: `linear-gradient(to bottom, var(--background, #000) 0%, transparent 100%)`,
      }}
    >
      <div className="mx-4 max-w-full md:max-w-7xl xl:mx-auto">
        <div className="flex justify-between">
          <div className="relative hidden gap-1 overflow-hidden text-xl font-semibold md:flex">
            <a href="#" className="relative overflow-hidden">
              &copy; BENNART
            </a>

            <AnimatePresence mode="wait">
              {activeSection && (
                <motion.a
                  key={activeSection}
                  href={`#${activeSection.toLowerCase().replace(/\s+/g, "")}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="block capitalize"
                >
                  {activeSection}
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          <div className="relative flex items-center overflow-hidden text-xl font-semibold md:hidden">
            <AnimatePresence mode="wait">
              {!activeSection ? (
                <motion.a
                  key="bennart"
                  href="#"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="block"
                >
                  &copy; BENNART
                </motion.a>
              ) : (
                <motion.a
                  key={activeSection}
                  href={`#${activeSection.toLowerCase().replace(/\s+/g, "")}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="block capitalize"
                >
                  {activeSection}
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {mounted && (
            <button
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              className={`link-underline w-fit transition-opacity duration-300 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentTheme === "dark" ? "Light Off" : "Light On"}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

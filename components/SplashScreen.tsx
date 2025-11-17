"use client";

import { useEffect, useState } from "react";
import { BennartIcon } from "@/util/svg";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setExit(true);

      const hideTimer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 700);

      return () => clearTimeout(hideTimer);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`bg-background fixed inset-0 z-9999 flex items-center justify-center transition-all duration-700 ease-in-out ${exit ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}
    >
      <div className="animate-pulse">
        <BennartIcon w={50} h={50} />
      </div>
    </div>
  );
}

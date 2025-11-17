"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [isCardMode, setIsCardMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseEnterCard = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const image = target.getAttribute("data-cursor-image");
      if (image) {
        setHoverImage(image);
        setIsCardMode(true);
      }
    };

    const handleMouseLeaveCard = () => {
      setHoverImage(null);
      setIsCardMode(false);
    };

    // Tangani movement
    window.addEventListener("mousemove", handleMouseMove);

    // Tangani hover ke elemen project-card
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnterCard);
      card.addEventListener("mouseleave", handleMouseLeaveCard);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnterCard);
        card.removeEventListener("mouseleave", handleMouseLeaveCard);
      });
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${isCardMode ? "card" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    >
      {isCardMode && hoverImage && (
        <div className="text-background grid h-full w-full place-items-center">
          <Image
            key={hoverImage}
            width={240}
            height={280}
            src={hoverImage}
            alt="Preview"
            className="animate-fadeIn h-full w-full transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}

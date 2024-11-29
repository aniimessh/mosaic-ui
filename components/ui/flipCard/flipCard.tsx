"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

interface FlipCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const cards = [
  {
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    title: "Mountain Adventure",
    description:
      "Explore the majestic peaks and breathtaking views of nature's finest mountains. Every step is a new discovery waiting to happen.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=640",
    title: "Ocean Serenity",
    description:
      "Dive into the tranquil waters of the world's most beautiful beaches. Let the waves wash away your worries.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    title: "Urban Explorer",
    description:
      "Navigate through the concrete jungle and discover hidden gems in the heart of bustling cities.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
    title: "Forest Mystery",
    description:
      "Venture deep into ancient forests where every tree tells a story and magic seems to lurk around every corner.",
  },
];

function SingleCard({ imageUrl, title, description }: FlipCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    const front = frontRef.current;
    const back = backRef.current;

    if (!card || !front || !back) return;

    const timeline = gsap.timeline({ paused: true });

    timeline
      .to(front, {
        duration: 0.6,
        rotateY: 180,
        ease: "power2.inOut",
      })
      .to(
        back,
        {
          duration: 0.6,
          rotateY: 0,
          ease: "power2.inOut",
        },
        0
      );

    const playAnimation = () => timeline.play();
    const reverseAnimation = () => timeline.reverse();

    card.addEventListener("mouseenter", playAnimation);
    card.addEventListener("mouseleave", reverseAnimation);

    return () => {
      card.removeEventListener("mouseenter", playAnimation);
      card.removeEventListener("mouseleave", reverseAnimation);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full sm:w-full md:w-72 h-72 sm:h-80 md:h-96 cursor-pointer perspective-1000"
    >
      <div
        ref={frontRef}
        className="absolute w-full h-full preserve-3d backface-hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-xl shadow-xl"
        />
      </div>
      <div
        ref={backRef}
        style={{ transform: "rotateY(180deg)" }}
        className="absolute w-full z-10 h-full bg-white/80 rounded-xl shadow-xl p-6 preserve-3d backface-hidden"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-black">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function FlipCard() {
  return (
    <div className="flex flex-wrap gap-6 md:gap-8 justify-center px-4 sm:px-8 w-full">
      {cards.map((card) => (
        <SingleCard
          key={card.title}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

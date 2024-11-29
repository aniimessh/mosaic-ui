import Image from "next/image";
import React from "react";

const avengerBG =
  "https://images.unsplash.com/photo-1636959237460-dcdc368483a1?q=80&w=640";

export const MinimalCard = () => {
  return (
    <div className="bg-black/30 p-4 rounded-2xl w-[450px] hover:shadow-2xl transition-all duration-300 border-white/20 border">
      <Image
        src={avengerBG}
        alt=""
        width={450}
        height={200}
        className="h-[200px] w-full object-cover rounded-2xl transition-all duration-200"
      />

      <div>
        <p className="font-bold mt-5 mb-2">Minimal Card</p>
        <p className="text-white/30 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          blanditiis. Sapiente
        </p>
      </div>
    </div>
  );
};

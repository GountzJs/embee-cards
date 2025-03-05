import React, { useState } from "react";

interface CardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  initialFace?: "front" | "back";
}

export function CardFlipped({ front, back, initialFace = "front" }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(initialFace === "back");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleFlip}
      className="cursor-pointer perspective-1000 perspective-origin-center"
    >
      <div
        className={`w-[300px] h-[450px] relative transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : "rotate-y-0"
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rotate-y-0">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
}

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
      className="cursor-pointer"
      onClick={handleFlip}
      style={{ perspective: "2000px" }}
    >
      <div
        className={`w-[300px] h-[450px] relative transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : "rotate-y-0"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute w-full h-full rotate-y-0 backface-hidden">
          {front}
        </div>
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}

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
      style={{ perspective: "1000px" }}
    >
      <div
        className={`w-[200px] h-[300px] relative transition-transform duration-500`}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        >
          {front}
        </div>
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

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
      style={{ perspective: "1000px", cursor: "pointer" }}
    >
      <div
        style={{
          width: "200px",
          height: "300px",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          {front}
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

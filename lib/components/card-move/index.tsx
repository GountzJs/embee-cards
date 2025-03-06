import React, { ReactNode, useState } from "react";

interface CardMoveProps {
  children: ReactNode;
  maxTilt?: number;
  perspective?: number;
  ranking?: number;
}

export function CardMove({
  children,
  maxTilt = 15,
  perspective = 1000,
  ranking = 1,
}: CardMoveProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [gradient, setGradient] = useState<string>("");

  const getOpacity = () => {
    if (ranking === 1) return "opacity-0";
    if (ranking === 2) return "opacity-10";
    if (ranking === 3) return "opacity-20";
    if (ranking === 4) return "opacity-40";
    return "opacity-50";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const intensity = Math.sqrt(xPercent ** 2 + yPercent ** 2);
    const mixFactor = Math.min(1, intensity);

    const blueStop = Math.max(10, 30 - mixFactor * 10);
    const pinkStop = Math.max(40, 55 - mixFactor * 15);
    const yellowStop = Math.min(100, 85 - mixFactor * 10);

    let direction = "to left top";

    if (Math.abs(yPercent) < 0.3) {
      if (xPercent < -0.5) {
        direction = "to left";
      } else if (xPercent > 0.5) {
        direction = "to right";
      }
    } else if (Math.abs(xPercent) < 0.3) {
      if (yPercent < -0.5) {
        direction = "to top";
      } else if (yPercent > 0.5) {
        direction = "to bottom";
      }
    } else {
      if (xPercent > 0 && yPercent < 0) direction = "to right top";
      if (xPercent < 0 && yPercent < 0) direction = "to left top";
      if (xPercent > 0 && yPercent > 0) direction = "to right bottom";
      if (xPercent < 0 && yPercent > 0) direction = "to left bottom";
    }

    setGradient(
      `linear-gradient(${direction}, #4158D0 ${blueStop}%, #C850C0 ${pinkStop}%, #FFCC70 ${yellowStop}%)`
    );

    const tiltX = yPercent * maxTilt;
    const tiltY = xPercent * -maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setGradient("");
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[300px] h-[450px] relative transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <div
        className={`rounded-4xl absolute top-0 left-0 h-full w-full ${getOpacity()} pointer-events-none`}
        style={{
          background: gradient,
          mixBlendMode: "hard-light",
        }}
      ></div>
    </div>
  );
}

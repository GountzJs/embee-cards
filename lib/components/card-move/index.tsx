import React, { ReactNode, useState } from "react";

interface CardMoveProps {
  children: ReactNode;
  maxTilt?: number;
  perspective?: number;
}

export function CardMove({
  children,
  maxTilt = 15,
  perspective = 1000,
}: CardMoveProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const tiltX = yPercent * maxTilt;
    const tiltY = xPercent * -maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

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
    </div>
  );
}

import React, { ReactNode, useState } from "react";

interface CardMoveProps {
  children: ReactNode;
  maxTilt?: number;
  perspective?: number;
  holographicLevel?: number;
}

export function CardMove({
  children,
  maxTilt = 15,
  perspective = 1000,
  holographicLevel = 1,
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

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const holographicIntensity = holographicLevel / 5;
  const gradientOpacity = 0.2 * holographicIntensity;
  const gradientSize = 100 + 100 * holographicIntensity;

  const holographicStyle = {
    background: `linear-gradient(
      45deg,
      rgba(255, 0, 0, ${gradientOpacity}) 0%,
      rgba(255, 165, 0, ${gradientOpacity}) 20%,
      rgba(255, 255, 0, ${gradientOpacity}) 40%,
      rgba(0, 255, 0, ${gradientOpacity}) 60%,
      rgba(0, 0, 255, ${gradientOpacity}) 80%,
      rgba(128, 0, 128, ${gradientOpacity}) 100%
    )`,
    backgroundSize: `${gradientSize}% ${gradientSize}%`,
    backgroundPosition: `${50 + tilt.y * 2}% ${50 + tilt.x * 2}%`,
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[300px] h-[450px] relative transition-transform duration-200 ease-out overflow-hidden"
      style={{
        transform: `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 z-0" style={holographicStyle} />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

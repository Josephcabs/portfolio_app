"use client";

import { useColor } from "@/lib/provider/ColorProvider";

export default function Header() {
  const { screenColor, gradientColors } = useColor();
  return (
    <>
      <h1
        style={
          {
            "--dynamic-color": screenColor,
            "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${screenColor}, ${gradientColors.darkerColor})`,
            backgroundImage: "var(--gradient-bg)",
          } as React.CSSProperties
        }
        className="text-4xl font-extrabold bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
      >
        Portfolio for Joseph Caballero
      </h1>
    </>
  );
}

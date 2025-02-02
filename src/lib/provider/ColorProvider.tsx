"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import adjustBrightness from "../utils";
import chroma from "chroma-js";

interface ColorContextProps {
  screenColor: string;
  setScreenColor: (color: string) => void;
  gradientColors: {
    lighterColor: string;
    darkerColor: string;
  };
  opposingColor: string;
}
//TODO - clean up variables names
const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [screenColor, setScreenColor] = useState<string>("#DC2626");
  const opposingColor =
    chroma(screenColor).luminance() > 0.5
      ? adjustBrightness(screenColor, -40)
      : adjustBrightness(screenColor, 40);

  return (
    <ColorContext.Provider
      value={{
        screenColor,
        setScreenColor,
        gradientColors: {
          lighterColor: adjustBrightness(screenColor, 20),
          darkerColor: adjustBrightness(screenColor, -40),
        },
        opposingColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

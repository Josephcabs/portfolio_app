"use client";
import { useColor } from "@/lib/provider/ColorProvider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const { screenColor, gradientColors, opposingColor } = useColor();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        style={
          {
            "--dynamic-color": screenColor,
            "--darker-color": opposingColor,
          } as React.CSSProperties
        }
        className="flex flex-col items-center justify-center text-[#666]"
      >
        <h1
          style={
            {
              "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${screenColor}, ${gradientColors.darkerColor})`,
              backgroundImage: "var(--gradient-bg)",
            } as React.CSSProperties
          }
          className="flex tems-center justify-center text-4xl font-bold py-12 text-4xl bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
        >
          About Me
        </h1>
        <button
          onClick={() => router.push("/")}
          className="text-3xl left-0 text-dynamic px-6 py-2 rounded hover:bg-dynamic antialiased overflow-hidden duration-500 transition-all hover:text-black hover:px-4 hover:bg-opacity-80 hover:text-opacity-100"
        >
          Back to terminal
        </button>
        <div className="flex flex-col items-center justify-center text-[#666]">
          <div className="flex flex-col items-center justify-center pb-5 w-[90%] sm:w-[80%] md:w-[60%] ">
            <Card
              sx={{ color: "#666", backgroundColor: "#171717" }}
              className="transition-all duration-300 border-2 border-transparent hover:border-dynamic hover:shadow-lg hover:shadow-dynamic"
            >
              <CardMedia
                sx={{ height: 600 }}
                image="/mhvsth.png"
                title="Boxing"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="p"
                  className="text-center text-1xl md:font-bold md:text-2xl"
                >
                  I am a boxer in training, I am resilient and I am hard working
                  when achieving personal goals. This lead me to improve my
                  skills and to become a better version of myself. I am
                  passionate about my work and I am always looking for new
                  challenges.
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  href="https://www.youtube.com/watch?v=gaOTSMB6hLQ&pp=ygUebWFydmluIGhhZ2xlciB2cyB0aG9tYXMgaGVhcm5z"
                  target="_blank"
                  size="small"
                  className="hover:bg-dynamic antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-darker
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100"
                  sx={{ fontSize: "1rem", color: "#666" }}
                >
                  View My Favorite Fight
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 text-1xl text-[#666] w-auto transition-all duration-500 hover:text-darker hover:bg-dynamic font-bold hover:bg-opacity-80 
    hover:text-opacity-100 
    antialiased 
    overflow-hidden 
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    "
        >
          Go To Top
        </button>
      )}
    </>
  );
}

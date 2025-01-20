"use client";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

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
      <div className="flex flex-col items-center justify-center text-[#666]">
        <h1 className="flex tems-center justify-center text-4xl font-bold py-12 text-4xl bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow">
          Contact Me
        </h1>
        <button
          onClick={() => router.push("/")}
          className="text-3xl left-0 text-red-600 px-6 py-2 rounded hover:bg-red-600 antialiased overflow-hidden duration-500 transition-all hover:text-black hover:px-4 hover:bg-opacity-80 hover:text-opacity-100"
        >
          Back to terminal
        </button>
        <div className="w-[90%] sm:w-[80%] md:w-[60%] flex justify-center text-4xl pb-5">
          <Card
            sx={{
              color: "#666",
              backgroundColor: "#171717",
            }}
            className="transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
          >
            <CardHeader
              sx={{
                display: "flex",
                width: "100%",
              }}
              avatar={
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  className="bg-transparent"
                  src="/linkedin.png"
                  aria-label="Linkedin"
                  variant="circular"
                />
              }
            />
            <CardContent>
              <Typography
                gutterBottom
                component="p"
                className="text-2xl font-bold text-center"
              >
                This is my linkedin, where you can find more about me, my
                interests, and connections.
                <br />
                <br />I hope to connect with you soon.
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
              <Button
                href="https://www.linkedin.com/in/joseph-caballero-811bab280/"
                size="small"
                target="_blank"
                className="hover:bg-red-600 antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-black
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100"
                sx={{ fontSize: "1rem", color: "#666" }}
              >
                View My LinkedIn
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="w-[90%] sm:w-[80%] md:w-[60%] flex justify-center text-4xl pb-5">
          <Card
            sx={{
              color: "#666",
              backgroundColor: "#171717",
            }}
            className="transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
          >
            <CardHeader
              sx={{
                display: "flex",
                width: "100%",
              }}
              avatar={
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  className="bg-transparent"
                  src="/mail.png"
                  aria-label="Linkedin"
                  variant="circular"
                />
              }
            />
            <CardContent>
              <Typography
                gutterBottom
                component="p"
                className="text-2xl font-bold text-center"
              >
                This is my email
                <br />
                Feel free to contact me anytime.
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
              <Button
                href="mailto:Jxcaballero244@gmail.com"
                size="small"
                target="_blank"
                className="hover:bg-red-600 antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-black
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100"
                sx={{ fontSize: "1rem", color: "#666" }}
              >
                Email Me
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      {isVisible && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 text-1xl text-[#666] w-auto transition-all duration-500 hover:text-black hover:bg-red-600 font-bold hover:bg-opacity-80 
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

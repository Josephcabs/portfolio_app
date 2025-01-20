"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Repos() {
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="flex flex-col items-center justify-center text-[#666] ">
        <h1 className="flex items-center justify-center text-4xl font-bold py-12 text-4xl bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow">
          Repositories
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-[90%] sm:w-[80%] md:w-[60%] flex justify-center text-4xl p-5">
            <Card
              className="transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
              sx={{ color: "#666", backgroundColor: "#171717" }}
            >
              <CardMedia component="img" height="140" image="/project.png" />
              <CardContent className="text-center text-[#666]">
                <Typography gutterBottom variant="h4" component="div">
                  Ecommerce Site
                </Typography>
                <Typography variant="h6">Description:</Typography>
                <Typography component="div" className="text-2xl">
                  In this project I was responsible for the following:
                  <br />
                  <br />
                  Making api calls to get the data from the backend to display
                  on all the pages, styling the page and making it look good,
                  managing the database, making the cart page , making the
                  checkout page , troubleshooting issues, heavily reviewing the
                  pull requests, and managing the team.
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  className="hover:bg-red-600 antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-black
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100"
                  size="small"
                  href="https://24q4-team1.vercel.app/"
                  target="_blank"
                  sx={{ fontSize: "1rem", color: "#666" }}
                >
                  Access Project
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="w-[90%] sm:w-[80%] md:w-[60%] flex justify-center text-4xl p-5">
            <Card
              className="transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
              sx={{ maxWidth: 600, color: "#666", backgroundColor: "#171717" }}
            >
              <CardMedia component="img" height="140" image="/repository.png" />
              <CardContent className="text-center text-[#666]">
                <Typography gutterBottom variant="h4" component="div">
                  Code Differently Bootcamp Work
                </Typography>
                <Typography variant="h6">Description:</Typography>
                <Typography component="div" className="text-2xl">
                  In this repository I was responsible for the following:
                  <br />
                  <br />
                  Making sure my work was consistent and organized, making sure
                  my code was clean and efficient, making sure my code was
                  well-tested, making sure my code was well-documented,
                  understanding the work, troubleshooting issues, rapid
                  learning, and being a team player to collaborate on tasks.
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  className="hover:bg-red-600 antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-black
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100"
                  size="small"
                  href="https://github.com/code-differently/code-differently-24-q4/pulls?q=is%3Apr+author%3AjosephCabs"
                  target="_blank"
                  sx={{ fontSize: "1rem", color: "#666" }}
                >
                  View My Work In My Bootcamp
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

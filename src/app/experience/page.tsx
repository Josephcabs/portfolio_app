"use client";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Experience() {
  const [view, setView] = useState(false);
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

  function viewMore() {
    setView(!view);
  }

  const viewLess = () => {
    setView(!view);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-[#666]">
        <h1 className="flex items-center justify-center text-4xl font-bold py-12 text-4xl bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow">
          Experience
        </h1>
        <div className="w-[90%] sm:w-[80%] md:w-[60%] flex justify-center text-4xl pb-5">
          <Card
            sx={{ color: "#666", backgroundColor: "#171717" }}
            className="transition-all duration-300 border-2 border-transparent hover:border-red-600 hover:shadow-lg hover:shadow-red-600"
          >
            <CardHeader
              sx={{
                display: "flex",
                width: "100%",
              }}
              avatar={
                <Avatar
                  sx={{ height: 100, width: 100 }}
                  className="bg-transparent"
                  aria-label="github"
                  variant="circular"
                  src="/github.png"
                />
              }
            />
            <CardMedia
              component="img"
              height="600"
              image="/coding.png"
              aria-label="coding"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="p"
                className="text-center text-1xl md:font-bold md:text-2xl"
              >
                I&apos;ve been programming since 2021 and I am always looking
                for new challenges to improve. I have experience with React,
                Next.js, Typescript, TailwindCSS, Redux, Node.js, Express.js,
                MongoDB, PostMan, Github, and much more.
                <br />
                <br />
                I participated in youth programs alongside Code Differently
                which led me to enroll in an internship with JP.Morgan Chase,
                which honed my skills as a troubleshooter and a problem solver,
                solving any problem. I was given and tasked with the purpose of
                learning a new e2e technology named Cypress that is still being
                implemented to this day.
                <br />
                <br />
                {!view && (
                  <>
                    <button
                      className="text-1xl font-normal text-[#666] w-1/4 hover:w-2/5 antialiased  transition-all duration-500 hover:px-4 hover:text-black hover:bg-red-600 font-bold"
                      onClick={viewMore}
                    >
                      Read More
                    </button>
                  </>
                )}
                {view && (
                  <>
                    From there I was welcomed back into Code Differently, this
                    time as an adult, where I was placed inside of a full-stack
                    engineer bootcamp to further improve my skills and learn new
                    technologies, doing things such as building a full-stack
                    application, learning new langauges and frameworks in a few
                    days, problem solving, and troubleshooting all while
                    maintaining a strong work ethic and over a 100%. In this
                    program I collaberated with others and personally took upon
                    a leadership role to ensure my peers were learning and
                    growing as well.
                    <br />
                    <br />
                    In this bootcamp, I was given an externship role with a
                    organization called Secured Health. There I was tasked with
                    Quality Assurance testing using cypress, I eventually used
                    my knowledge and troubleshooting to code full-stack and to
                    bring in competent work that lived up to company standards
                    and expectations. I was able to integrate myself into the
                    organization and learn grew as a developer.
                    <br />
                    <br />I continue making sites and building upon what i
                    currently have to never stop growing and to apply what I
                    apply to boxing, a strong will and determination.
                    <br />
                    <br />
                    <button
                      onClick={viewLess}
                      className="text-1xl font-normal text-[#666] w-[200px] hover:w-[250px]  transition-all duration-500 hover:px-4 hover:text-black hover:bg-red-600 font-bold"
                    >
                      Click to view less
                    </button>
                  </>
                )}
              </Typography>
            </CardContent>
            <CardActions className="flex justify-center">
              <Button
                href="https://github.com/Josephcabs"
                target="_blank"
                size="small"
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
                View My Github
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

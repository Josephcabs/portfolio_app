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
import { useEffect, useState } from "react";

export default function Repos() {
  const { screenColor, gradientColors, opposingColor } = useColor();
  const [isVisible, setIsVisible] = useState(false);
  const [viewEccom, setViewEccom] = useState(false);
  const [viewWork, setViewWork] = useState(false);

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
          className="flex items-center justify-center text-4xl font-bold py-12 text-4xl bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
        >
          Repositories
        </h1>
        <button
          onClick={() => router.push("/")}
          className="text-3xl left-0 text-dynamic px-6 py-2 rounded hover:bg-dynamic antialiased overflow-hidden duration-500 transition-all hover:text-darker hover:px-4 hover:bg-opacity-80 hover:text-opacity-100"
        >
          Back to terminal
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-[90%] sm:w-[80%] md:w-[60%] flex justify-center text-4xl p-5">
            <Card
              className="transition-all duration-300 border-2 border-transparent hover:border-dynamic hover:shadow-lg hover:shadow-dynamic"
              sx={{ color: "#666", backgroundColor: "#171717" }}
            >
              <CardMedia component="img" height="140" image="/project.png" />
              <CardContent className="text-center text-[#666]">
                <Typography
                  gutterBottom
                  className="text-3xl md:text-4xl"
                  component="p"
                >
                  E-commerce Site
                </Typography>
                <Typography component="p" className="text-2xl md:text-3xl">
                  In this project I was responsible for the following:
                </Typography>
                <Typography component="div" className="text-xl md:text-2xl">
                  <br />
                  <ul className="list-disc px-4 space-y-2 md:space-y-4">
                    <li>
                      Making api calls to get the data from the backend to
                      display on all the pages
                    </li>
                    {viewEccom && (
                      <>
                        <li>
                          Styling the page to make it more aesthetic and
                          ensuring data displays properly throughout the
                          experience
                        </li>
                        <li>
                          Managed database operations, ensuring data integrity,
                          optimization, and smooth backend interactions
                        </li>
                        <li>
                          Developed key e-commerce features, including the cart,
                          checkout, and product pages, focusing on functionality
                          and user experience
                        </li>
                        <li>
                          Identified and resolved technical issues, ensuring
                          smooth application performance through thorough
                          debugging and troubleshooting
                        </li>
                        <li>
                          Conducted comprehensive code reviews, ensuring code
                          quality, adherence to best practices, and seamless
                          integration of new features
                        </li>
                        <li>
                          Led the development team, facilitating collaboration,
                          task management, and project progress to meet
                          deadlines effectively
                        </li>
                      </>
                    )}
                  </ul>
                  <br />
                  <button
                    className="hover:bg-dynamic antialiased overflow-hidden duration-500 transition-all hover:text-darker hover:px-4 hover:bg-opacity-80 hover:text-opacity-100"
                    onClick={() => setViewEccom(!viewEccom)}
                  >
                    {viewEccom ? "Click to view less" : "Read More"}
                  </button>
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  className="hover:bg-dynamic antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-darker
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
              className="transition-all duration-300 border-2 border-transparent hover:border-dynamic hover:shadow-lg hover:shadow-dynamic"
              sx={{ maxWidth: 600, color: "#666", backgroundColor: "#171717" }}
            >
              <CardMedia component="img" height="140" image="/repository.png" />
              <CardContent className="text-center text-[#666]">
                <Typography
                  gutterBottom
                  className="text-3xl md:text-4xl"
                  component="p"
                >
                  Code Differently Bootcamp Work
                </Typography>
                <Typography component="p" className="text-2xl md:text-3xl">
                  In this repository I was responsible for the following:
                </Typography>
                <Typography component="div" className="text-xl md:text-2xl">
                  <br />
                  <br />
                  <ul className="list-disc px-4 space-y-2 md:space-y-4">
                    <li>Ensuring consistency and organization in my work</li>
                    {viewWork && (
                      <>
                        <li>Writing clean, efficient, and maintainable code</li>
                        <li>
                          Conducting thorough testing to ensure code reliability
                        </li>
                        <li>
                          Documenting code effectively for future
                          maintainability
                        </li>
                        <li>
                          Developing a deep understanding of project
                          requirements
                        </li>
                        <li>
                          Diagnosing and resolving technical issues efficiently
                        </li>
                        <li>
                          Quickly adapting to new concepts and technologies
                        </li>
                        <li>
                          Collaborating effectively with team members to achieve
                          goals
                        </li>
                      </>
                    )}
                  </ul>
                  <br />
                  <button
                    className="hover:bg-dynamic antialiased overflow-hidden duration-500 transition-all hover:text-darker hover:px-4 hover:bg-opacity-80 hover:text-opacity-100"
                    onClick={() => setViewWork(!viewWork)}
                  >
                    {viewWork ? "Click to view less" : "Read More"}
                  </button>
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  className="hover:bg-dynamic antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:text-darker
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    text-center"
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

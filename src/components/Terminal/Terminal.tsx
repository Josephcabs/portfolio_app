"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import rgbHex from "rgb-hex";
import { RgbColorPicker } from "react-colorful";
import adjustBrightness from "@/lib/utils";
import hexRgb from "hex-rgb";
import Loader from "../Loader";

interface RGBColor {
  r: number;
  g: number;
  b: number;
}

const Terminal = () => {
  const [color, setColor] = useState<RGBColor>({ r: 220, g: 38, b: 38 });
  const [hexColor, setHexColor] = useState("#" + rgbHex(220, 38, 38));
  const [gradientColors, setGradientColors] = useState({
    lighterColor: adjustBrightness(hexColor, 20),
    darkerColor: adjustBrightness(hexColor, -20),
  });
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    "Welcome to my portfolio!",
    "Type 'help' to see available commands.",
  ]);
  const [lastCommand, setLastCommand] = useState("");
  const [route, setRoute] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  //TODO - Make the color universal for the whole site. Blockers: page is serverside and component tracking is hard within the layout so possible make a client to hold all pages themselves

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleBlur = () => {
    if (window.innerWidth < 768) {
      return;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleColorReset = () => {
    sessionStorage.removeItem("hexColor");
    setColor({ r: 220, g: 38, b: 38 });
    setHexColor("#" + rgbHex(220, 38, 38));
    setGradientColors({
      lighterColor: adjustBrightness(hexColor, 20),
      darkerColor: adjustBrightness(hexColor, -40),
    });
  };

  const handleColorChange = (newColor: RGBColor) => {
    setColor(newColor);
  };
  //TODO: handle color change and common functions in utils.ts when the time comes
  useEffect(() => {
    setHexColor("#" + rgbHex(color.r, color.g, color.b));
    setGradientColors({
      lighterColor: adjustBrightness(hexColor, 20),
      darkerColor: adjustBrightness(hexColor, -40),
    });
    setLoading(false);
  }, [color, hexColor]);

  useEffect(() => {
    setLoading(true);
    const sessionColor = sessionStorage.getItem("hexColor");
    const { red, green, blue } = hexRgb(
      sessionColor || "#" + rgbHex(220, 38, 38),
    );
    setColor({ r: red, g: green, b: blue });
    handleBlur();
  }, []);

  // if(typeof window !== "undefined") {
  //   window.onbeforeunload = () => {
  //     sessionStorage.setItem("hexColor", hexColor);
  //     console.log(hexColor);
  //   };
  // }

  useEffect(() => {
    if (window.innerWidth > 768) {
      if (messages.length > 6) {
        setMessages((prevMessages) => prevMessages.slice(-5));
      }
    } else {
      if (messages.length > 2) {
        setMessages((prevMessages) => prevMessages.slice(-1));
      }
    }
  }, [messages]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const set = ["about", "repos", "contact", "experience"];
    if (e.key === "Enter") {
      const userInput = input.toLowerCase().trim();
      const newMessages = [...messages, `> ${input}`];

      if (userInput === "") return;

      switch (userInput) {
        case "help":
          newMessages.push(
            "Available commands: about, projects, contact, clear, experience, reset-color, keep-color, help",
          );
          break;

        case "reset-color":
          newMessages.push("Color reset.");
          handleColorReset();
          break;

        case "keep-color":
          newMessages.push("Saved color.");
          sessionStorage.setItem("hexColor", hexColor);
          console.log("Color saved.", sessionStorage.getItem("hexColor"));
          break;

        // case "set-color":
        //   newMessages.push("Color set.");
        //   break;
        //TODO - add a terminal prompt for the color picker that changes inside instead of dragging the picker

        case "about":
          newMessages.push(
            "I am a full-stack developer with experience in Java and JavaScript. Would you like to know more about me? y/n",
          );
          setLastCommand("about");
          setRoute("about");
          break;

        case "projects":
          newMessages.push(
            "I've worked on multiple projects in group environments. Would you like to know more about my projects? y/n",
          );
          setLastCommand("repos");
          setRoute("repos");
          break;

        case "contact":
          newMessages.push(
            "You can find me on LinkedIn. Would you like to know more about ways to connect? y/n",
          );
          setLastCommand("contact");
          setRoute("contact");
          break;

        case "experience":
          newMessages.push(
            "I have a short yet extensive experience in the coding field. Would you like to know more about my experience? y/n",
          );
          setLastCommand("experience");
          setRoute("experience");
          break;

        case "clear":
          newMessages.length = 0;
          newMessages.push(
            "Welcome to my portfolio!",
            "Type 'help' to see available commands.",
          );
          break;

        // case "exit":
        //   router.push("/");
        //   break;
        //TODO - Add exit command

        case "y":
          if (set.includes(lastCommand)) {
            setLoading(true);
            router.push(route);
            setRoute("");
            setLoading(false);
          }
          break;

        case "n":
          if (set.includes(lastCommand)) {
            newMessages.push(
              "Available commands: about, projects, contact, clear, experience, and reset color",
            );
            setRoute("");
            setLastCommand("");
          }
          break;

        default:
          if (set.includes(lastCommand)) {
            newMessages.push("Please select y or n");
          } else {
            newMessages.push("Command not found. Type 'help' for options.");
          }
          break;
      }

      setMessages(newMessages);
      setInput("");
    }
  };

  return (
    <>
      <h1
        style={
          {
            "--dynamic-color": hexColor,
            "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${hexColor}, ${gradientColors.darkerColor})`,
            backgroundImage: "var(--gradient-bg)",
          } as React.CSSProperties
        }
        className="flex tems-center justify-center text-4xl font-bold py-12 text-4xl bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
      >
        Terminal
      </h1>

      <div className="bg-black">
        <div
          style={
            {
              "--dynamic-color": hexColor,
              "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${hexColor}, ${gradientColors.darkerColor})`,
              backgroundImage: "var(--gradient-bg)",
            } as React.CSSProperties
          }
          className={
            "overflow-y-auto text-dynamic font-mono p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-0 border border-dynamic transition-all bg-[length:200%_200%] duration-500 hover:bg-[#0a0a0a] hover:shadow-2xl bg-clip-text text-transparent animate-gradient-flow"
          }
        >
          <div ref={messagesEndRef}>
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <div className="flex">
            <span className="mr-2">$</span>
            <input
              ref={inputRef}
              style={
                {
                  "--dynamic-color": hexColor,
                  "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${hexColor}, ${gradientColors.darkerColor})`,
                  backgroundImage: "var(--gradient-bg)",
                } as React.CSSProperties
              }
              className="foto-mono bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow border-none outline-none text-dynamic w-full placeholder:w-full placeholder:text-dynamic placeholder:animate-gradient-flow placeholder:bg-[length:200%_200%] placeholder:bg-clip-text placeholder:text-transparent placeholder:border-none placeholder:outline-none"
              value={input}
              onBlur={handleBlur}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInput}
              autoFocus
              placeholder="Type a command..."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <button
          style={
            {
              "--dynamic-color": hexColor,
              "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${hexColor}, ${gradientColors.darkerColor})`,
              backgroundImage: "var(--gradient-bg)",
            } as React.CSSProperties
          }
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="hover:animate-pulse bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
        >
          {showColorPicker ? "Hide Color Picker" : "Show Color Picker"}
        </button>
        {showColorPicker && (
          <>
            <RgbColorPicker
              onDrag={(newColor) => setColor(newColor as unknown as RGBColor)}
              color={color}
              onChange={handleColorChange}
            />
            <button
              onClick={handleColorReset}
              style={
                {
                  "--dynamic-color": hexColor,
                  "--gradient-bg": `linear-gradient(to right, ${gradientColors.darkerColor}, ${hexColor}, ${gradientColors.darkerColor})`,
                  backgroundImage: "var(--gradient-bg)",
                } as React.CSSProperties
              }
              className="hover:animate-pulse bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
            >
              Reset Color
            </button>
          </>
        )}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Terminal;

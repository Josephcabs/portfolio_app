"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    "Welcome to my portfolio!",
    "Type 'help' to see available commands.",
  ]);
  const [lastCommand, setLastCommand] = useState("");
  const [route, setRoute] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    handleBlur();
  }, []);

  const handleBlur = () => {
    if (window.innerWidth < 768) {
      return;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      if (messages.length > 8) {
        setMessages((prevMessages) => prevMessages.slice(-7));
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
            "Available commands: about, projects, contact, clear, experience",
          );
          break;

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
            "Welcome to my portfolio! Type 'help' to see available commands.",
          );
          break;

        case "exit":
          setMessages([]);
          return;

        case "y":
          if (set.includes(lastCommand)) {
            router.push(route);
            setRoute("");
          }
          break;

        case "n":
          if (set.includes(lastCommand)) {
            newMessages.push(
              "Available commands: about, projects, contact, clear, experience",
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
    <div className="bg-black">
      <div
        className="overflow-y-auto bg-black text-red-600 font-mono p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-0 border border-red-600 transition-all duration-500 hover:shadow-2xl hover:bg-[#0a0a0a]
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
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
            className="bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow border-none outline-none text-red-600 w-full placeholder:text-red-600"
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
  );
};

export default Terminal;

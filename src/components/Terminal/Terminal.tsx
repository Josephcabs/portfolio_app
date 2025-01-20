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
    if (messages.length > 4) {
      messages.shift();
    }
  }, [messages]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const set = ["about", "projects", "contact", "experience"];
    if (e.key === "Enter") {
      const newMessages = [...messages, `> ${input}`];
      if (input.toLowerCase().trim() === "help") {
        newMessages.push(
          "Available commands: about, projects, contact, clear, experience",
        );
      } else if (input.toLowerCase().trim() === "about") {
        newMessages.push(
          "I am a full-stack developer with experience in Java and JavaScript.",
        );
        newMessages.push("Would you like to know more about me? y/n");
        setLastCommand("about");
        setRoute("about");
      } else if (
        input.toLowerCase().trim() === "y" &&
        lastCommand === "about"
      ) {
        router.push("/about");
      } else if (input.toLowerCase().trim() === "projects") {
        newMessages.push(
          "I've worked on multiple projects in group environments.",
        );
        newMessages.push("Would you like to know more about my projects? y/n");
        setLastCommand("projects");
        setRoute("projects");
      } else if (
        input.toLowerCase().trim() === "y" &&
        lastCommand === "projects"
      ) {
        router.push("/repos");
      } else if (input.toLowerCase().trim() === "contact") {
        newMessages.push("You can find me on LinkedIn");
        newMessages.push(
          "Would you like to know more about ways to connect? y/n",
        );
        setLastCommand("contact");
        setRoute("contact");
      } else if (
        lastCommand === "contact" &&
        input.toLowerCase().trim() === "y"
      ) {
        router.push("/contact");
      } else if (
        input.toLowerCase().trim() === "n" &&
        set.includes(lastCommand.toLowerCase().trim())
      ) {
        newMessages.push(
          "Available commands: about, projects, contact, clear, experience",
        );
      } else if (input.toLowerCase().trim() === "exit") {
        setMessages([]);
      } else if (input.toLowerCase().trim() === "") {
        return;
      } else if (input.toLowerCase().trim() === "clear") {
        newMessages.length = 0;
        newMessages.push(
          "Welcome to my portfolio!",
          "Type 'help' to see available commands.",
        );
      } else if (input.toLowerCase().trim() === "experience") {
        newMessages.push(
          "I have a short yet extensive experience the coding field",
        );
        newMessages.push(
          "Would you like to know more about my experience? y/n",
        );
        setLastCommand("experience");
        setRoute("experience");
      } else if (
        input.toLowerCase().trim() === "y" &&
        lastCommand === "experience"
      ) {
        router.push("/experience");
      } else if (
        (input.toLowerCase().trim() !== "n" ||
          input.toLowerCase().trim() !== "y") &&
        set.includes(lastCommand.toLowerCase().trim())
      ) {
        newMessages.push("Please select y or n");
        setLastCommand(route);
      } else {
        newMessages.push("Command not found. Type 'help' for options.");
      }
      setMessages(newMessages);
      setInput("");
    }
  };

  return (
    <div className="bg-black">
      <div
        className="overflow-y-hidden bg-black text-red-600 font-mono p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-0 border border-red-600 transition-all duration-500 hover:shadow-2xl hover:bg-[#0a0a0a]
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

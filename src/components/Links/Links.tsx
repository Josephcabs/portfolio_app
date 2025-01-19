"use client";
import { useRouter } from "next/navigation";

export default function Links() {
  const router = useRouter();
  return (
    <>
      <button
        className="relative 
    cursor-pointer 
    hover:text-[#0a0a0a]
    hover:rounded-lg
    hover:border-[#0a0a0a]
    border-2
    border-transparent
    hover:bg-[#8a0303]
    hover:text-[#8a0303]
    no-underline 
    text-[#666] 
    antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <button
        className="relative 
    cursor-pointer 
    hover:text-[#0a0a0a]
    hover:rounded-lg
    hover:border-[#0a0a0a]
    border-2
    border-transparent
    hover:bg-[#8a0303]
    hover:text-[#8a0303]
    no-underline 
    text-[#666] 
    antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow
    "
        onClick={() => router.push("/contact")}
      >
        Contact Me
      </button>
      <button
        className="relative 
    cursor-pointer 
    hover:text-[#0a0a0a]
    hover:rounded-lg
    hover:border-[#0a0a0a]
    border-2
    border-transparent
    hover:bg-[#8a0303]
    hover:text-[#8a0303]
    no-underline 
    text-[#666] 
    antialiased 
    overflow-hidden 
    duration-500 
    transition-all 
    hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
        onClick={() => router.push("/repos")}
      >
        Repositories
      </button>
    </>
  );
}

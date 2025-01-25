"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function Links() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth > 640) {
      setIsOpen(true);
    }
  }, []);
  return (
    <>
      <div
        className={`md:transition-none transition-all duration-700 ease-in-out overflow-hidden sm:flex-row flex flex-wrap items-center justify-center ${
          isOpen ? " max-h-[275px] scale-100" : " max-h-[200px] scale-95"
        } opacity-100 pt-0 md:pt-12 w-full mx-auto p-14 rounded-md gap-3 xl:gap-28 lg:gap-24 md:gap-10 `}
      >
        {isOpen && (
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
    md:hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
              onClick={() => {
                setLoading(true);
                router.push("/experience");
                setLoading(false);
              }}
            >
              Experience
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
    md:hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow
    "
              onClick={() => {
                setLoading(true);
                router.push("/contact");
                setLoading(false);
              }}
            >
              Contact
            </button>
            {/* <button
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
    md:hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
              onClick={() => router.push("/")}
            >
              Home
            </button> */}
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
    md:hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
              onClick={() => {
                setLoading(true);
                router.push("/repos");
                setLoading(false);
              }}
            >
              Repositories
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
    md:hover:px-4
    hover:bg-opacity-80 
    hover:text-opacity-100
    hover:animate-pulse
    bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
              onClick={() => {
                setLoading(true);
                router.push("/about");
                setLoading(false);
              }}
            >
              About
            </button>
          </>
        )}
        <button
          className="md:hidden flex flex-col justify-center transition-all duration-300 rounded-md bg-gradient-to-r from-[#8a0303] via-red-600 to-[#8a0303] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-flow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {loading && <Loader />}
    </>
  );
}

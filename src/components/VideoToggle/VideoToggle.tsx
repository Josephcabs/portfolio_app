'use client'

import clsx from "clsx";
import {  useEffect, useState } from "react"

export default function VideoToggle() {
    const [videoVisible, setVideoVisible] = useState(false);

    useEffect(() => {
      setVideoVisible(true); 
    }, []);

    const toggleVideo = () => {
      setVideoVisible(!videoVisible);
    };

    return (
         <>
      <button
        onClick={toggleVideo}
        className={clsx("fixed",
            {
          " bottom-[31%]" : videoVisible,
          'bottom-[0%]' : !videoVisible,
          'bg-transparent' : !videoVisible,
          'bg-red-600' : videoVisible
            } ,"left-0 z-20 px-6 py-2 rounded md:hidden hover:bg-red-600 antialiased overflow-hidden duration-500 transition-all hover:text-black hover:px-4 hover:bg-opacity-80 hover:text-opacity-100")}
      >
        {videoVisible ? "Hide Video" : "Show Video"}
      </button>
      {videoVisible && (
        <iframe
          className="fixed bottom-0 left-0 w-full md:w-[20%] h-[30%] md:h-auto z-10"
          allow="autoplay; fullscreen"
          allowFullScreen
          src="https://www.youtube.com/embed/gaOTSMB6hLQ&t=1s?autoplay=1&mute=1&loop=1&playlist=gaOTSMB6hLQ&t=1s"
        >
          Your browser does not support the video tag.
        </iframe>
      )}
         </>
         )
}

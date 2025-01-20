"use client";

import clsx from "clsx";
import { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export default function VideoToggle() {
  const [videoVisible, setVideoVisible] = useState(false);

  const toggleVideo = () => {
    setVideoVisible(!videoVisible);
  };

  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={toggleVideo}
          className={clsx(
            "fixed",
            {
              "bottom-0": !videoVisible,
              "bottom-auto": videoVisible,
              "bg-transparent": !videoVisible,
              "bg-red-600": videoVisible,
            },
            "left-0 z-20 px-6 py-2 rounded hover:bg-red-600 antialiased overflow-hidden duration-500 transition-all hover:text-black hover:px-4 hover:bg-opacity-80 hover:text-opacity-100",
          )}
        >
          {videoVisible ? "Hide Video" : "Show Video"}
        </button>
        <ResizableBox
          width={400}
          height={300}
          minConstraints={[200, 150]}
          maxConstraints={[800, 600]}
          resizeHandles={["se", "sw", "ne", "nw", "n", "s", "e", "w"]}
          className={`fixed bottom-0 ${videoVisible ? "block" : "hidden"} border-2 border-red-600 left-0 z-10`}
        >
          <iframe
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            src="https://pluto.tv/us/on-demand/movies/663421fab978550013fb596c"
          >
            Your browser does not support the video tag.
          </iframe>
        </ResizableBox>
      </div>
    </>
  );
}

"use client";

import React, { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null!);

  return (
    <section className=" w-full px-5 md:px-20 pb-10 border-t-2 border-blue-700 flex items-center flex-col gap-10">
      <div className=" w-full grid lg:grid-cols-[1fr_3fr] gap-10 pt-20 pb-5">
        <div>
          <h2 className=" text-blue-700 font-medium text-2xl text-center lg:text-start">
            A foundation built for scale and forsight
          </h2>
        </div>
        <div>
          <p className=" text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            esse eveniet excepturi ex odit impedit provident inventore
            consequuntur ullam quos, quam adipisci fuga nam cum. Doloremque
            totam mollitia placeat quis?
          </p>
        </div>
      </div>
      <div className=" w-fit h-fit flex justify-center cursor-pointer">
        <video controls width={1200} ref={videoRef}>
          <source
            src="/pexels-tunnel-motions-2759484-1920x1080-60fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;

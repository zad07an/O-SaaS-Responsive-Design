"use client";

import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  background?: string;
}

const Container: React.FC<ContainerProps> = ({ children, background }) => {
  return (
    <section
      className={` w-full min-h-screen flex items-center flex-col pt-[120px] pb-10 px-5 md:px-20 ${
        background || "bg-white"
      }`}
    >
      {children}
    </section>
  );
};

export default Container;

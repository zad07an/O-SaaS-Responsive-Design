"use client";

import React from "react";

interface OverlayProps {
  isOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  return (
    <section
      className={` w-full h-screen fixed left-0 top-0 ${
        isOpen
          ? "backdrop-blur-primary-overlay-blur bg-primary-overlay"
          : "hidden"
      } z-10`}
    ></section>
  );
};

export default Overlay;

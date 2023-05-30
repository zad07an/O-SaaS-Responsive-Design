"use client";

import React from "react";
import { Twirl as Hamburger } from "hamburger-react";

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className=" md:hidden flex items-center">
      <button className=" text-white">
        <Hamburger size={28} toggled={isOpen} onToggle={onToggle} />
      </button>
    </div>
  );
};

export default HamburgerMenu;

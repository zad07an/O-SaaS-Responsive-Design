"use client";

import React, { ReactNode } from "react";

interface NavMenuProps {
  isOpen: boolean;
  children: ReactNode;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, children }) => {
  return (
    <ul
      className={` ${
        isOpen ? "left-0" : "left-[-100%]"
      } md:h-auto h-screen bg-inherit absolute md:static right-0 top-[60px] w-fit md:w-full md:flex items-center justify-center gap-5 z-50 transition-all duration-500 md:shadow-none shadow-md`}
    >
      {children}
    </ul>
  );
};

export default NavMenu;

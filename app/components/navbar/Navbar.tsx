"use client";

import { navbarDB } from "@/app/data/navbar-db";
import Link from "next/link";
import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import useScrollHide from "@/app/hooks/useScrollHide";
import useDynamicNavbar from "@/app/hooks/useDynamicNavbar";
import Overlay from "../ui/overlay/Overlay";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const dynamicNav = useDynamicNavbar();

  const handleToggleMenu = (): void => setMenuIsOpen((prev) => !prev);

  useScrollHide(menuIsOpen);

  return (
    <>
      <Overlay isOpen={menuIsOpen} />
      <nav
        className={` ${
          dynamicNav ? "h-[60px] shadow-md" : "h-[60px] md:h-[80px]"
        } w-full fixed flex items-center justify-between bg-primary-purple px-5 md:px-20 z-50 transition-all duration-300`}
      >
        <div className=" flex items-center gap-6 bg-inherit">
          <HamburgerMenu isOpen={menuIsOpen} onToggle={handleToggleMenu} />
          <Link href="/">
            <div className=" w-8 h-8 border-[7px] border-white bg-transparent rounded-full"></div>
          </Link>
          <NavMenu isOpen={menuIsOpen}>
            {navbarDB?.map((link, index) => {
              return (
                <NavigationLink
                  key={index}
                  linkPathname={link.pathname}
                  linkPath={link.path}
                />
              );
            })}
          </NavMenu>
        </div>
        <div>
          <button className=" px-7 py-1.5 md:px-8 md:py-1.5 border-2 border-white rounded-full text-white text-sm md:text-base bg-transparent hover:bg-white hover:text-black transition uppercase font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

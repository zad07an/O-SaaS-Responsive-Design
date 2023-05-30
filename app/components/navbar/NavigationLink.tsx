"use client";

import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface NavigationLinkProps {
  linkPathname: string;
  linkPath: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  linkPathname,
  linkPath,
}) => {
  return (
    <li className=" md:w-fit md:h-fit w-full flex items-center flex-col">
      <Link
        href={linkPath}
        className=" w-full h-12 md:p-0 pl-4 pr-10 flex items-center gap-2 text-white transition"
      >
        {linkPathname}
      </Link>
    </li>
  );
};

export default NavigationLink;

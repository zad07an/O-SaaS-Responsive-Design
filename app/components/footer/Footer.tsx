"use client";

import { footerDB } from "@/app/data/footer-data";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" w-full px-5 md:px-20 py-10 flex items-center flex-col border-t border-gray-400">
      <div className=" w-full text-start">
        <Link href="/" className=" w-fit flex items-center gap-2">
          <div className=" w-8 h-8 border-[7px] border-gray-600 bg-transparent rounded-full"></div>
          <span className=" text-gray-400 font-semibold text-lg border-b-2 border-[#BF69D5]">
            {" "}
            O-SaaS
          </span>
        </Link>
      </div>
      <div className=" w-full grid md:grid-cols-3 gap-8 mt-8">
        <div className=" flex flex-col items-start gap-6">
          <div>
            <div>
              <p className=" uppercase font-medium text-blue-700">VANCOUVER</p>
            </div>
            <div className=" flex items-start flex-col mt-6">
              <p className=" text-sm text-gray-500">
                400-401 West Georgia Street Vancouver, BC, Canada, V6B 5A1
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className=" uppercase font-medium text-blue-700">BERLIN</p>
            </div>
            <div className=" flex items-start flex-col mt-6">
              <p className=" text-sm text-gray-500">
                Friedrichstraße 68 10117 Berlin, Germany
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-6">
          <div>
            <div>
              <p className=" uppercase font-medium text-blue-700">
                FOLLOW US ON
              </p>
            </div>
            <div className=" flex items-start md:flex-col gap-4 md:gap-1 mt-6">
              {footerDB?.map((item) => {
                return (
                  <a
                    href={item?.path}
                    key={item?.id}
                    className=" text-sm text-gray-500"
                  >
                    {item?.pathname}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-6">
          <div>
            <div>
              <p className=" uppercase font-medium text-blue-700">ABOUT US</p>
            </div>
            <div className=" flex items-start flex-col mt-6">
              <p className=" text-sm text-gray-500">
                Since 2009, Unbounce has helped marketers and digital agencies
                increase website and campaign conversions.
              </p>
            </div>
            <div className=" flex items-start flex-col mt-6">
              <p className=" text-sm text-gray-500">
                © 2018 Insert Name Here. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

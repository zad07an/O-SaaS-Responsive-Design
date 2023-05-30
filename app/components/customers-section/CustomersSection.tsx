"use client";

import { customersDB } from "@/app/data/customers-data";
import Image from "next/legacy/image";
import React from "react";

const CustomersSection: React.FC = () => {
  return (
    <section className=" w-full px-5 md:px-20 flex items-center flex-col bg-gradient-to-b from-[#FFCA9C] to-[#EC69B7] pt-10 pb-20">
      <div>
        <h2 className=" text-sm text-center uppercase text-gray-600 font-semibold">
          TRUSTED BY 250,000 HAPPY CUSTOMERS WORLDWIDE
        </h2>
      </div>
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {customersDB?.map((item, index) => {
          return (
            <div key={item?.id} className=" flex items-center justify-center">
              <Image
                src={item?.image}
                alt={`Customer ${index + 1}`}
                width={150}
                height={50}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomersSection;

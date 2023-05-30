"use client";

import { analyticDB } from "@/app/data/analytic-data";
import Image from "next/legacy/image";
import React from "react";

const AnalyticSection: React.FC = () => {
  return (
    <section className=" w-full px-5 md:px-20 py-10 grid lg:grid-cols-2 gap-10">
      <div className=" h-fit flex justify-center">
        <Image
          src="/images/image1.svg"
          alt="Analytic Image"
          width={450}
          height={650}
        />
      </div>
      <div>
        <div className=" flex items-center flex-col gap-5 text-center md:text-start">
          <h2 className=" text-3xl sm:text-4xl text-blue-700 font-medium">
            Product analytics answers your questions
          </h2>
          <p className=" text-sm sm:text-base text-gray-500">
            Maecenas varius nunc a odio ultrices, non consectetur nunc
            scelerisque. Mauris nec condimentum est, id eleifend orci.
          </p>
        </div>
        <div>
          {analyticDB?.map((item, index) => {
            return (
              <div
                key={item?.id}
                className="w-full grid md:grid-cols-[60px_1fr] gap-2 mt-8 p-6 shadow-[-2px_2px_5px_#ddd]"
              >
                <div>
                  <Image
                    src={item?.icon}
                    alt={`Icon ${index + 1}`}
                    width={46}
                    height={46}
                  />
                </div>
                <div className=" pt-2">
                  <div>
                    <h3 className=" text-blue-800 text-xl">{item?.title}</h3>
                  </div>
                  <div className=" mt-2">
                    <p className=" text-sm text-gray-500">{item?.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnalyticSection;

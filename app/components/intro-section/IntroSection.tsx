import React from "react";
import { introDB } from "@/app/data/intro-data";
import Image from "next/legacy/image";

const IntroSection = () => {
  return (
    <section className=" w-full flex justify-center px-5 md:px-20 pt-10 pb-20">
      <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {introDB?.map((item, index) => {
          return (
            <div
              key={item?.id}
              className=" flex items-center flex-col gap-5 p-10 shadow-[2px_2px_5px_#ddd]"
            >
              <div>
                <Image
                  src={item?.icon}
                  alt={`Icon ${index + 1}`}
                  width={46}
                  height={46}
                />
              </div>
              <div>
                <h2 className=" text-blue-700 font-medium text-center md:text-start text-lg">
                  {item?.title}
                </h2>
              </div>
              <div>
                <p className=" text-gray-500 text-center md:text-start">
                  {item?.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IntroSection;

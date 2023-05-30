import { pricingDB } from "@/app/data/pricing-data";
import Image from "next/legacy/image";
import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section className=" w-full px-5 md:px-20 py-10 flex items-center flex-col">
      <div>
        <div className=" flex items-center flex-col md:text-start text-center">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-medium text-blue-700 ">
            The Pricing Plan
          </h2>
          <p className=" text-sm sm:text-base text-gray-500 mt-5">
            The most powerful analytics to understand how people use your app or
            website. Choose from any of our pricing plans that work to fit you
            as you grow.
          </p>
        </div>
        <div className=" w-full mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20">
          {pricingDB?.map((item, index) => {
            return (
              <div
                key={item?.id}
                className={` ${
                  index === 1
                    ? "bg-gradient-to-b from-[#3224AE] to-[#C66CD7]"
                    : ""
                } border-4 rounded-md border-blue-800 p-10 flex items-center justify-between flex-col gap-10`}
              >
                <div>
                  <p className=" text-sm text-gray-400 font-medium">
                    {item?.status}
                  </p>
                </div>
                <div>
                  <Image
                    src={item?.image}
                    alt={`Image ${index + 1}`}
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <p
                    className={` text-3xl ${
                      index === 1 ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item?.price}
                    <span className=" text-sm">/mo</span>
                  </p>
                </div>
                <div>
                  <p
                    className={` text-sm text-center ${
                      index === 1 ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item?.body}
                  </p>
                </div>
                <div>
                  <button
                    className={` ${
                      index === 1
                        ? " shadow-md"
                        : " border-2 border-gray-400 hover:border-[#BF69D5]"
                    } uppercase px-10 py-2 bg-white text-sm text-[#BF69D5] font-medium hover:bg-[#BF69D5] hover:text-white transition-all`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

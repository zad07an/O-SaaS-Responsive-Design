import Image from "next/legacy/image";
import Container from "./components/ui/containers/Container";
import React from "react";
import IntroSection from "./components/intro-section/IntroSection";
import VideoSection from "./components/video-section/VideoSection";
import AnalyticSection from "./components/analytic-section/AnalyticSection";
import { NextPage } from "next";
import CustomersSection from "./components/customers-section/CustomersSection";
import PricingSection from "./components/pricing-section/PricingSection";

const Home: NextPage = () => {
  return (
    <>
      <Container background="bg-primary-purple">
        <div className=" w-full grid md:grid-cols-2 gap-20 pt-10">
          <div className=" flex flex-col items-start gap-5">
            <div>
              <h1 className=" text-white text-4xl md:text-5xl lg:text-6xl font-semibold">
                Success starts <br /> with a great product
              </h1>
            </div>
            <div>
              <p className=" text-white">
                Morbi leo tortor, fermentum sed orci vitae, tempor auctor
                turpis. Fusce bibendum accumsan fringilla. Nulla aliquam luctus
                sem, at posuere nibh lobortis et.
              </p>
            </div>
            <div>
              <button className=" px-10 py-2 border-2 border-white text-white hover:text-black hover:bg-white transition-all rounded-full">
                Start Product
              </button>
            </div>
          </div>
          <div className=" flex justify-center">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
      <IntroSection />
      <VideoSection />
      <AnalyticSection />
      <CustomersSection />
      <PricingSection />
    </>
  );
};

export default Home;

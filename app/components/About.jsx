"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutBg from "@/public/assets/bg-pattern-about-1-mobile-nav-1.svg";
import directorsBg1 from "@/public/assets/bg-pattern-about-2-contact-1.svg";
import directorsBg2 from "@/public/assets/bg-pattern-home-4-about-3.svg";

import DirectorBoxes from "./DirectorBoxes";
import ClientsSection from "./ClientsSection";
import Cta from "./Cta";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center min-w-full">
      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:py-[12rem] py-[8rem] md:px-[8rem] px-[6rem] max-w-[120rem] min-[1033px]:grid min-[1033px]:grid-cols-2 min-[1033px]:items-start flex flex-col lg:text-left text-left gap-[3rem] lg:min-h-screen min-h-[85vh]"
        >
          <motion.div className="hero__heading__box">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:text-[6rem] md:text-[5rem] text-[4rem] font-[700] lg:leading-[6rem] md:leading-[5rem] leading-[4rem]"
            >
              About
            </motion.h1>
          </motion.div>
          <motion.div className="flex flex-col gap-[4rem]">
            <div className="w-[5rem] h-[0.4rem] bg-[#f67e7e] hidden lg:block"></div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:text-[1.5rem] md:text-[1.4rem] text-[1.4rem] leading-[2.8rem] md:font-[600] font-[500]"
            >
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </motion.p>
          </motion.div>
          <Image
            src={aboutBg}
            alt="bg"
            className="absolute bottom-0 md:scale-0 scale-[-80%] z-[-1] md:right-[-6%] right-[-15%]"
          />
        </motion.div>
      </section>
      {/* Directors Section */}
      <article className="bg-[#004047] relative min-w-full">
        <div className="flex flex-col gap-[6.4rem] py-[14rem] md:px-[8rem] px-[6rem] text-center w-full">
          <h2 className="lg:text-[6rem] md:text-[5rem] text-[4rem] font-[700] lg:leading-[6rem] md:leading-[5rem] leading-[4rem]">
            Meet the directors
          </h2>
          <DirectorBoxes />
          <Image
            src={directorsBg1}
            alt="bg"
            className="absolute top-0 left-[-6.5%]"
          />
          <Image
            src={directorsBg2}
            alt="bg"
            className="absolute bottom-0 right-0"
          />
        </div>
      </article>
      {/* Clients Section */}
      <ClientsSection />
      {/* CTA */}
      <Cta />
    </div>
  );
};

export default About;

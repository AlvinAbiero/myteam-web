"use client";
import BgPattern1 from "@/public/assets/bg-pattern-home-1.svg";
import BgPattern2 from "@/public/assets/bg-pattern-home-2.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <motion.div
        className="min-[1033px]:grid min-[1033px]:grid-cols-2 flex flex-col space-y-12 justify-center lg:gap-4 w-full max-w-[120rem] md:min-h-screen lg:text-left text-center  flex-wrap lg:p-16 md:p-12 px-12 py-24"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="flex flex-col lg:justify-center lg:px-4">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:text-[6rem] md:text-[5rem] text-[3rem] font-[700] lg:leading-[6rem] md:leading-[5rem] leading-[4rem]"
          >
            Find the best <span className="text-[#f67e7e]">talent</span>
          </motion.h1>
        </motion.div>
        <motion.div className="flex flex-col lg:space-y-12 lg:justify-center">
          <div className="w-[5rem] h-[0.4rem] bg-[#79c8c7] hidden lg:block"></div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:text-[1.5rem] md:text-[1.4rem] text-[1.4rem] leading-[2.8rem] md:font-[600] font-[400]"
          >
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </motion.p>
        </motion.div>
        <Image
          src={BgPattern1}
          alt="home-bg-1"
          className="absolute hidden z-[-1] xl:block lg:hidden top-[50%] lg:left-[-10%] md:left-[-24%] transform translate-y-[-50%]"
        />
        <Image
          src={BgPattern2}
          alt="home-bg-2"
          className="absolute z-[-1] bottom-0 right-[12%] lg:scale-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

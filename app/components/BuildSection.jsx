"use client";

import Image from "next/image";
import iconPerson from "@/public/assets/icon-person.svg";
import iconCog from "@/public/assets/icon-cog.svg";
import iconChart from "@/public/assets/icon-chart.svg";
import bgPattern from "@/public/assets/bg-pattern-home-3.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenTop: { opacity: 0, y: -50 },
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const BuildSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.section
      ref={ref}
      className="bg-[#012f34] relative"
      variants={variants}
      initial="hiddenLeft"
      animate={inView ? "visible" : "hiddenLeft"}
      transition={{ duration: 0.8 }}
    >
      <div className="min-[1033px]:grid min-[1033px]:grid-cols-2 flex flex-col space-y-12 justify-center lg:gap-4 w-full max-w-[120rem] min-h-screen lg:text-left text-center md:p-12 flex-wrap lg:px-[8rem] md:px-[6rem] px-[4rem] lg:py-[14rem] md:py-[10rem] py-[8rem]">
        <motion.div
          variants={variants}
          initial="hiddenTop"
          animate={inView ? "visible" : "hiddenTop"}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:gap-[5.4rem] gap-[3rem] md:pr-0 pr-8"
        >
          <div className="w-[5rem] bg-[#f67e7e] h-[0.4rem]"></div>
          <h2 className="lg:text-[5rem] text-[2.75rem] font-bold lg:leading-[5rem] leading-[3rem] text-left w-2/3 md:w-full max-w-[44.5rem]">
            Build & manage distributed teams like no one else.
          </h2>
        </motion.div>
        <div className="flex flex-col gap-[3.2rem] lg:justify-around">
          <motion.div
            variants={variants}
            initial="hiddenLeft"
            animate={inView ? "visible" : "hiddenLeft"}
            transition={{ duration: 0.8 }}
            className="flex items-center lg:flex-row flex-col gap-[3.2rem]"
          >
            <Image
              src={iconPerson}
              alt="person icon"
              className="w-[7.2rem] h-[7.2rem]"
            />
            <div className="flex flex-col gap-[1rem]">
              <h3 className="md:text-[1.8rem] text-[1.4rem] text-[#f67e7e] font-semibold leading-[2.5rem]">
                Experienced Individuals
              </h3>
              <p className="md:text-[1.5rem] text-[1.35rem] font-medium leading-8 opacity-80">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hiddenTop"
            animate={inView ? "visible" : "hiddenTop"}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center lg:flex-row flex-col gap-[3.2rem]"
          >
            <Image
              src={iconCog}
              alt="cog icon"
              className="w-[7.2rem] h-[7.2rem]"
            />
            <div className="flex flex-col gap-[1rem]">
              <h3 className="md:text-[1.8rem] text-[1.4rem] text-[#f67e7e] font-semibold leading-[2.5rem]">
                Easy to Implement
              </h3>
              <p className="md:text-[1.5rem] text-[1.35rem] font-medium leading-8 opacity-80">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hiddenBottom"
            animate={inView ? "visible" : "hiddenBottom"}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center lg:flex-row flex-col gap-[3.2rem]"
          >
            <Image
              src={iconChart}
              alt="chart icon"
              className="w-[7.2rem] h-[7.2rem]"
            />
            <div className="flex flex-col gap-[1rem]">
              <h3 className="md:text-[1.8rem] text-[1.4rem] text-[#f67e7e] font-semibold leading-[2.5rem]">
                Enhanced Productivity
              </h3>
              <p className="md:text-[1.5rem] text-[1.35rem] font-medium leading-8 opacity-80">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </motion.div>
        </div>
        <Image
          src={bgPattern}
          alt="build bg"
          className="absolute md:bottom-0 top-[5%] md:right-[-6.5%] right-[-7%]"
        />
      </div>
    </motion.section>
  );
};

export default BuildSection;

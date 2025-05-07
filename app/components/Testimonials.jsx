"use client";

import Image from "next/image";
import avatarKady from "@/public/assets/avatar-kady.jpg";
import iconQuotes from "@/public/assets/icon-quotes.svg";
import avatarAiysha from "@/public/assets/avatar-aiysha.jpg";
import avatarArthur from "@/public/assets/avatar-arthur.jpg";
import bgPattern4 from "@/public/assets/bg-pattern-home-4-about-3.svg";
import bgPattern5 from "@/public/assets/bg-pattern-home-5.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="flex flex-col items-center justify-center text-center gap-[9.2rem] py-[10rem] md:px-[8rem] px-[5rem] max-w-[120rem] my-0 mx-auto">
        <h2 className="lg:text-[5rem] text-[2.75rem] font-bold lg:leading-[5rem] leading-[3rem] text-left md:w-full md:text-center">
          Delivering real results for top companies. Some of our
          <span className="text-[#79c8c7]"> success stories.</span>
        </h2>
        <div className="min-[1033px]:grid min-[1033px]:grid-cols-3 min-[1033px]:gap-[3rem] flex flex-col items-center gap-[8rem]">
          <div className="relative flex flex-col gap-[2.4rem] items-center">
            <p className="md:text-[1.5rem] text-[1.3rem] font-semibold leading-[2.5rem]">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <div className="flex flex-col">
              <p className="text-[#79c8c7] md:text-[1.8rem] text-[1.5rem] leading-[2.8rem] font-bold">
                Kady Baker
              </p>
              <p className="italic text-[1.3rem] font-[500] leading-[1.8rem]">
                Product Manager at Bookmark
              </p>
            </div>
            <div className="delivering__img__box">
              <Image
                src={avatarKady}
                alt="user image"
                className="h-[6.2rem] w-[6.2rem] rounded-[6.2rem] border-[2px] border-solid border-[#c4fffe]"
              />
            </div>
            <Image
              src={iconQuotes}
              alt="quote img"
              className="absolute top-[-15%] transform translate-x-[-50%] z-[-1]"
            />
          </div>
          <div className="relative flex flex-col gap-[2.4rem] items-center">
            <p className="md:text-[1.5rem] text-[1.3rem]  font-semibold leading-[2.5rem]">
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <div className="flex flex-col">
              <p className="text-[#79c8c7] md:text-[1.8rem] text-[1.5rem] leading-[2.8rem] font-bold">
                Aiysha Reese
              </p>
              <p className="italic text-[1.3rem] font-[500] leading-[1.8rem]">
                Founder of Manage
              </p>
            </div>
            <div className="delivering__img__box">
              <Image
                src={avatarAiysha}
                alt="user image"
                className="h-[6.2rem] w-[6.2rem] rounded-[6.2rem] border-[2px] border-solid border-[#c4fffe]"
              />
            </div>
            <Image
              src={iconQuotes}
              alt="quote img"
              className="absolute top-[-15%] transform translate-x-[-50%] z-[-1]"
            />
          </div>
          <div className="relative flex flex-col gap-[2.4rem] items-center">
            <p className="md:text-[1.5rem] text-[1.3rem]  font-semibold leading-[2.5rem]">
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <div className="flex flex-col">
              <p className="text-[#79c8c7] md:text-[1.8rem] text-[1.5rem] leading-[2.8rem] font-bold">
                Arthur Clarke
              </p>
              <p className="italic text-[1.3rem] font-[500] leading-[1.8rem]">
                Co-founder of MyPhysio
              </p>
            </div>
            <div className="delivering__img__box">
              <Image
                src={avatarArthur}
                alt="user image"
                className="h-[6.2rem] w-[6.2rem] rounded-[6.2rem] border-[2px] border-solid border-[#c4fffe]"
              />
            </div>
            <Image
              src={iconQuotes}
              alt="quote img"
              className="absolute top-[-15%] transform translate-x-[-50%] z-[-1]"
            />
          </div>
        </div>
        <Image src={bgPattern4} alt="bg 1" className="absolute top-0 left-0" />
        <Image
          src={bgPattern5}
          alt="bg 1"
          className="absolute bottom-0 right-0"
        />
      </div>
    </motion.section>
  );
};

export default Testimonials;

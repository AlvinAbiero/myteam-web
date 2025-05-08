"use client";

import Link from "next/link";
import Image from "next/image";
import ctaBG from "@/public/assets/bg-pattern-home-6-about-5.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Cta = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "hidden" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-[#f67e7e] flex items-center flex-col lg:flex-row justify-around  p-[8rem] relative w-full gap-12"
    >
      <h2 className="lg:text-[4rem] text-[2.75rem] font-bold lg:leading-[5rem] leading-[3rem]  text-[#012f34]">
        Ready to get started?
      </h2>
      <Link
        href="/contact"
        className="text-[1.8rem] text-[#012f34] hover:text-[var(--text)]  hover:bg-[#012f34] font-[600] rounded-[2.4rem] border-[2px] lg:rounded-full border-[#012f34] border-solid py-4 px-12 lg:py-5 lg:px-12  text-center"
      >
        {" "}
        contact us
      </Link>
      <Image src={ctaBG} alt="bg" className="absolute bottom-0 left-0" />
    </motion.section>
  );
};

export default Cta;

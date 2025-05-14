"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import logoVerge from "@/public/assets/logo-the-verge.png";
import logoJakarta from "@/public/assets/logo-jakarta-post.png";
import logoGuardian from "@/public/assets/logo-the-guardian.png";
import logoTech from "@/public/assets/logo-tech-radar.png";
import logoGadgets from "@/public/assets/logo-gadgets-now.png";
import bgPattern4 from "@/public/assets/bg-pattern-about-4.svg";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const ClientsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const clientLogos = [
    { src: logoVerge, alt: "The Verge logo" },
    { src: logoJakarta, alt: "Jakarta Post logo" },
    { src: logoGuardian, alt: "The Guardian logo" },
    { src: logoTech, alt: "Tech Radar logo" },
    { src: logoGadgets, alt: "Gadgets Now logo" },
  ];

  // Duplicate the logos array for seamless looping
  const allLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {
    // Set isMounted to true when component mounts on client-side
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run animation on desktop screens and after component is mounted
    if (!isMounted) return;

    let animation = null;

    const handleAnimation = () => {
      if (
        typeof window !== "undefined" &&
        window.innerWidth >= 768 &&
        scrollRef.current
      ) {
        try {
          // Make sure the previous animation is canceled
          if (animation) {
            animation.cancel();
          }

          animation = scrollRef.current.animate(
            [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
            {
              duration: 20000,
              iterations: Infinity,
              easing: "linear",
            }
          );

          return animation;
        } catch (error) {
          console.error("Animation error:", error);
          return null;
        }
      }
      return null;
    };

    animation = handleAnimation();

    // Pause animation when tab is not visible to save resources
    const handleVisibilityChange = () => {
      if (document.hidden && animation) {
        animation.pause();
      } else if (animation) {
        animation.play();
      }
    };

    // Recalculate on resize
    const handleResize = () => {
      if (animation) {
        animation.cancel();
      }
      animation = handleAnimation();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animation) {
        animation.cancel();
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMounted]); // Depend on isMounted to ensure DOM is ready

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 1, delay: 0.3 }}
      className="bg-[#012f34] relative w-full overflow-hidden"
    >
      <div className="py-32 md:py-48 px-12 md:px-16 my-0 mx-auto">
        <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center text-white">
          Some of our clients
        </h2>

        {/* Mobile layout - static grid */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="w-auto h-full object-contain"
                width={150}
                height={60}
                style={{ maxWidth: "100%", height: "80%" }}
                priority={index < 3} // Prioritize loading the first few logos
              />
            </div>
          ))}
        </div>

        {/* Desktop layout - infinite scroll */}
        <div className="hidden md:block">
          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-center gap-16 w-fit"
              style={{ minWidth: "200%" }} // Ensure container is wide enough for animation
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 md:h-32"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto h-full object-contain"
                    width={150}
                    height={60}
                    style={{ maxWidth: "100%", height: "auto" }}
                    priority={index < 5} // Prioritize loading the first set of logos
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src={bgPattern4}
        alt="Background pattern"
        className="absolute lg:top-0 lg:left-[-5%] md:top-0 md:left-[-15%] bottom-0 left-[-10%]"
        priority
      />
    </motion.section>
  );
};

export default ClientsSection;

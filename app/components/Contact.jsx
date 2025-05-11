"use client";
import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center min-w-full">
      <section className="relative min-w-full">
        <div className="min-[1033px]:grid min-[1033px]:grid-cols-2 lg:px-[8rem] lg:py-[13rem] lg:items-center flex flex-col gap-[4.5rem]  md:px-[6rem] px-[4rem] md:py-[10rem] py-[8rem]">
          <ContactHero />
          <ContactForm />
          <img
            src="assets/bg-pattern-contact-2.svg"
            alt="contact bg"
            className="absolute lg:bottom-0 lg:right-[-6.5%] hidden"
          />
          <img
            src="assets/bg-pattern-about-2-contact-1.svg"
            alt="contact bg"
            className="absolute lg:top-[20%] lg:left-[-6.5%] hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const onSubmit = () => {
    toast.success("Your message has been sent!");
    reset();
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-[2.4rem]"
    >
      <motion.div
        variants={inputVariants}
        className="flex flex-col gap-[0.8rem]"
      >
        <input
          type="text"
          className="name__input outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white text-[1.4rem] text-white/50 font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] px-4 py-8 focus:border-solid"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            validate: (value) => {
              const trimmedValue = value.trim();
              if (/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Name must be at least 3 characters";
              } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Name must consist of only letters";
              }
              return true;
            },
          })}
        />
        {errors.name && (
          <p className="text-[#f67e7e] italic text-sm font-bold">
            {errors.name.message}
          </p>
        )}
      </motion.div>
      <motion.div
        variants={inputVariants}
        className="flex flex-col gap-[0.8rem]"
      >
        <input
          type="text"
          className="email_input outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white text-[1.4rem] text-white/50 font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] px-4 py-8 focus:border-solid"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-[#f67e7e] italic text-sm font-bold">
            {errors.email.message}
          </p>
        )}
      </motion.div>

      <motion.div
        variants={inputVariants}
        className="flex flex-col gap-[0.8rem]"
      >
        <input
          type="text"
          className="company__input outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white text-[1.4rem] text-white/50 font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] px-4 py-8 focus:border-solid"
          placeholder="Company Name"
          {...register("company", {
            required: "Company Name is required",
            minLength: {
              value: 3,
              message: "Company Name must be at least 3 characters",
            },
            validate: (value) => {
              const trimmedValue = value.trim();
              if (/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Company Name must be at least 3 characters";
              } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Company Name must consist of only letters";
              }
              return true;
            },
          })}
        />
        {errors.name && (
          <p className="text-[#f67e7e] italic text-sm font-bold">
            {errors.company.message}
          </p>
        )}
      </motion.div>
      <motion.div
        variants={inputVariants}
        className="flex flex-col gap-[0.8rem]"
      >
        <input
          type="text"
          className="title__input outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white text-[1.4rem] text-white/50 font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] px-4 py-8 focus:border-solid"
          placeholder="Title"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            validate: (value) => {
              const trimmedValue = value.trim();
              if (/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Title must be at least 3 characters";
              } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
                return "Title must consist of only letters";
              }
              return true;
            },
          })}
        />
        {errors.name && (
          <p className="text-[#f67e7e] italic text-sm font-bold">
            {errors.title.message}
          </p>
        )}
      </motion.div>

      <motion.div
        variants={inputVariants}
        className="flex flex-col gap-[0.8rem]"
      >
        <textarea
          type="text"
          className="resize-none outline-none  bg-transparent border-b-[0.1rem] border-b-solid border-b-white text-[1.4rem] text-white/50 font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] px-4 py-12 focus:border-solid"
          rows="3"
          placeholder="Message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
            validate: (value) => {
              const trimmedValue = value.trim();
              if (trimmedValue.length < 10) {
                return "Message must be at least 10 characters long";
              }
              return true;
            },
          })}
        />
        {errors.message && (
          <p className="text-[#f67e7e] italic text-sm font-bold">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      <button
        type="submit"
        className="self-start outline-none bg-white rounded-[2.4rem] border-[2px] border-white py-[0.8rem] px-[3rem] text-[1.8rem] font-semibold leading-[2.8rem] block text-[#004047] cursor-pointer"
      >
        submit
      </button>
    </motion.form>
  );
};

export default ContactForm;

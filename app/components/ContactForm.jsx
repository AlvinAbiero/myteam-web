"use client";

import { useState } from "react";

const ContactForm = () => {
  const [error, setError] = useState(false);
  return (
    <form action="" className="flex flex-col gap-[2.4rem]">
      <div className="flex flex-col gap-[0.8rem]">
        <input
          type="text"
          className="name__input outline-none border-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white placeholder:text-[1.5rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-60 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] py-4 focus:border-solid"
          placeholder="Name"
        />
        <p
          className={
            error
              ? "block text-[#f67e7e] italic text-[1rem] font-bold"
              : "hidden"
          }
        >
          This field is required
        </p>
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <input
          type="email"
          className="email__input outline-none border-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white placeholder:text-[1.5rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-60 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] py-4 focus:border-solid"
          placeholder="Email Address"
        />
        <p
          className={
            error
              ? "block text-[#f67e7e] italic text-[1rem] font-bold"
              : "hidden"
          }
        >
          This field is required
        </p>
      </div>

      <div className="flex flex-col gap-[0.8rem]">
        <input
          type="text"
          className="company__input outline-none border-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white placeholder:text-[1.5rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-60 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] py-4 focus:border-solid"
          placeholder="Company Name"
        />
        <p
          className={
            error
              ? "block text-[#f67e7e] italic text-[1rem] font-bold"
              : "hidden"
          }
        >
          This field is required
        </p>
      </div>

      <div className="flex flex-col gap-[0.8rem]">
        <input
          type="text"
          className="title__input outline-none border-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white placeholder:text-[1.5rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-60 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] py-4 focus:border-solid"
          placeholder="Title"
        />
        <p
          className={
            error
              ? "block text-[#f67e7e] italic text-[1rem] font-bold"
              : "hidden"
          }
        >
          This field is required
        </p>
      </div>

      <div className="flex flex-col gap-[0.8rem]">
        <textarea
          className="resize-none outline-none border-none bg-transparent border-b-[0.1rem] border-b-solid border-b-white placeholder:text-[1.5rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-60 placeholder:w-full placeholder:text-white focus:border-b-[#79c8c7] focus:border-b-[0.1rem] py-4 focus:border-solid"
          rows="3"
          placeholder="Message"
        ></textarea>
        <p
          className={
            error
              ? "block text-[#f67e7e] italic text-[1rem] font-bold"
              : "hidden"
          }
        >
          This field is required
        </p>
      </div>

      <button
        type="submit"
        className="place-items-start outline-none bg-white rounded-[2.4rem] border-[2px] border-white py-[0.8rem] px-[3rem] text-[1.8rem] font-semibold leading-[2.8rem] block text-[#004047]"
      >
        submit
      </button>
    </form>
  );
};

export default ContactForm;

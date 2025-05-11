"use client";

const ContactHero = () => {
  return (
    <div className="flex flex-col gap-[1.6rem] md:items-center lg:items-start">
      <h1 className="text-[6.4rem] leading-[10rem] font-bold md:text-left text-center">
        Contact
      </h1>
      <h2 className="text-[3.2rem] leading-[4.8rem] font-bold text-[#f67e7e] md:text-left text-center">
        Ask us about
      </h2>
      <div className="flex flex-col gap-[0.8rem] mt-[1.6rem]">
        <div className="flex md:flex-row flex-col text-center items-center gap-[2.3rem]">
          <img
            src="assets/icon-person.svg"
            alt="contact img"
            className="w-[7.2rem] h-[7.2rem]"
          />
          <p className="md:text-[1.8rem] text-[1.5rem] md:font-bold font-[600] md:leading-[2.8rem] leading-[2.4rem]">
            The quality of our talent network
          </p>
        </div>
        <div className="flex md:flex-row flex-col text-center items-center gap-[2.3rem]">
          <img
            src="assets/icon-cog.svg"
            alt="contact img"
            className="w-[7.2rem] h-[7.2rem]"
          />
          <p className="md:text-[1.8rem] text-[1.5rem] md:font-bold font-[600] md:leading-[2.8rem] leading-[2.4rem]">
            Usage & implementation of our software
          </p>
        </div>
        <div className="flex md:flex-row flex-col text-center items-center gap-[2.3rem]">
          <img
            src="assets/icon-chart.svg"
            alt="contact img"
            className="w-[7.2rem] h-[7.2rem]"
          />
          <p className="md:text-[1.8rem] text-[1.5rem] md:font-bold font-[600] md:leading-[2.8rem] leading-[2.4rem]">
            How we help drive innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

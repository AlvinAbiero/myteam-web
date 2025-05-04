import BgPattern1 from "@/public/assets/bg-pattern-home-1.svg";
import BgPattern2 from "@/public/assets/bg-pattern-home-2.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="lg:pt-[14rem] lg:pr-[8rem] lg:pb-[25rem] grid lg:grid-cols-2 grid-cols-1 w-full md:max-w-7xl my-0 md:mx-auto">
        <div className="flex flex-col gap-[5.4rem]">
          <h1 className="lg:text-[6rem] text-[4rem] font-[700] lg:leading-[10rem] leading-[4rem]">
            Find the best <span class="text-[#f67e7e]">talent</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[5rem] h-[0.4rem] bg-[#79c8c7]"></div>
          <p className="md:text-[1.8rem] text-[1.4rem] leading-[2.8rem] font-[600]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <Image
        src={BgPattern1}
        alt="home bg 1"
        className="absolute hidden z-[-1] md:block top-[50%] lg:left-[-10%] md:left-[-24%] transform translate-y-[-50%]"
      />
      <Image
        src={BgPattern2}
        alt="home bg 2"
        className="absolute z-[-1] bottom-0 right-[12%]"
      />
    </div>
  );
};

export default Hero;

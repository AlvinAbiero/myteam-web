import React from "react";

const DirectorBox = ({director, expanded, onToggle}) => {
  return ( 
    <div className="bg-[#012f34] py-16 px-8 w-full relative overflow-visible pb-8">
      <div
        className={`transition-all duration-500 ease-in-out ${
          expanded ? "opacity-0 absolute top-0 left-0 right-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <img
            src={director.avatar}
            alt={`${director.name} portrait`}
            className="h-32 w-32 rounded-full border-2 border-solid border-[#c4fffe] mb-4"
          />
          <p className="lg:text-[1.8rem] text-[1.5rem] leading-7 font-bold text-[#79c8c7]">
            {director.name}
          </p>
          <div className="md:text-[1.5rem] text-[1.3rem] italic font-medium leading-7 mb-6">
            {director.role}
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          expanded ? "opacity-100" : "opacity-0 absolute top-0 left-0 right-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="lg:text-[1.8rem] text-[1.5rem] leading-7 font-bold text-[#79c8c7]">
            {director.name}
          </p>
          <p className="md:text-[1.5rem] text-[1.3rem] font-semibold leading-7 px-6">
            "{director.quote}"
          </p>
          <div className="m-9 flex justify-center items-center gap-8">
            <SocialIcon
              type="twitter"
              aria-label={`${director.name}'s Twitter`}
            />
            <SocialIcon
              type="linkedin"
              aria-label={`${director.name}'s LinkedIn`}
            />
          </div>
        </div>
      </div>
      
      {/* Centered button that's half outside */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2">
        <button
          className={`flex items-center justify-center p-6 w-16 h-16 rounded-full cursor-pointer transition-colors duration-300 
            ${expanded ? 
              "bg-[#79c8c7] hover:bg-[#f67e7e]" : 
              "bg-[#f67e7e] hover:bg-[#79c8c7]"
            }`}
          onClick={onToggle}
          aria-label={expanded ? 
            `Close ${director.name}'s details` : 
            `Learn more about ${director.name}`
          }
        >
          <img 
            src={expanded ? "/assets/icon-close.svg" : "/assets/icon-cross.svg"} 
            alt={expanded ? "close" : "reveal"} 
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
   )

};


const SocialIcon = ({ type, ...props }) => {
  return (
    <svg
      className="h-8 w-8 fill-white hover:fill-[#f67e7e] transition-colors duration-300"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {type === "twitter" && (
        <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
      )}
      {type === "linkedin" && (
        <path d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z" />
      )}
    </svg>
  );
};

export default DirectorBox;

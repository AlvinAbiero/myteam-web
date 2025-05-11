"use client";
import React from "react";
// import iconClose from "../../public/assets/icon-close.svg";
// import iconCross from "../../public/assets/icon-cross.svg";
import directorData from '../_data/data'
import DirectorBox from './DirectorBox'
import { useState } from "react";

const DirectorBoxes = () => {
    
  // const directorData = [
  //   {
  //     id: "nikita",
  //     name: "Nikita Marks",
  //     role: "Founder & CEO",
  //     quote: "It always amazes me how much talent there is in every corner of the globe.",
  //     avatar: "assets/avatar-nikita.jpg",
  //   },
  //   {
  //     id: "cristian",
  //     name: "Cristian Duncan",
  //     role: "Co-founder & COO",
  //     quote: "Distributed teams required unique processes. You need to approach work in a new way.",
  //     avatar: "assets/avatar-christian.jpg",
  //   },
  //   {
  //     id: "cruz",
  //     name: "Cruz Hamer",
  //     role: "Co-founder & CTO",
  //     quote: "Technology is at the forefront of enabling distributed teams. That's where we come in.",
  //     avatar: "assets/avatar-cruz.jpg",
  //   },
  //   {
  //     id: "drake",
  //     name: "Drake Heaton",
  //     role: "Business Development Lead",
  //     quote: "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
  //     avatar: "assets/avatar-drake.jpg",
  //   },
  //   {
  //     id: "griffin",
  //     name: "Griffin Wise",
  //     role: "Lead Marketing",
  //     quote: "Unique perspectives shape unique products, which is what you need to survive these days.",
  //     avatar: "assets/avatar-griffin.jpg",
  //   },
  //   {
  //     id: "aden",
  //     name: "Aden Allan",
  //     role: "Head of Talent",
  //     quote: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
  //     avatar: "assets/avatar-aden.jpg",
  //   },
  // ];

   // Use a single state object to track which directors are showing info
  const [expandedDirectors, setExpandedDirectors] = useState({});

  // Toggle function for director cards
  const toggleDirector = (id) => {
    setExpandedDirectors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

 

  return (
    <div className="text-center md:grid md:grid-cols-2 md:gap-[3rem] lg:grid-cols-3 lg:gap-[4.5rem] flex flex-col gap-[5rem] items-center">
    {directorData.map((director) => (
        <DirectorBox
          key={director.id}
          director={director}
          expanded={expandedDirectors[director.id] || false}
          onToggle={() => toggleDirector(director.id)}
        />
      ))}
    </div>
  );
};

export default DirectorBoxes;

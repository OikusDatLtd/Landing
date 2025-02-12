import React from 'react';
import { useState, useEffect } from "react";

const WhoAreWe = () => {
  const writeUps = [
    // { text: "Personalized User Interactions: Find exactly what you're looking for with a search that understands your preferences, delivering tailored property recommendations in a snap.", image: "/images/Vector.png" },
    // { text: "Video-First Listings", image: "/images/Frame 1618868760.png" },
    // { text: "Immersive Experiences (3D Tours)", image: "/images/Group 1000001269.png" },
    // { text: "Oikus Nest", image: "/images/Group 1000001215.png" },
    // { text: "Escrow Services", image: "/images/Vector (1).png" }

    {
      id: "personalized",
      title: "Personalized User Interactions",
      image: "/images/Vector.png",
      content: "Find exactly what you're looking for with a search that understands your preferences, delivering tailored property recommendations in a snap."
    },

    {
      id: "video",
      title: "Video-First Listings",
      image: "/images/Frame 1618868760.png",
      content: "Dive deeper into properties with video walkthroughs as the default, giving you a true sense of the space before visiting in person."
    },

    {
      id: "immersive",
      title: "Immersive Experiences (3D Tours)",
      image: "/images/Group 1000001269.png",
      content: "Explore properties like never before with 3D tours, offering an interactive and detailed view from the comfort of your own home."
    },

    {
      id: "oikus",
      title: "Oikus Nest",
      image: "/images/Group 1000001215.png",
      content: "Work with a network of trusted agents, paid with Oikus Coins, who help you source and showcase verified properties, ensuring smooth and efficient transactions."
    },

    {
      id: "escrow",
      title: "Escrow Services",
      image: "/images/Vector (1).png",
      content: "Enjoy safe and secure transactions through Oikus' escrow service, ensuring funds are only released when all parties are satisfied and terms are met."
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % writeUps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [writeUps.length]);
  return (
    <section className="text-center py-10 px-6 gap-[8px]">
      <div className="py-10 px-96">
        <small className="w-[90px] h-[18px] font-custom2 font-semibold text-[14px] leading-[18.2px]">WHO ARE WE</small>
        <h2 className="w-[700px] h-[38px] font-custom2 font-semibold text-[32px] leading-[38.4px]">All In One Real Estate Platform</h2>
        <p className="w-[584px] h-[54px] font-custom font-normal text-[18px] leading-[27px]">Oikus eliminates the need to juggle multiple websites and resources for your real estate needs.</p>
        </div>
      <div className="md:flex justify-around items-center gap-[50px] m-20">
        <div className="w-[554.06px] h-[550.84px]">
        <img src="/images/pexels-binyaminmellish-1396122 1.png" alt="kitchen pic" />
        </div>

        <div className="p-4 max-w-md mx-auto">
        <ul>
            {writeUps.map((item, index) => (
              <li
                key={index}
                className={`flex flex-col items-start mb-4 w-[534.67px] h-auto py-[19.39px] px-[14.77px] gap-[13.85px] cursor-pointer rounded-lg border transition-all duration-300 border-primaryColor ${
                  selectedIndex === index ? "bg-primaryColor text-white border-primaryColor" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt="Icon" 
                    className={`w-[39.79px] h-[22.16px] top-[19.15px] left-[13.35px] me-4 transition-all duration-300 ${
                      selectedIndex === index ? "filter brightness-0 invert" : ""
                    }`} 
                  />
                  <span className="font-custom font-[700] text-[16.62px] leading-[21.61px] w-[404.83px] h-[22px] text-left">
                    {item.title}
                  </span>
                </div>
                {selectedIndex === index && (
                  <p className="w-[418.31px] h-[66px] font-custom font-[500] text-[14.77px] leading-[22.16px] text-left">{item.content}</p>
                )}
              </li>
            ))}
          </ul>
    </div>
      </div>
    </section>
  )
}

export default WhoAreWe
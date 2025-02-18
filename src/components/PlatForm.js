import React, { useState, useEffect } from "react";

const WhoAreWe = () => {
  const writeUps = [
    { id: "personalized", title: "Personalized User Interactions", image: `${process.env.PUBLIC_URL}/images/Vector.png`, content: "Find exactly what you're looking for with a search that understands your preferences, delivering tailored property recommendations in a snap." },
    { id: "video", title: "Video-First Listings", image: `${process.env.PUBLIC_URL}/images/Frame 1618868760.png`, content: "Dive deeper into properties with video walkthroughs as the default, giving you a true sense of the space before visiting in person." },
    { id: "immersive", title: "Immersive Experiences (3D Tours)", image: `${process.env.PUBLIC_URL}/images/Group 1000001269.png`, content: "Explore properties like never before with 3D tours, offering an interactive and detailed view from the comfort of your own home." },
    { id: "oikus", title: "Oikus Nest", image: `${process.env.PUBLIC_URL}/images/Group 1000001215.png`, content: "Work with a network of trusted agents, paid with Oikus Coins, who help you source and showcase verified properties, ensuring smooth and efficient transactions." },
    { id: "escrow", title: "Escrow Services", image: `${process.env.PUBLIC_URL}/images/Vector (1).png`, content: "Enjoy safe and secure transactions through Oikus' escrow service, ensuring funds are only released when all parties are satisfied and terms are met." },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % writeUps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 mb-10">
      <div className="max-w-[1258px] mx-auto text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto">
          <small className="text-sm font-polysans font-semibold">WHO ARE WE</small>
          <h2 className="text-2xl md:text-3xl font-polysans font-semibold mt-2">
            All In One Real Estate Platform
          </h2>
          <p className="text-lg mt-3 text-gray-600 font-lato max-w-[600px] mx-auto">
            Oikus eliminates the need to juggle multiple websites and resources for your real estate needs.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 mt-12 md:gap-10">
          {/* Image Section */}
          <div className="w-full md:w-[550px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/pexels-binyaminmellish-1396122 1.png`}
              alt="Real Estate"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Features List */}
          <div className="w-full md:w-[500px] font-lato font-normal">
            <ul className="space-y-4"> {/* This adds space between each item */}
              {writeUps.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex flex-col items-start py-4 px-5 rounded-lg border transition-all duration-300 cursor-pointer ${
                    selectedIndex === index
                      ? "bg-primaryColor text-white border-primaryColor"
                      : "bg-white text-black border-gray-300"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt="Icon"
                      className={`me-3 transition-all duration-300 ${
                        selectedIndex === index ? "filter brightness-0 invert" : ""
                      }`}
                    />
                    <span className="font-normal text-lg">{item.title}</span>
                  </div>
                  {selectedIndex === index && (
                    <p className="mt-2 text-sm">{item.content}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoAreWe;

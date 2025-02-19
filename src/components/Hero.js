import React from "react";

const Hero = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 mb-10 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
      {/* Text Content */}
      <div className="w-full lg:w-auto lg:max-w-[600px] lg:mr-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[59px] font-polysans">
          Help Us Shape The Future of Real Estate
        </h1>

        <p className="text-sm sm:text-base md:text-lg mt-3 w-full lg:max-w-[800px] font-lato">
          Oikus is redefining how Nigerians find and rent homes—making the process seamless, transparent, and stress-free. Now, we need your help! Join our user testing, experience Oikus firsthand, 
          and share your feedback. Your insights will help shape the future of real estate. 🚀
        </p>

        <div className="mt-5 font-lato flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="border-2 border-[#12AF9B] text-[#12AF9B] text-sm sm:text-base md:text-lg py-3 px-6 rounded">
            Test Prototype
          </button>
        </div>

        <div className="flex items-start gap-2 mt-4 justify-center lg:justify-start">
          <img className="w-5 h-5" src={`${process.env.PUBLIC_URL}/images/info-circle.png`} alt="info icon" />
          <small className="font-lato text-sm sm:text-base md:text-lg w-full lg:max-w-[600px]">
            For proper functioning of the prototype, the test must be carried out on desktop.
          </small>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-10 lg:mt-0 flex justify-center w-full lg:w-auto">
        <div className="relative w-full lg:w-auto">
          <img
            className="object-cover w-full lg:w-auto"
            src={`${process.env.PUBLIC_URL}/images/calender.png`}
            alt="Calendar"
            width="520.37"
            height="607.96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

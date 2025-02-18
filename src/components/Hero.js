import React from "react";

const Hero = () => {
  return (
    <section className="px-20 mb-20 mt-7 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
      {/* Text Content */}
      <div className="max-w-[600px] lg:mr-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-[59px] font-polysans">
          Help Us Shape the Future of Oikus
        </h1>

        <p className="text-sm sm:text-base md:text-lg mt-3 max-w-[600px] sm:max-w-[700px] md:max-w-[800px] font-lato">
          Participate in our user testing by exploring our web or mobile prototypes and share your valuable feedback.
        </p>

        <div className="mt-5 font-lato flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-primaryColor text-white text-sm sm:text-base md:text-lg py-3 px-6 rounded">
            Test Web Prototype
          </button>
          <button className="border-2 border-[#12AF9B] text-[#12AF9B] text-sm sm:text-base md:text-lg py-3 px-6 rounded">
  Test Mobile Prototype
</button>

        </div>

        <div className="flex items-start  gap-2 mt-4 justify-center lg:justify-start">
          <img className="w-5 h-5" src="/images/info-circle.png" alt="info icon" />
          <small className=" font-lato text-sm sm:text-base md:text-lg max-w-[350px] sm:max-w-[450px] md:max-w-[600px] font-lato">
            For proper functioning of the prototype, the test must be carried out on desktop.
          </small>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-10 lg:mt-0 flex justify-center">
        <div className="relative">
          <img
            className="w-[590px] h-[384px] object-cover"
            src="/images/calender.png"
            alt="Calendar"
          />
          <img
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[350px] object-cover"
            src="/images/animi.png"
            alt="Lady"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

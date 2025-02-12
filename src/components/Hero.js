import React from "react";

const Hero = () => {
  return (
    <section className="pb-10 px-6">
      <div className="md:flex justify-around items-center">
        <div className="">
          <h1 className="font-custom2 font-semibold text-[48px] leading-[62.4px] w-[628px] h-[124px]">Help Us Shape the Future of Oikus</h1>
          <p className="font-custom text-[18px] font-normal leading-[27px] w-[433px] h-[54px]">Participate in our user testing by exploring our web or mobile prototypes and share your valuable feedback.</p>
          <div className="mt-4 flex gap-[20px] mb-3">
            <button className="bg-primaryColor text-white py-[10px] px-[20px] rounded w-[193px] h-[54px]">Test Web Prototype</button>
            <button className="border-primaryColor border-2 py-[10px] px-[20px] rounded w-[200px] h-[54px]">Test Mobile Prototype</button>
          </div>
          <div className="flex gap-[8px]">
          <img className="w-[20px] h-[20px]" src="/images/info-circle.png" alt="info icon"/>
          <small className="font-custom font-normal text-[14px] leading-[21px] w-[246px] h-[42px]">For proper functioning of the prototype, <br /> the test must be carried out on desktop</small>
        </div>
        </div>
        <div className="relative">
        <img className="w-[590.74px] h-[383.98px] top-[60.25px] left-[713px]" src="/images/calender.png" alt="calender pic" />
        <img className="w-[370.45px] h-[206.87px] absolute top-60 left-20" src="/images/animi.png" alt="lady" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

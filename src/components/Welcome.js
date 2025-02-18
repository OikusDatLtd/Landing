import React from 'react';

const Welcome = () => {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-40 flex flex-col items-center text-center">
      <h1 className="font-polysans font-semibold text-[26px] md:text-[28px] lg:text-[32px] leading-tight">
        Welcome to Our User Testing Program
      </h1>
      <p className="font-lato text-[14px] md:text-[16px] leading-relaxed mt-4 max-w-[670px]">
        Thank you for participating in our user testing program for Oikus, a prop-tech app designed to revolutionize 
        the house hunting and renting experience in Nigeria by leveraging AI technology. Your feedback is crucial 
        in helping us validate our features, uncover design flaws, and ensure an optimal user experience.
      </p>
    </section>
  );
};

export default Welcome;

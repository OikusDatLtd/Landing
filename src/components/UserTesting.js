import React from "react";

const UserTesting = () => {
  return (
    <section className="py-10 px-6">
        <div className="px-96">
      <h3 className="text-2xl md:w-[425px] h-[47px] font-custom2 font-semibold text-[36px] leading-[46.8px] text-center">The User Testing Process</h3>
      <p className="w-[378px] h-[48px] font-custom font-normal text-[16px] leading[24px] text-center">Participating in Oikus’ user testing is straightforward. <br />Here's how you can contribute:</p>
      </div>
      {/* one */}
      <div className="md:flex justify-around items-center my-10">
        <div className="w-[520px] h-[317px]">
        <img src="/images/Frame 1618869027.png" alt="laptop and phone" />
        </div>

        <div className="">
        <img src="/images/Group 1000001282.png" alt="number 1" />
          <h4 className="font-custom2 font-semibold text-[24px] leading-[31.2px] w-[190px] h-[31px]">Select a Platform</h4>
           <ul className="list-disc w-[529px] h-[96px] font-custom font-normal text-[16px] leading-[24px]">
            <li>Web Prototype: Click on the "Test Web Prototype" button to access our web-based interface.</li>
            <li>Mobile Prototype: Click on the "Test Mobile Prototype" button to explore our mobile app interface.</li>
           </ul>
           <div className="mt-4 flex gap-[10px]">
            <button className="bg-primaryColor text-white px-4 py-2 rounded w-[193px] h-[54px]">Test Web Prototype</button>
            <button className="border-primaryColor text-primaryColor font-custom text-[16px] leading-[19.2px] text-center border-2 px-4 py-2 rounded w-[193px] h-[54px]">Test Mobile Prototype</button>
          </div>
        </div>
      </div>

      {/* two */}
      <div className="md:flex justify-around items-center my-10">
      <div className="">
      <img src="/images/Group 1000001282 (1).png" alt="number 2" />
          <h4 className="font-custom2 font-semibold text-[24px] leading-[31.2px] w-[242px] h-[31px]">Explore the Prototype</h4>
           <ul className="list-disc w-[529px] h-[72px] font-custom font-normal text-[16px] leading-[24px]">
            <li>Interact with the chosen prototype as you would with a live product.</li>
            <li>Navigate through features, perform tasks, and experience the user interface.</li>
           </ul>
        </div>

        <div className="w-[628px] h-[397px]">
        <img src="/images/woman.png" alt="woman smilling" />
        </div>
      </div>

      {/* three */}
      <div className="md:flex justify-around items-center my-10">
        <div className="w-[628px] h-[397px]">
        <img src="/images/rate.png" alt="rateing" />
        </div>

        <div className="">
        <img src="/images/Group 1000001282 (2).png" alt="number 3" />
          <h4 className="font-custom2 font-semibold text-[24px] leading-[31.2px] w-[197px] h-[31px]">Provide Feedback</h4>
           <ul className="list-disc w-[529px] h-[96px] font-custom font-normal text-[16px] leading-[24px]">
            <li>After testing, click on the "Take the Survey" button to share your thoughts.</li>
            <li>Complete the brief survey to help us understand your experience and identify areas for improvement.</li>
           </ul>
        </div>
      </div>

      {/* four */}
      <div className="md:flex justify-around items-center my-10">
      <div className="">
          <h4 className="font-custom2 font-semibold text-[32px] leading-[38.4px] w-[584px] h-[38px]">Thank You for Choosing to Participate</h4>
           <p className="w-[584px] h-[81px] font-custom font-normal text-[18px] leading-[27px]">We sincerely appreciate your time and effort in testing Oikus. Your feedback is invaluable in helping us enhance the house hunting and renting experience in Nigeria.</p> <br />
           <p className="w-[584px] h-[81px] font-custom font-normal text-[18px] leading-[27px]">If you have any questions or need further assistance, please don't hesitate to contact us:</p>
        </div>

        <div className="w-[412px] h-[412px]">
        <img src="/images/thankyou.png" alt="thank you" />
        </div>
      </div>
    </section>
  );
};

export default UserTesting;

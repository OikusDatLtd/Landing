import React from "react";

const UserTesting = () => {
  return (
    <section className="py-10 px-6 flex flex-col items-center">
      <div className="max-w-[1236px] mx-auto">
        {/* Title */}
        <div className="text-center">
          <h3 className="text-2xl font-polysans font-semibold text-[32px] md:text-[36px] leading-[42px] md:leading-[46.8px]">
            The User Testing Process
          </h3>
          <p className="font-lato font-normal text-[16px] leading-[20px] mt-2 max-w-[90%] md:max-w-[80%] mx-auto">
            Participating in Oikus’ user testing is straightforward. <br />
            Here's how you can contribute:
          </p>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-[80px] my-10">
          <div className="w-full md:w-[50%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/Frame 1618869027.png`}
              alt="laptop and phone"
              className="w-full max-w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-[50%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/Group 1000001282.png`}
              alt="number 1"
              className="mb-4 mx-auto md:mx-0"
            />
            <h4 className="font-polysans font-semibold text-[22px] md:text-[24px] leading-[30px]">
              Go To The Test Environment
            </h4>
            <ul className="list-disc pl-5 text-left font-lato font-normal text-[16px] leading-[24px] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
              <li>Click on the "Test Prototype" button and you will be redirected to the maze testing environment.</li>
              <li>After a couple of seconds, you can click the “Get Started” button to begin.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start font-lato">
               
              <button className="border-2 border-primaryColor text-primaryColor px-6 py-3 rounded">
                Test Prototype
              </button>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left gap-6 md:gap-[60px] my-10">
          <div className="w-full md:w-[50%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/woman.png`}
              alt="woman smiling"
              className="w-full max-w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-[50%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/Group 1000001282 (1).png`}
              alt="number 2"
              className="mb-4 mx-auto md:mx-0"
            />
            <h4 className="font-polysans font-semibold text-[22px] md:text-[24px] leading-[30px]">
              Explore the Prototype
            </h4>
            <ul className="list-disc pl-5 text-left font-lato font-normal text-[16px] leading-[24px] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
              <li>Interact with the chosen prototype as you would with a live product.</li>
              <li>Navigate through features, perform tasks, and experience the user interface.</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-[60px] my-10">
          <div className="w-full md:w-[50%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/rate.png`}
              alt="rating"
              className="w-full max-w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-[50%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/Group 1000001282 (2).png`}
              alt="number 3"
              className="mb-4 mx-auto md:mx-0"
            />
            <h4 className="font-polysans font-semibold text-[22px] md:text-[24px] leading-[30px]">
              Provide Feedback
            </h4>
            <ul className="list-disc pl-5 text-left font-lato font-normal text-[16px] leading-[24px] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
              <li>After testing, complete the brief survey to help us understand your experience and identify areas for improvement.</li>
              
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-[80px] my-10">
          <div className="w-full md:w-[50%]">
            <h4 className="font-polysans font-semibold text-[26px] md:text-[32px] leading-[34px] md:leading-[38.4px] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
              Thank You for Choosing to Participate
            </h4>
            <p className="mt-4 font-lato font-normal text-[16px] md:text-[18px] leading-[25px] md:leading-[27px] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
              We sincerely appreciate your time and effort in testing Oikus. Your feedback is invaluable in helping us enhance the house hunting and renting experience in Nigeria.
            </p>
            <p className="mt-4 font-lato font-normal text-[16px] md:text-[18px] leading-[25px] md:leading-[27px] max-w-[90%] md:max-w-[80%] mx-auto md:mx-0">
              If you have any questions or need further assistance, please don't hesitate to contact us.
            </p>
          </div>

          <div className="w-full md:w-[40%]">
            <img
              src={`${process.env.PUBLIC_URL}/images/thankyou.png`}
              alt="thank you"
              className="w-full max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTesting;

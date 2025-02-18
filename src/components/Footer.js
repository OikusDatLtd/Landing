import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-10">
      <div className="max-w-[1185px] mx-auto flex flex-col md:flex-row justify-start md:gap-[191px] items-start md:items-center mb-10">
        {/* Left Section: Logo & Social Links */}
        <div className="flex flex-col items-start">
          <img
            className="w-[159px] h-[49px]"
            src="/images/OikusDat logo_Positive Landscape.png"
            alt="OikusDat logo"
          />
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.linkedin.com/company/oikusdat/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561300087533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/oikusafrica?igsh=MWQydDJ4bXM3MWdrNA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/Instagram.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/Youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Right Section: Company & Resources */}
        <div className="flex flex-col md:flex-row md:gap-[80px]">
          {/* Company Section */}
          <div>
            <p className="font-semibold text-lg">Company</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>About us</li>
              <li>Careers</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Resource Section */}
          <div>
            <p className="font-semibold text-lg">Resource</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Yahdom Logo */}
      <div className="max-w-[1185px] mx-auto flex justify-start">
        <img
          className="w-[109.82px] h-[40px]"
          src="/images/Frame 1618868690.png"
          alt="Yahdom logo"
        />
      </div>
    </footer>
  );
};

export default Footer;

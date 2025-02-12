import React from "react";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="md:flex justify-between items-center mb-10">
        <div className="">
        <img className="w-[159px] h-[49px]" src="/images/OikusDat logo_Positive Landscape.png" alt="oikus logo" />
        <div className="mt-4 flex gap-4">
            {/* linkedin url */}
        <a href="https://www.linkedin.com/company/oikusdat/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkedin.png" alt="Linkedin" />
        </a>
        {/* facebook url */}
        <a href="https://www.facebook.com/profile.php?id=61561300087533" target="_blank" rel="noopener noreferrer">
        <img src="/images/facebook.png" alt="Facebook" />
        </a>
       {/* instagran url */}
       <a href="https://www.instagram.com/oikusafrica?igsh=MWQydDJ4bXM3MWdrNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <img src="/images/Instagram.png" alt="Instagram" />
        </a>
       {/* youtube url */}
       <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/Youtube.png" alt="Youtube" />
        </a>
          </div>
        </div>

        <div className="">
        <p className="w-[66px] h-[24px] font-custom font-normal text-[16px] leading-[24px]">Company</p>
        <ul className="w-[56px] h-[20px] font-custom font-normal text-[14px] leading-[20px]">
            <li>About us</li>
            <li>Careers</li>
            <li>Blogs</li>
        </ul>
        </div>

        <div className="me-10">
          <p className="w-[66px] h-[24px] font-custom font-normal text-[16px] leading-[24px]">Resource</p>
           <ul className="w-[115px] h-[20px] font-custom font-normal text-[14px] leading-[20px]"> 
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
           </ul>
        </div>
      </div>
      <img className="w-[109.82px] h-[40px]" src="/images/Frame 1618868690.png" alt="Yahdom" />
    </footer>
  );
};

export default Footer;

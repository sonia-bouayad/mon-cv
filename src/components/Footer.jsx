import React from "react";
import Linkedin from "../assets/svgs/Linkedin";
import Twitter from "../assets/svgs/Twitter";

const Footer = () => {
  return (
    <div className="flex items-center justify-center min-h-[300px] bg-secondary mt-10">
      <div className="flex flex-col items-center gap-5">
        {/* Sonia Text */}
        <h1 className="text-primary text-3xl sm!text-5xl">Sonia</h1>

        {/* Links */}
        <ul className="flex gap-2 sm:gap-5 text-md sm:text-lg">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a href={`#${item.toLowerCase()}`} className="relative z-10 ">
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/sonia-Bouayad/"
            className="transform transition-transform duration-300 hover:scale-125 cursor-pointer"
          >
            <Linkedin />
          </a>

          <a
            href=""
            className="transform transition-transform duration-300 hover:scale-125 cursor-pointer"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

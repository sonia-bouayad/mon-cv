import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import soniaImage from "../assets/images/sonia.jpg";
import cvPDF from "../assets/images/cv.pdf";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["le management", "la santé", "les sciences du langage"],
    loop: true, // Loop the typewriter effect
    typeSpeed: 50, // Speed at which to type each letter
    deleteSpeed: 50, // Speed at which to delete each letter
    delaySpeed: 1000, // Delay before starting to delete the word
  });

  return (
    <>
      {/* container */}
      <div className="grid grid-cols-6">
        <div
          className=" col-start-2 col-span-4"
          style={{ height: "calc(85vh - 64px)" }}
        >
          {/* flex container */}
          <div className="flex flex-col-reverse sm:flex-row justify-evenly mx-auto items-center w-full h-full gap-6 ">
            {/* Description */}
            <div
              className="flex flex-col gap-10 items-center sm:items-start"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {/* Text */}
              <div className="text-center sm:text-start">
                <h1 className="text-white text-[1.8rem] md:text-[2.7rem]">
                  Hi, I&apos;m{" "}
                  <span className="text-secondary">Sonia Bouayad!</span>
                </h1>
                <h3 className="text-white text-[1rem] md:text-[1.3rem] mt-2">
                  Passionée par <span className="text-secondary">{text}</span>
                  <Cursor />
                </h3>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
              <a href={cvPDF} download>
                <button className="flex items-center bg-secondary text-sm md:text-lg text-gray-800 px-3 py-2 rounded">
                  CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                </a>

                <button className="text-secondary text-sm md:text-lg bg-primary hover:text-primary hover:bg-secondary px-3 py-2 transition-all duration-300 ease-in-out rounded border-[1px] border-secondary ">
                  <a href="#about">En savoir plus</a>
                </button>
              </div>
            </div>

            {/* img */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <img
                src={soniaImage}
                className="max-h-[230px] sm:max-h-[250px] md:max-h-[280px] hover:sm:h-[310px] transition-all duration-300 ease-in-out rounded-[10rem]"
                alt="Sonia Bouayad"
                style={{ transition: "box-shadow 0.3s ease" }}
                onMouseOver={(event) =>
                  (event.currentTarget.style.boxShadow = "0 0 50px #9599f0")
                }
                onMouseOut={(event) =>
                  (event.currentTarget.style.boxShadow = "none")
                }
              />
            </div>
          </div>
        </div>

        {/* empty div */}
        <div></div>
      </div>
    </>
  );
};

export default Hero;

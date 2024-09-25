import React from "react";
import soniaAboutImage from "../assets/images/sonia.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="h-screen mx-auto flex flex-col pt-4 mt-10">
        {/* about me text */}
        <div
          className="flex flex-col items-center sm:mb-0 mb-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h3 className="text-white text-md sm:text-lg">En savoir plus</h3>
          <h1 className="text-secondary text-3xl sm:text-5xl">À propos de moi</h1>

        </div>

        {/* about content */}
        <div
          className="flex flex-col justify-center items-center sm:flex-row gap-10 sm:mx-auto mx-8"
          style={{ height: "calc(100vh - 100px)" }} // Adjust 100px to the height of the first container
        >
          {/* img */}
          <div data-aos="zoom-in" data-aos-duration="800">
            <img
              src={soniaAboutImage}
              className="max-h-[230px] sm:max-h-[250px] md:max-h-[280px] transition-all duration-300 ease-in-out rounded-lg"
              alt="Sonia Bouayad"
            />
          </div>

          <div
            className="flex flex-col gap-4"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <p className="text-slate-200 max-w-96 text-lg">
            Étudiante en Master Management des Organisations de Santé à
l'École SMBS, avec une formation en orthophonie et sciences du
langage. Je cherche une alternance pour
appliquer mes compétences dans une organisation innovante du
secteur de la santé.
            </p>
            <button className="bg-secondary px-3 py-2 text-sm md:text-[1rem] text-gray-800 flex-shrink max-w-1/2">
              <a href="">Contacte moi</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

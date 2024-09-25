import React from "react";
import { SoftSkills, HardSkills } from "../constants/Skills";
import Skill from "./Skill";

const Skills = () => {
  // Split HardSkills into two halves
  const halfHard = Math.ceil(HardSkills.length / 2);
  const leftHardSkills = HardSkills.slice(0, halfHard);
  const rightHardSkills = HardSkills.slice(halfHard);

  // Split SoftSkills into two halves
  const halfSoft = Math.ceil(SoftSkills.length / 2);
  const leftSoftSkills = SoftSkills.slice(0, halfSoft);
  const rightSoftSkills = SoftSkills.slice(halfSoft);

  return (
    <>
      <div
        id="skills"
        className=" mx-auto flex flex-col justify-evenly pt-4 mt-10"
      >
        {/* Section Text */}
        <div
          className="flex flex-col items-center mb-3 sm:mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h3 className="text-white text-sm sm:text-lg">Voici</h3>
          <h1 className="text-secondary text-2xl sm:text-5xl">Mes compétances</h1>
        </div>

        {/* Section Content */}
        <div className="flex flex-col justify-center items-center gap-4 mx-auto lg:flex-row lg:space-x-4">
          {/* Hard Skills */}
          <div
            className="flex flex-col gap-10 border-[1px] border-secondary rounded-xl p-8 mx-auto w-full lg:w-1/2 min-h-[355px]"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Hard Skills Text */}
            <h1 className="text-center text-secondary text-2xl sm:text-4xl">
              Hard Skills
            </h1>

            {/* Hard Skills Content */}
            <div className="flex-1 flex justify-center w-full">
              {/* Left Section */}
              <div className="sm:w-1/2 w-full flex flex-col gap-4">
                {leftHardSkills.map((capability, index) => (
                  <Skill skill={capability} key={index} />
                ))}
              </div>

              {/* Right Section */}
              <div className="sm:w-1/2 w-full sm:flex flex-col gap-4 hidden">
                {rightHardSkills.map((capability, index) => (
                  <Skill skill={capability} key={index + halfHard} />
                ))}
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-10 border-[1px] border-secondary rounded-xl p-8 mx-auto w-full lg:w-1/2 min-h-[355px]"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Soft Skills Text */}
            <h1 className="text-center text-secondary text-2xl sm:text-4xl">
              Soft Skills
            </h1>

            {/* Soft Skills Content */}
            <div className="flex-1 flex flex-col gap-3 sm:flex-row sm:gap-10 justify-center">
              {/* Left Section */}
              <div className="sm:w-1/2 w-full flex flex-col gap-4 items-start">
                {leftSoftSkills.map((capability, index) => (
                  <Skill skill={capability} key={index} />
                ))}
              </div>

              {/* Right Section */}
              <div className="sm:w-1/2 w-full flex flex-col gap-4 items-start">
                {rightSoftSkills.map((capability, index) => (
                  <Skill skill={capability} key={index + halfSoft} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

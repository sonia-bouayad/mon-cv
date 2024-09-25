import React from "react";
import BadgeCheck from "../assets/svgs/BadgeCheck";

const Skill = ({ skill }) => {
  return (
    <div className="flex gap-3">
      <BadgeCheck />
      <div className="flex flex-col gap-1">
        <h3 className="text-white  text-[0.8rem] sm:text-[1rem]">
          {skill.name}
        </h3>
      </div>
    </div>
  );
};

export default Skill;

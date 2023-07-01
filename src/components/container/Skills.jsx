import React from "react";
import { BiLogoReact, BiLogoJavascript, BiLogoCss3, BiLogoTailwindCss, BiLogoHtml5 } from "react-icons/bi";
import { BsGit } from "react-icons/bs";


const Skills = () => {
  return (
    <div className="text-center">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2">
        <h3 className="text-2xl font-bold m-auto">Habilidades</h3>
      </div>
      <div className="text-5xl items-center flex py-5">
        <BiLogoReact className="m-auto" />
        <BsGit className="m-auto" />
        <BiLogoJavascript className="m-auto" />
        <BiLogoCss3 className="m-auto" />
        <BiLogoTailwindCss className="m-auto" />
        <BiLogoHtml5 className="m-auto" />
      </div>
    </div>
  );
};

export default Skills;

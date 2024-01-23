import React from "react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandSupabase } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

const Skills = () => {
  return (
    <div id="skills" className="text-center items-center">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2">
        <h2 className="text-2xl font-bold m-auto">Habilidades</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 w-11/12 m-auto my-2">
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoReact className="m-auto" size={50} />
          <figcaption>React</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BsGit className="m-auto" size={50} />
          <figcaption>Git</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoJavascript className="m-auto" size={50} />
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoCss3 className="m-auto" size={50} />
          <figcaption>CSS</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoTailwindCss className="m-auto" size={50} />
          <figcaption>Tailwindcss</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoHtml5 className="m-auto" size={50} />
          <figcaption>HTML</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoNodejs className="m-auto" size={50} />
          <figcaption>Nodejs</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <TbBrandNextjs className="m-auto" size={50} />
          <figcaption>Nextjs</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoTypescript className="m-auto" size={50} />
          <figcaption>Typescript</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <TbBrandSupabase className="m-auto" size={50} />
          <figcaption>Supabase</figcaption>
        </figure>
        <figure className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center">
          <BiLogoMongodb className="m-auto" size={50} />
          <figcaption>Mongodb</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Skills;

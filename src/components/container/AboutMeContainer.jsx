import React from "react";
import perfil from "../../assets/foto-cv.webp";
import { useMiContexto } from "../../context/contextlanguaje";
import { string } from "yup";

const AboutMeContainer = () => {
  const {
    strings: { aboutme },
  } = useMiContexto();
  const { title, p } = aboutme;
  return (
    <div className="items-center">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center">
        <h3 id="aboutme" className="text-2xl font-bold m-auto">
          {title}
        </h3>
      </div>
      <section className="text-xl m-auto my-2 w-11/12 items-center flex flex-col-reverse md:flex-row">
        <article className="space-y-2 break-words text-pretty">
          {p.map((string, i) => (
            <p key={i}>{string}</p>
          ))}
        </article>
        <img
          src={perfil}
          alt="perfil"
          className="w-64 h-64 rounded-full object-cover m-auto"
        />
      </section>
    </div>
  );
};

export default AboutMeContainer;

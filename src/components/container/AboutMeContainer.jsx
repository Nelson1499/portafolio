import React from "react";
import perfil from "../../assets/foto-cv.jpeg";

const AboutMeContainer = () => {
  return (
    <div className="items-center">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center">
        <h3 className="text-2xl font-bold m-auto">Sobre mí</h3>
      </div>
      <section className="text-xl m-auto my-2 w-11/12 items-center flex-col-reverse flex">
        <article className="space-y-2 break-words text-pretty">
          <p c>
            Soy un desarrollador full-stack junior apasionado por crear
            experiencias web atractivas y seguras. Sé construir interfaces
            funcionales y responsivas, desarrollar y asegurar APIs robustas, y
            trabajar con bases de datos utilizando consultas SQL.
          </p>
          <p>
            Me entusiasma aprender nuevas tecnologías y colaborar en proyectos
            desafiantes. Soy diligente, orientado a soluciones y estoy abierto a
            recibir retroalimentación para mejorar constantemente mis
            habilidades de programación.
          </p>
          <p>
            Estoy listo para unirme a un equipo dinámico y contribuir en el
            desarrollo de proyectos web innovadores.
          </p>
        </article>
        <img src={perfil} alt="perfil" className="w-64 h-64 rounded-full object-cover m-auto" />
      </section>
    </div>
  );
};

export default AboutMeContainer;

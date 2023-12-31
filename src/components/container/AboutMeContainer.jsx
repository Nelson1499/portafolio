import React from "react";

const AboutMeContainer = () => {
  return (
    <div className="items-center">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center item">
        <h3 className="text-2xl font-bold m-auto">Sobre mí</h3>
      </div>
      <section className="text-xl w-11/12 md:w-9/12 m-auto my-2 space-y-1.5">
        <p>
          Soy un desarrollador front-end junior apasionado por crear
          experiencias web atractivas. Utilizo HTML, CSS, JavaScript, Git y
          React.
        </p>
        <p>
          Para construir interfaces funcionales y responsivas. Me entusiasma
          aprender nuevas tecnologías y colaborar en proyectos desafiantes. Soy
          diligente, orientado a soluciones y estoy abierto a recibir
          retroalimentación para mejorar constantemente mis habilidades.
        </p>
        <p>
          Estoy listo para unirme a un equipo dinámico y contribuir en el
          desarrollo de proyectos web innovadores.
        </p>
      </section>
    </div>
  );
};

export default AboutMeContainer;
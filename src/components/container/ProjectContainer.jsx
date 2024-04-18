import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import { Projectsdata as projects } from "../../data/projects";
import { useState } from "react";

const ProjectContainer = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleMouseEnter = (index) => {
    setSelectedProject(index);
  };
  const handleMouseLeave = () => {
    setSelectedProject(null);
  };
  return (
    <article id="project" className="space-y-4 my-2">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center">
        <h2 className="text-2xl font-bold m-auto">Proyectos</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto transition-all justify-center items-center">
        {projects.map((item, i) => (
          <div
            key={i}
            className="m-auto rounded max-w-md"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <section className="flex gap-2 mb-2">
              {item?.webTech.map((f, i) => (
                <span key={i} className="flex bg-slate-700 p-2 rounded">
                  <p>{f.tech}</p>
                  <f.icon />
                </span>
              ))}
            </section>
            <div className="relative cursor-pointer">
              <section >
                <img
                  key={i}
                  src={item.Imagen}
                  alt="project"
                  className="w-full h-64 rounded-t"
                />
                {selectedProject === i && (
                  <div className="absolute top-0 bottom-0 w-full items-center text-center bg-black bg-opacity-75 space-y-3">
                    <h3 className="mt-5"> {item.Title} </h3>
                    <p>{item.Description}</p>
                  </div>
                )}
              </section>
            </div>
            <section
              className={`grid ${
                item.Repository ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {item.Repository && (
                <a
                  href={item.Repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold"
                >
                  <div
                    title="Ir al repositorio de github."
                    className="py-4 flex items-center justify-center bg-black rounded-bl hover:scale-105"
                  >
                    <span>
                      <GitHubIcon />
                      Github
                    </span>
                  </div>
                </a>
              )}
              <a
                href={item.Url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold"
              >
                <div
                  title="Ir al sitio web."
                  className={`m-0 left-0 right-0 bottom-0 py-4 flex items-center justify-center  ${
                    item.Repository ? "rounded-br" : "rounded-b"
                  } bg-slate-700 hover:scale-105`}
                >
                  <WebIcon /> Ir al sitio web
                </div>
              </a>
            </section>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProjectContainer;

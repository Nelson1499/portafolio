import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { getProjects } from "../../api/api.projects";
import Carousel from "react-bootstrap/Carousel";

const ProjectContainer = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setprojects] = useState([]);

  const handleMouseEnter = (index) => {
    setSelectedProject(index);
  };
  const handleMouseLeave = () => {
    setSelectedProject(null);
  };
  const projectsdata = () => {
    getProjects()
      .then((res) => setprojects(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    projectsdata();
  }, []);
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold my-5">Mis proyectos</h3>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto container">
          {projects.map((item, i) => (
            <div key={i} className="m-auto bg-slate-700 rounded ">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <Carousel className="w-80 md:w-full">
                  {item.images.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.url} alt="project" className="w-80 h-96" />
                    </Carousel.Item>
                  ))}
                </Carousel>

                {selectedProject === i && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                    <div className="text-center">
                      <a
                        href={item.urlweb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold hover:text-blue-500"
                      >
                        Ir a la página
                      </a>
                      <div className="mt-10 px-3">
                        <h4>Descripción</h4>
                        <div className="text-center w-11/12 mx-2">{item.description}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={item.urlrepository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold"
              >
                <div
                  title="Ir al repositorio de github."
                  className="m-0 left-0 right-0 bottom-0 py-4 flex items-center justify-center hover:bg-slate-800"
                >
                  <GitHubIcon /> Github
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;

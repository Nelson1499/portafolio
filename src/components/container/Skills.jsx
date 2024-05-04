import { useMiContexto } from "../../context/contextlanguaje";
import { skills } from "../../data/skills";

const Skills = () => {
  const {
    strings: { hskill }
  } = useMiContexto();
  return (
    <div id="skills" className="text-center items-center">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2">
        <h2 className="text-2xl font-bold m-auto">{hskill}</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 w-11/12 m-auto my-2">
        {skills.map((skill, i) => (
          <figure
            key={i}
            className="m-auto bg-slate-500 bg-opacity-25 rounded p-2 w-full items-center"
          >
            <skill.skill className="m-auto" size={50} />
            <figcaption>{skill.tittle}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Skills;

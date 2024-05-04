import React from "react";
import { useMiContexto } from "../../context/contextlanguaje";

const Expcontainer = () => {
  const { strings } = useMiContexto();
  const { title, job, date, description } = strings.exp;
  return (
    <div className="items-center">
      <div
        id="exp"
        className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center"
      >
        <h3 className="text-2xl font-bold m-auto">{title}</h3>
      </div>
      <section className="text-xl m-auto my-2 w-11/12 items-center flex flex-col-reverse md:flex-row">
        <article className="space-y-2 break-words text-pretty">
          <h4>{job}</h4>
          <small>{date}</small>
          <ul>
            {description.map((d, i) => (
              <li key={i}>{d.li}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Expcontainer;

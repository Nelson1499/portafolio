import { useEffect } from "react";
import { useMiContexto } from "../../context/contextlanguaje";

const Navbar = () => {
  const { strings, setLanguage, language } = useMiContexto();

  return (
    <div className="bg-blue-950 bg-opacity-[98%] p-2 fixed top-3 rounded w-full shadow-md max-w-[750px] z-10 text-white m-auto">
      <nav className="font-semibold text-base transition-shadow duration-300">
        <ul className="gap-y-2 flex flex-col md:flex-row justify-between items-center container mx-auto">
          <a href="#" className="m-auto md:m-0">
            <h3 className="text-2xl mx-2">NelsonDev</h3>
          </a>
          <div className="flex items-center space-x-3">
            {strings.nav.map((p) => (
              <a href={`#${p.id}`}>
                <li className="cursor-pointer hover:text-blue-500">
                  {p.parragram}
                </li>
              </a>
            ))}
            <button
              onClick={() => {
                language === "en" ? setLanguage("es") : setLanguage("en");
              }}
            >
              {language === "en" ? "Esp" : "Eng"}
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

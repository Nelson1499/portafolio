import { createContext, useContext, useEffect, useState } from "react";
import es from "../language/es";
import en from "../language/en";


const MiContexto = createContext();

const MiContextoProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [strings, setStrings] = useState(en);
  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.startsWith("es")) {
      setLanguage("es");
    }
  }, []);

  useEffect(() => {
    if (language === "es") {
      setStrings(es);
    } else {
      setStrings(en);
    }
  }, [language]); 

  return (
    <MiContexto.Provider value={{ strings, setLanguage, language }}>
      {children}
    </MiContexto.Provider>
  );
};

const useMiContexto = () => {
  return useContext(MiContexto);
};

export { MiContextoProvider, useMiContexto };

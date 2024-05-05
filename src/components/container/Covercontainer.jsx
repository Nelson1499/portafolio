import React, { useEffect, useState } from "react";
import cover from "../../assets/portada.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import { download } from "../../api/api.download";
import foto from "../../assets/foto-cv.webp";
import "../../css/covercontainer.css";
import { useMiContexto } from "../../context/contextlanguaje";

const Covercontainer = () => {
  const { language } = useMiContexto();
  return (
    <div className="relative items-center">
      <img className="w-full h-96" src={cover} alt="cover" />
      <div className={"absolute bottom-2 justify-center items-center w-full"}>
        <div className="flex bg-black bg-opacity-75 p-3 m-auto rounded w-max justify-center">
          <div className="w-80 flex m-auto justify-center items-center">
            <figure className="w-max m-auto">
              <img
                className="w-28 h-28 rounded m-auto"
                src={foto}
                alt="imagen de perfil"
              />
            </figure>
            <div className="w-3/5 ml-2 md:w-max">
              <ul>
                <li className="m-auto text-xl">
                  Avalos Nelson
                  <ul className="px-2">
                    <li className="m-auto text-lg">Development</li>
                    <li className="flex m-auto">
                      <button
                        className="text-lg active:text-emerald-600 hover:scale-105"
                        onClick={() => {
                          download(language);
                        }}
                      >
                        Curriculum vitae <DownloadIcon />
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covercontainer;

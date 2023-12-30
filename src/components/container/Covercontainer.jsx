import React, { useEffect, useState } from "react";
import cover from "../../assets/portada.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import { download } from "../../api/api.download";
import foto from "../../assets/foto-cv.jpeg";
import "../../css/covercontainer.css";

const Covercontainer = () => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshow(true);
    }, 1000);
  }, []);
  return (
    <div className="relative items-center">
      <img className="w-full h-96" src={cover} alt="cover" />
      <div
        className={`absolute inset-x-0 bottom-0 items-center md:items-start  ${
          show ? "showprofile" : "hiddenprofile"
        }`}
      >
        <div className="flex bg-black bg-opacity-75 p-3 rounded w-full md:w-80 shadow-md shadow-gray-500 justify-center">
          <div className="w-80 flex">
            <figure className="w-max mr-2 m-auto">
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
                        className="text-lg active:text-emerald-600"
                        onClick={download}
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

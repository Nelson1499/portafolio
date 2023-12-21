import React from "react";
import cover from "../../assets/portada.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import { download } from "../../api/api.download";
import foto from "../../assets/foto-cv.png";

const Covercontainer = () => {
  return (
    <div className="relative items-center">
      <img className="w-full h-96" src={cover} alt="cover" />
      <div className="absolute inset-x-0 bottom-0 p-1 md:m-auto">
        <div className="flex p-2 bg-black bg-opacity-75 rounded md:w-96 w-full ">
          <img className="w-40 h-40 rounded-full" src={foto} alt="persona" />
          <div className="mx-1 py-10">
            <ul>
              <li className="m-auto text-xl">
                Avalos Nelson
                <ul className="px-2">
                  <li className="m-auto text-lg">Development</li>
                  <li className="flex m-auto">
                    <button className="text-lg active:text-emerald-600" onClick={download}>
                      Curriculum vitae <DownloadIcon  />
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covercontainer;

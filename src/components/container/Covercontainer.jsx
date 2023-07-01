import React from "react";
import cover from "../../assets/portada.jpg";
import DownloadIcon from "@mui/icons-material/Download";

const Covercontainer = () => {
  return (
    <div className="relative items-center">
      <img className="w-full h-96" src={cover} alt="cover" />
      <div className="absolute inset-x-0 bottom-0 p-1 md:m-auto">
        <div className="flex p-2 bg-gray-700 bg-opacity-50 rounded md:w-96 w-full ">
          <img
            className="w-40 h-40 rounded-full"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="persona"
          />
          <div className="mx-1 py-10">
            <ul>
              <li className="m-auto text-xl">
                Avalos Nelson
                <ul className="px-2">
                  <li className="m-auto text-lg">Development</li>
                  <li className="flex m-auto">
                    <p className=" text-lg">
                      Curriculum vitae <DownloadIcon />
                    </p>
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
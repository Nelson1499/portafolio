import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contactcontainer = () => {
  return (
    <div className="text-xl container w-11/12 md:w-max items-center m-auto md:mx-2">
      <div className="m-auto">
        <h3>Lista de contacto</h3>
        <div className="bg-slate-500 bg-opacity-20 p-2 rounded my-2">
          <WhatsAppIcon /> +54 9 3624026267
        </div>
        <div className="bg-slate-500 bg-opacity-20 p-2 rounded my-2">
          <LocalPhoneIcon /> +54 9 3624026267
        </div>
        <div className="bg-slate-500 bg-opacity-20 p-2 rounded my-2">
          <AlternateEmailIcon /> avalosnelson9919@gmail.com
        </div>
        <div className="bg-slate-500 bg-opacity-20 p-2 rounded my-2">
          <a
            href="https://www.linkedin.com/in/nelson-avalos-b8827615b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon /> Avalos Nelson LinkedIn.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactcontainer;

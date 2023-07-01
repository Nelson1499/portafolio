import React from "react";
import Contactcontainer from "../components/container/Contactcontainer";
import FormularionContact from "../components/container/FormularionContact";

const Contact = () => {
  return (
    <div className="mt-20 md:m-auto items-center md:flex md:min-h-screen">
      <div className="m-auto md:flex">
        <Contactcontainer />
        <FormularionContact />
      </div>
    </div>
  );
};

export default Contact;

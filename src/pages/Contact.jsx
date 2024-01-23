import React from "react";
import Contactcontainer from "../components/container/Contactcontainer";
import FormularionContact from "../components/container/FormularionContact";

const Contact = () => {
  return (
    <article id="contact" className="my-2">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center">
        <h3 className="text-2xl font-bold m-auto">Contactos</h3>
      </div>
      <section className="mt-2 md:flex">
        <Contactcontainer />
        <FormularionContact />
      </section>
    </article>
  );
};

export default Contact;

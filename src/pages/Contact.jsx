import React from "react";
import Contactcontainer from "../components/container/Contactcontainer";
import FormularionContact from "../components/container/FormularionContact";
import { useMiContexto } from "../context/contextlanguaje";

const Contact = () => {
  const {
    strings: {
      contacts
    },
  } = useMiContexto();
  const { title, form, list } = contacts;
  return (
    <article id="contact" className="my-2">
      <div className="bg-black shadow-white shadow-sm bg-opacity-10 py-2 text-center">
        <h3 className="text-2xl font-bold m-auto">{title}</h3>
      </div>
      <section className="mt-2 w-full items-center justify-center">
        <div className="m-auto w-max md:flex">
          <Contactcontainer />
          <FormularionContact form={form} />
        </div>
      </section>
    </article>
  );
};

export default Contact;

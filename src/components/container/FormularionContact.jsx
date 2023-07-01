import React from "react";

const FormularionContact = () => {
  return (
    <form className="bg-gray-500 bg-opacity-20 block w-11/12 md:w-96 py-2 px-5 items-center m-auto">
      <div className="m-auto">
        <div className="border-2 border-black p-2 my-2 rounded">
          <input
            type="email"
            placeholder="email"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="border-2 border-black p-2 my-2 rounded">
          <input
            type="text"
            placeholder="texto"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="border-2 border-black p-2 my-2 rounded">
          <textarea
            placeholder="Mensaje"
            className="bg-transparent outline-none max-h-48 w-full"
          />
        </div>
        <button className="border-2 border-black p-2 my-2 rounded w-full">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormularionContact;

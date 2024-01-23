const Navbar = () => {
  return (
    <div className="bg-blue-950 bg-opacity-95 py-2 shadow-sm fixed top-3 rounded w-[95%] md:w-[700px] z-10 text-white m-auto">
      <nav className="font-semibold text-xl transition-shadow duration-300">
        <ul className="flex justify-between py-2 container mx-auto">
          <a href="#">
            <h3 className="text-xl md:text-2xl mx-2">NelsonDev</h3>
          </a>
          <div className="flex items-center space-x-2 text-base md:text-xl md:space-x-4">
            <a href="#">
              <li className="cursor-pointer hover:text-blue-500">Inicio</li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-blue-500">Proyectos</li>
            </a>
            <a href="#skills">
              <li className="flex cursor-pointer hover:text-blue-500">
                Habilidades
              </li>
            </a>
            <a href="#contact">
              <li className=" cursor-pointer hover:text-blue-500">Contactos</li>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

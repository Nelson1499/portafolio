const Navbar = () => {
  return (
    <div className="bg-blue-950 bg-opacity-[98%] p-2 fixed top-3 rounded w-[95%] shadow-md md:w-[700px] z-10 text-white m-auto">
      <nav className="font-semibold text-xl transition-shadow duration-300">
        <ul className="gap-y-2 flex flex-col md:flex-row justify-between items-center container mx-auto">
          <a href="#" className="m-auto md:m-0">
            <h3 className="text-2xl mx-2">NelsonDev</h3>
          </a>
          <div className="flex items-center space-x-3">
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
              <li className="cursor-pointer hover:text-blue-500">Contactos</li>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

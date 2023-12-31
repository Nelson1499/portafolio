import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { getAuth } from "../../api/api.users";
import { UserContext } from "../../provider/UserContext";

const Navbar = () => {
  const { userSessionState, id, token } = useContext(UserContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setuser] = useState();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (id && token) {
      getAuth()
        .then((res) => setuser(res.data))
        .catch((e) => console.log(e));
    }
  }, [userSessionState]);
  return (
    <div className="bg-blue-950 bg-opacity-95 py-2 shadow-sm fixed top-0 w-full z-50 text-white">
      <nav className="font-semibold text-xl transition-shadow duration-300">
        <ul className="flex justify-between py-2 container mx-auto">
          <Link to="/">
            <h3 className="text-2xl mx-2">Portafolio</h3>
          </Link>
          <div className="hidden md:flex items-center space-x-4 px-2">
            <Link to="/" >
              <li className="mx-4 md:mx-auto cursor-pointer hover:text-blue-500">
                Inicio
              </li>
            </Link>
            <Link to="/project">
              <li className="mx-2 cursor-pointer hover:text-blue-500">
                Proyectos
              </li>
            </Link>
            <Link to="/contact" >
              <li className="mx-2 cursor-pointer hover:text-blue-500">
                Contacto
              </li>
            </Link>
            <Link
              to={
                userSessionState || (id && token)
                  ? "/upload-projects"
                  : "/login"
              }
            >
              <li className="mx-2 cursor-pointer hover:text-blue-500">
                {userSessionState || (id && token) ? (
                  "Subir Proyectos"
                ) : (
                  <AccountCircleIcon style={{ fontSize: "36px" }} />
                )}
              </li>
            </Link>
          </div>
          <div className="mx-4 md:hidden flex items-center">
            {isMobileMenuOpen ? (
              <CloseIcon
                className="text-white h-8 w-8 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <MenuIcon
                className="text-white h-8 w-8 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </ul>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-2 text-white text-xl font-bold">
            <Link to="/">
              <li className="cursor-pointer hover:text-blue-500" onClick={toggleMobileMenu}>Inicio</li>
            </Link>
            <Link to="/project">
              <li className="cursor-pointer hover:text-blue-500" onClick={toggleMobileMenu}>Proyectos</li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer hover:text-blue-500" onClick={toggleMobileMenu}>Contacto</li>
            </Link>
            <Link
              to={
                userSessionState || (id && token)
                  ? "/upload-projects"
                  : "/login"
              }
              onClick={toggleMobileMenu}
            >
              <li className="mx-2 cursor-pointer hover:text-blue-500" >
                {userSessionState || (id && token) ? (
                  "Subir Proyectos"
                ) : (
                  <AccountCircleIcon style={{ fontSize: "33px" }}  />
                )}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

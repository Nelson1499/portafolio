import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { authGoogle } from "../api/api.users";

const GoogleAuth = (props) => {
  const clientID =
    "74199433194-b5pspi1h3rdv2fcp3tqfn23lvckbb2js.apps.googleusercontent.com";
  const { setUserSessionState } = props;

  /**
   * Maneja el éxito del inicio de sesión o registro con Google y realiza la autenticación en el backend.
   * @param {Object} res - Datos del inicio de sesión automático con Google (resultado de la autenticación).
   * @param {function} authGoogle - Función para enviar los datos al backend y realizar la autenticación.
   */
  const onSuccess = (res) => {
    // Se envían los datos del perfil de Google al backend para autenticar el inicio de sesión o registro.
    authGoogle(res.profileObj)
      .then((res) => setUserSessionState(true)) // Se establece el estado de sesión del usuario como autenticado.
      .catch((e) => console.log(e)); // Se muestra un mensaje de error en caso de fallo en la autenticación.
  };

  const onFailure = (error) => {
    console.log("Ocurrió un problema: "+ error);
  };
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  return (
    <div>
      <GoogleLogin
        className="rounded text-black w-full justify-center"
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_policy"}
        rel="noopener noreferrer"
      >
        <h3 className="font-semibold text-base">Iniciar sesión con Google</h3>
      </GoogleLogin>
    </div>
  );
};

export default GoogleAuth;

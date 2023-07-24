import React, { useContext, useState } from "react";
import GoogleAuth from "../auth/GoogleAuth";
import Loginform from "../auth/Loginform";
import { UserContext } from "../provider/UserContext";

const Login = () => {
  const { setUserSessionState } = useContext(UserContext);
  return (
    <div className="mt-20">
      <div className="text-center bg-slate-700 bg-opacity-20 w-11/12 m-auto md:w-96 py-5 px-5">
        <h3 className="pb-2 font-semibold text-xl">Login</h3>
        <Loginform setUserSessionState={setUserSessionState} />
        <GoogleAuth setUserSessionState={setUserSessionState} />
      </div>
    </div>
  );
};

export default Login;

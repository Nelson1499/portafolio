import React from "react";
import Signupform from "../auth/Signupform";

const Signup = () => {
  return (
    <div className="mt-20">
      <div className="text-center bg-slate-700 bg-opacity-20 w-11/12 m-auto md:w-96 py-5 px-5">
        <h3 className="text-lg font-semibold">Sign Up</h3>
        <Signupform />
      </div>
    </div>
  );
};

export default Signup;

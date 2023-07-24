import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userSessionState, setUserSessionState] = useState(false);
  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  return (
    <UserContext.Provider
      value={{ userSessionState, setUserSessionState, token, id }}
    >
      {children}
    </UserContext.Provider>
  );
};

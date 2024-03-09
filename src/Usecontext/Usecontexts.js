import React from "react";

// Create a React context
export const UserContext = React.createContext();

// Create a context provider component
export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={"Shree"}>{children}</UserContext.Provider>
  );
};

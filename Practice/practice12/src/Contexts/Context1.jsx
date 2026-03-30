import { createContext } from "react";

export const ContextOne = createContext();

import React from "react";

export const ContextProvider = ({ children }) => {
  const [datA, setDatA] = useState("Hello World");

  return (
    <ContextOne.Provider value={[datA, setDatA]}>
      {children}
    </ContextOne.Provider>
  );
};

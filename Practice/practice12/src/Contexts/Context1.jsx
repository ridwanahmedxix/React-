import { createContext, useState } from "react";

export const ContextOne = createContext();

export const Context1Provider = ({ children }) => {
  const [datA, setDatA] = useState("Hello World");

  return (
    <ContextOne.Provider value={[datA, setDatA]}>
      {children}
    </ContextOne.Provider>
  );
};
rgb(0, 0, 0);

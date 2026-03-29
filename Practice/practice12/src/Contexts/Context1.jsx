import { createContext, useState } from "react";

export const ContextOne = createContext();

export const ContextProvider = () => {
  const [dataa, setDataa] = useState("Hello World");

  return (
    <div>
      <ContextOne.Provider value={[dataa, setDataa]}></ContextOne.Provider>
    </div>
  );
};

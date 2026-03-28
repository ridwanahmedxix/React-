import React, { createContext, useState } from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

export const AddContext = createContext();

const Appex = () => {
  const [card, setCard] = useState([]);

  const AddToCard = (singleProductReceive) => {
    const newCard = [...card, singleProductReceive];
    setCard(newCard);
  };

  return (
    <div className="flex gap-4 text-center ">
      <AddContext.Provider value={{ AddToCard, card }}>
        <Products></Products>
        <PlaceMent></PlaceMent>
      </AddContext.Provider>
    </div>
  );
};

export default Appex;

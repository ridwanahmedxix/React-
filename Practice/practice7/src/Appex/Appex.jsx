import React, { useState } from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

const Appex = () => {
  const [card, setCard] = useState([]);

  const AddToCard = (singleProduct) => {
    const newCard = [...card, singleProduct];
    setCard(newCard);
  };

  return (
    <div className="flex gap-x-5">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent card={card}></PlaceMent>
    </div>
  );
};

export default Appex;

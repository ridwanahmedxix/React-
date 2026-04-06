import React, { useState } from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

const Appex = () => {
  const [cart, setCart] = useState([]);

  const AddToCard = (singleDataRece) => {
    const newCard = [...cart, singleDataRece];
    setCart(newCard);
  };

  return (
    <div className="flex justify-between">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent cart={cart}></PlaceMent>
    </div>
  );
};

export default Appex;

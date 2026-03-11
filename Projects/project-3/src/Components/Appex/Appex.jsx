import React, { useState } from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

const Appex = () => {
  const [cardInfo, setCardInfo] = useState([]);

  const AddToCard = (singleDataReceve) => {
    const newCardInfo = [...cardInfo, singleDataReceve];
    setCardInfo(newCardInfo);
  };

  return (
    <div className="flex ">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent cardInfo={cardInfo}></PlaceMent>
    </div>
  );
};

export default Appex;

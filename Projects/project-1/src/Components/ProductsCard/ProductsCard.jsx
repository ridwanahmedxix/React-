import React, { useState } from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

const ProductsCard = () => {
  const [card, setCard] = useState([]);
  const AddToCard = (singleProduct) => {
    const newCard = [...card, singleProduct];
    setCard(newCard);
  };

  return (
    <div className=" m-[50px] flex text-center gap-5">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent card={card}></PlaceMent>
    </div>
  );
};

export default ProductsCard;

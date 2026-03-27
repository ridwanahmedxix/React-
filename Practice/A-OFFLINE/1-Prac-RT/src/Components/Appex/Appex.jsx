import React from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

const Appex = () => {
  const [card, setCard] = useState([]);

  const AddToCard = (singleProductReceive) => {
    const newCard = [...card, singleProductReceive];
    setCard(newCard);
  };

  return (
    <div className="flex gap-4">
      <Products AddToCard={AddToCard}></Products>
      <PlaceMent card={card}></PlaceMent>
    </div>
  );
};

export default Appex;

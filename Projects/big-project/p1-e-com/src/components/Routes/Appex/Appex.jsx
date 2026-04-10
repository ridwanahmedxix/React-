import React, { useState } from "react";
import Products from "../Products/Products";
import PlaceMent from "../PlaceMent/PlaceMent";

const Appex = () => {
  const [cart, setCart] = useState([]);

  const AddToCart = (singleDataRece) => {
    const newCart = [...cart, singleDataRece];
    setCart(newCart);
  };

  return (
    <div>
      <Products AddToCart={AddToCart}></Products>
      <PlaceMent key={cart.id} cart={cart}></PlaceMent>
    </div>
  );
};

export default Appex;

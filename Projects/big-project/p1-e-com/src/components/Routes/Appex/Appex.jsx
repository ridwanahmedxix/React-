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
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
        perferendis.
      </p> */}
    </div>
  );
};

export default Appex;

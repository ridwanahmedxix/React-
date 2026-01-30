import React from "react";
import "./Products.css";

const Products = () => {
  function btnClick() {
    const paraTag = document.querySelector(".paraTag");
    paraTag.innerText = " Hello I am next Compo";
  }

  return (
    <div>
      <p className="paraTag">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        molestias.
      </p>
      <button onClick={btnClick} className="clickBtn">
        Click Me
      </button>
    </div>
  );
};

export default Products;

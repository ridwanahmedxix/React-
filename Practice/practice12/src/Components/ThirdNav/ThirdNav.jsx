import React, { useContext } from "react";
import { ContextOne } from "../../Contexts/Context1";

const ThirdNav = () => {
  const [datA, setDatA] = useContext(ContextOne);

  return (
    <div>
      <button className="bg-red-400 py-3 px-4  my-4 text-3xl rounded ">
        ThirdNav - {}
      </button>
    </div>
  );
};

export default ThirdNav;

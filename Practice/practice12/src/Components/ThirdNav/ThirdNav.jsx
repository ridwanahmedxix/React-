import React, { useContext } from "react";
import { ContextOne } from "../../Contexts/Context1";

const ThirdNav = () => {
  const [dataa, setDataa] = useContext(ContextOne);

  return (
    <div>
      <button className="bg-purple-400 py-3 px-4  my-4 text-3xl rounded ">
        ThirdNav - {dataa}
      </button>
    </div>
  );
};

export default ThirdNav;

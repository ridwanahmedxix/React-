import React from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increaseHandle = () => {
    setCount(count + 1);
  };
  const decreaseHandle = () => {
    setCount(count - 1);
  };

  return [count, increaseHandle, decreaseHandle];
};

export default useCounter;

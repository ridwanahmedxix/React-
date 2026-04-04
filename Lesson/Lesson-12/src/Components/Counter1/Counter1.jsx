import useCounter from "../../Hook/useCounter/useCounter";

const Counter1 = () => {
  const [count, increaseHandle, decreaseHandle] = useCounter();

  return (
    <div>
      <h1> {count} </h1>
      <br />
      <button onClick={increaseHandle}> Increase - </button>
      <button onClick={decreaseHandle}> Decrease - </button>
    </div>
  );
};

export default Counter1;

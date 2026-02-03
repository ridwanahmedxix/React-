import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const products = [
    {
      name: "Laptop",
      price: 1200,
    },
    {
      name: "Mobile",
      price: 800,
    },
    {
      name: "Mouse",
      price: 150,
    },
  ];

  const cfAlert = () => {
    alert(" This is a Alert");
  };

  return (
    <div>
      {products.map((product) => (
        <Home product={product} clickAlert={cfAlert}></Home>
      ))}
    </div>
  );
}

export default App;

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

  return (
    <div>
      {products.map((product) => (
        <Home></Home>
      ))}
    </div>
  );
}

export default App;

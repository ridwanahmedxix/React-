import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const products = {
    name: "Laptop",
    price: 2700,
  };

  return (
    <div>
      <Home products={products}></Home>
    </div>
  );
}

export default App;

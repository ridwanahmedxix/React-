import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const homes = {
    name: "Ridwan Vila",
    price: 1100,
  };

  return (
    <div>
      <Home homes={homes}></Home>
    </div>
  );
}

export default App;

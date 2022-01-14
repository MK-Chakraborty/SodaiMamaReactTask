import { useState } from "react/cjs/react.development";
import "./App.css";
import Main from "./Components/Main/Main";
import TopNavbar from "./Components/TopNavbar/TopNavbar";

function App() {
  // const [quantityOfProduct, setquantityOfProduct] = useState(0);
  // const [totalCost, setTotalCost] = useState(0);
  return (
    <div className="App">
      <TopNavbar />
      <Main />
    </div>
  );
}

export default App;

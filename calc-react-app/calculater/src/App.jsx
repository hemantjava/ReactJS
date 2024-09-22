import { useState } from "react";
import "./App.css";
import ButtonComp from "./components/ButtonComp";
import Display from "./components/Display";

function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "Clr") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newCalVal = calVal + buttonText;
      setCalval(newCalVal);
    }
  };
  return (
    <div className="calculator">
      <Display displayVal={calVal} />
      <ButtonComp onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;

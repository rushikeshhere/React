import { useState } from "react";

import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else if (buttonText === "AC") {
      setCalVal("");
    } else {
      let value = calVal + buttonText;
      setCalVal(value);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttons handleButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;

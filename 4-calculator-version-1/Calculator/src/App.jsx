import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Buttons></Buttons>
    </div>
  );
}

export default App;

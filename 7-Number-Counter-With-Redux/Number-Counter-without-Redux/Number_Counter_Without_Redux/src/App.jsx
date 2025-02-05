import DisplayCounterValue from "./components/DisplayCounterValue";
import CounterControlButtons from "./components/CounterControlButtons";
import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Number Counter</h1>
        <DisplayCounterValue counter={count} />
        <CounterControlButtons setCount={setCount} count={count} />
      </div>
    </>
  );
}

export default App;

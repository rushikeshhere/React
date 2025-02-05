import "./App.css";
import CounterControlButtons from "./components/CounterControlButtons";
import DisplayCounterValue from "./components/DisplayCounterValue";

function App() {
  return (
    <>
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Number Counter</h1>
        <DisplayCounterValue />
        <CounterControlButtons />
      </div>
    </>
  );
}

export default App;

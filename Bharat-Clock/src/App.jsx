import ClockTitle from "./components/ClockTitle";
import Slogun from "./components/Slogun";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  });

  return (
    <center>
      <ClockTitle />
      <Slogun />
      <CurrentTime time={currentTime.toLocaleTimeString()} />
    </center>
  );
}

export default App;

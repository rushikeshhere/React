import ClockTitle from "./components/ClockTitle";
import Slogun from "./components/Slogun";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useMemo, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openTimePage, setOpenTimePage] = useState(false);

  useEffect(() => {
    console.log("interval setuped");

    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalID);
      console.log("interval cleared");
    };
  }, []);

  const handleToOpenTimePage = () => {
    setOpenTimePage(true);
  };

  const arr = [5, 7, 4, 2, 1, 9];

  const sortedArr = useMemo(() => {
    return [...arr].sort();
  }, [arr]);
  console.log(sortedArr);

  return (
    <center>
      {!openTimePage && (
        <WelcomeMessage onClickOpenTimePage={handleToOpenTimePage} />
      )}
      {openTimePage && <ClockTitle />}
      {openTimePage && <Slogun />}
      {openTimePage && (
        <CurrentTime
          date={currentTime.toLocaleDateString()}
          time={currentTime.toLocaleTimeString()}
        />
      )}
      {openTimePage && (
        <button onClick={() => setOpenTimePage(false)}>Close Time Page</button>
      )}
    </center>
  );
}

export default App;

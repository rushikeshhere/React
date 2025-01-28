import ClockTitle from "./components/ClockTitle";
import Slogun from "./components/Slogun";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openTimePage, setOpenTimePage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleToOpenTimePage = () => {
    console.log(`value of openTimePage: ${openTimePage}`);
    setOpenTimePage(true);
  };

  return (
    <center>
      {!openTimePage && (
        <WelcomeMessage onClickOpenTimePage={handleToOpenTimePage} />
      )}

      {openTimePage && <ClockTitle />}
      {openTimePage && <Slogun />}
      {openTimePage && <CurrentTime time={currentTime.toLocaleTimeString()} />}
      {openTimePage && (
        <button onClick={() => setOpenTimePage(false)}>Close Time Page</button>
      )}
    </center>
  );
}

export default App;

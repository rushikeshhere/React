import ClockTitle from "./components/ClockTitle";
import Slogun from "./components/Slogun";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <ClockTitle />
      <Slogun />
      <CurrentTime />
    </center>
  );
}

export default App;

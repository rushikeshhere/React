import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="content">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;

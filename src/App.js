import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;

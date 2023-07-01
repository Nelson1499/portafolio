import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

const App = () => {
  return (
    <Router className="min-h-screen h-max pb-1">
      <Navbar />
      <Routes />
    </Router>
  );
};

export default App;

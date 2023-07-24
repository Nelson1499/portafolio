import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { UserProvider } from "./provider/UserContext";
const App = () => {
  return (
    <Router className="min-h-screen h-max pb-1">
      <UserProvider>
        <Navbar />
        <Routes />
      </UserProvider>
    </Router>
  );
};

export default App;

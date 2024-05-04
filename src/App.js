import Navbar from "./components/shared/Navbar";
import { MiContextoProvider } from "./context/contextlanguaje";
import Home from "./pages/Home";
const App = () => {
  return (
    <section className="w-full md:w-[800px] m-auto">
      <MiContextoProvider>
        <div className="w-full flex  justify-center">
          <Navbar />
        </div>
        <main className="justify-center items-center">
          <Home />
        </main>
      </MiContextoProvider>
    </section>
  );
};

export default App;

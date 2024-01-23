import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <section className="w-full md:w-[800px] m-auto">
      <div className="w-full flex  justify-center">
        <Navbar />
      </div>
      <main className="justify-center items-center">
        <Home />
      </main>
    </section>
  );
};

export default App;

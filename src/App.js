import "./App.css";
import Footer from "./Componants/Footer";
import Home from "./Componants/Home";
import Navigation from "./Componants/Navigation";
import Project from "./Componants/Project";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Project />
      <Footer />
    </div>
  );
}

export default App;

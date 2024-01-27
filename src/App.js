import About from "./components/About";
import Bottom from "./components/Bottom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;

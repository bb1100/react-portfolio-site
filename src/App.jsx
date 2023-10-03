import Navigation from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Work2 from "./components/Work2";
import About from "./components/About";
import Skills from "./components/Skills";
import Promotion from "./components/Promotion";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Work />
      <Work2 />
      <About />
      <Skills />
      <Promotion />
      <Contact />
      <div className="App"></div>
    </>
  );
}

export default App;

import About from "./Components/About";

import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Error from "./UI/Error";

import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import Home from "./Home";
import NavBar from "../components/NavBar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;

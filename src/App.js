import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SocialLinks from "./components/SocialLinks";
import Space from "./three/Space";

function App() {
  return (
    <div>
      <Space />
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

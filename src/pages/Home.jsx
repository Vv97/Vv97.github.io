import { Contact } from "../component/Contactus/Contact";
import { Contribute } from "../component/Contribute/Contribute";
import Navbar from "../component/Navbar";
import Social from "../component/social/Social";
import About from "./about/About";
import Project from "./Project/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div
        className="homeWrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="social">
          <Social />
        </div>
        <div>
          <About />
        </div>

        <div>
          <Skills />
        </div>

        <div>
          <Contribute />
        </div>

        <div>
          <Project />
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;

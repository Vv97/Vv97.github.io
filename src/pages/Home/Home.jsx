import { Contact } from "../../component/Contactus/Contact";
import { Contribute } from "../../component/Contribute/Contribute";
import { GitStatus } from "../../component/gitstatus/GitStatus";
import Navbar from "../../component/Navbar";
import Social from "../../component/social/Social";
import About from "../about/About";
import Project from "../Project/Projects";
import Skills from "../skills/Skills";
import "./home.css";

const Home = () => {
  return (
    <div className="home" id="home">
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
        <div className="Spacing"></div>
        <div>
          <Contribute />
        </div>

        <div>
          <GitStatus />
        </div>

        <div className="Spacing"></div>
        <div>
          <Project />
        </div>

        <div className="Spacing"></div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;

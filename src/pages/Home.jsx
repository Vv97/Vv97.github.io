import Navbar from "../component/Navbar";
import Social from "../component/social/Social";
import About from "./about/About";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeWrapper">
        <div className="social">
          <Social />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;

import Navbar from "../component/Navbar";
import Social from "../component/social/Social";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeWrapper">
        <div className="social">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Home;

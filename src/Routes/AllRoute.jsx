import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Project from "../pages/Projects";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default AllRoute;

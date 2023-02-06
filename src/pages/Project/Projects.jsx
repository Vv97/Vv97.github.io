import "./Project.css";
import { DiReact, DiHtml5, DiCss3Full } from "react-icons/di";
import { BsCodeSlash, BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="Project">
      <h1 className="projectHeading">project</h1>
      <div className="ProjectWrapper">
        <div className="projectContent">
          <h1 className="projectcontentHeading">Travlo</h1>
          <div className="projectLogo">
            <img src="https://i.imgur.com/k6T9GR3.png" alt="" />
          </div>
          <div className="projectDiscreption">
            Travlo.com is a booking platform where travelers can book a flight
            hotel and rent car.
          </div>
          <div className="projectTechStack">
            <h3 className="projectTechStackTitle">Tech Stack :</h3>
            <div className="projectTeckStackContent">
              <div className="projectTeckStackcontentTitle">HTML</div>
              <div className="projectTeckStackcontentTitle">CSS</div>
              <div className="projectTeckStackcontentTitle">ReactJs</div>
            </div>
          </div>
          <div className="projectLinks">
            <div className="BsFillPlayFillCircle">
              <BsPlayFill className="projectLinksIconPlay" />
            </div>
            <div>
              <BsCodeSlash className="projectLinksIconCode" />
            </div>
          </div>
        </div>

        <div className="projectContent">
          <h1 className="projectcontentHeading">Travellia</h1>
          <div className="projectLogo">
            <img src="https://i.imgur.com/s7L5hfi.png" alt="" />
          </div>
          <div className="projectDiscreption">
            Travellia.com is a booking platform where travelers can book a
            flight hotel and rent car.
          </div>
          <div className="projectTechStack">
            <h3 className="projectTechStackTitle">Tech Stack :</h3>
            <div className="projectTeckStackContent">
              <div className="projectTeckStackcontentTitle">HTML</div>
              <div className="projectTeckStackcontentTitle">CSS</div>
              <div className="projectTeckStackcontentTitle">ReactJs</div>
              <div className="projectTeckStackcontentTitle">Chakraui</div>
              <div className="projectTeckStackcontentTitle">recat-Redux</div>
            </div>
          </div>
          <div className="projectLinks">
            <div className="BsFillPlayFillCircle">
              <BsPlayFill className="projectLinksIconPlay" />
            </div>
            <div>
              <BsCodeSlash className="projectLinksIconCode" />
            </div>
          </div>
        </div>

        <div className="projectContent">
          <h1 className="projectcontentHeading">Travlo</h1>
          <div className="projectLogo">
            <img src="https://i.imgur.com/7u6rElI.png" alt="" />
          </div>
          <div className="projectDiscreption">
            Booking.com is a booking platform where travelers can book a flight
            hotel and rent car.
          </div>
          <div className="projectTechStack">
            <h3 className="projectTechStackTitle">Tech Stack :</h3>
            <div className="projectTeckStackContent">
              <div className="projectTeckStackcontentTitle">HTML</div>
              <div className="projectTeckStackcontentTitle">CSS</div>
              <div className="projectTeckStackcontentTitle">ReactJs</div>
            </div>
          </div>
          <div className="projectLinks">
            <div className="BsFillPlayFillCircle">
              <BsPlayFill className="projectLinksIconPlay" />
            </div>
            <div>
              <BsCodeSlash className="projectLinksIconCode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

import "./Project.css";
import { BsCodeSlash, BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

let obj = [
  {
    title: "Travlo",
    deciption:
      "Travlo.com is a booking platform where travelers can book a flight hotel and rent car.",
    image: "https://i.imgur.com/YdDxYzK.jpg",
    techstack: ["HTML", "CSS", "ReactJs"],
    deploy: "https://booking-klprescq6-vv97.vercel.app/",
    github: "https://github.com/Vv97/alluring-room-2993",
  },

  {
    title: "Travellia",
    deciption:
      "Travellia.com is a booking platform where travelers can book a flight hotel and rent car.",
    image: "https://i.imgur.com/s7L5hfi.png",
    techstack: ["HTML", "CSS", "React", "Chakraui", "Redux"],
    deploy: "https://upbeat-afterthought-8396.vercel.app/",
    github: "https://github.com/Satyaranjan8414/upbeat-afterthought-8396",
  },

  {
    title: "ebuzz",
    deciption:
      "Travlo.com is a booking platform where travelers can book a flight hotel and rent car.",
    image: "https://i.imgur.com/9w2lUcF.jpg",
    techstack: [
      "HTML",
      "CSS",
      "javascript",
      "Chakraui",
      "Reactjs",
      "Redux",
      "MongoDB",
      "Express",
      "nodejs",
    ],
    deploy: "https://ret-vv97.vercel.app/",
    github: "https://github.com/Vv97/rampant-quiet-9349",
  },

  {
    title: "unbounce",
    deciption:
      "Unbounce helps you get more outta your marketing strategy. From pre-optimized landing pages to great copy .",
    image: "https://i.imgur.com/XFvlUbT.png",
    techstack: ["HTML", "CSS", "javascript"],
    deploy: "https://endearing-brioche-ffbcc5.netlify.app/",
    github: "https://github.com/Vv97/limitless-dress-2422",
  },
];

const Project = () => {
  return (
    <div className="Project" id="projects">
      <h1 className="projectHeading">project</h1>
      <div className="ProjectWrapper">
        {obj.length > 0 &&
          obj.map((user) => (
            <div className="projectContent project-card" key={user.title}>
              <h1 className="projectcontentHeading project-title">
                {user.title}
              </h1>
              <div className="projectLogo">
                <img src={user.image} alt="" />
              </div>
              <div className="projectDiscreption project-description">
                {user.deciption}
              </div>
              <div className="projectTechStack project-tech-stack">
                <h3 className="projectTechStackTitle">Tech Stack :</h3>
                <div className="projectTeckStackContent">
                  {user.techstack.length > 0 &&
                    user.techstack.map((el) => (
                      <div className="projectTeckStackcontentTitle project-tech-stack">
                        {el}
                      </div>
                    ))}
                </div>
              </div>
              <div className="projectLinks">
                <div className="BsFillPlayFillCircle">
                  <a
                    className="projectLinks project-deployed-link"
                    href={user.deploy}
                    target="_blank"
                  >
                    <BsPlayFill className="projectLinksIconPlay" />
                  </a>
                </div>
                <div>
                  <a href={user.github} target="_blank">
                    <BsCodeSlash className="projectLinksIconCode project-github-link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;

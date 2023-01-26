import skillsc from "./skills.module.css";
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiRedux, SiHeroku, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skillSets = [
  {
    id: 1,
    name: "HTML5",
    logo: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS3",
    logo: <FaCss3 />,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    logo: <SiJavascript />,
  },
  {
    id: 4,
    name: "REACT JS",
    logo: <FaReact />,
  },
  {
    id: 5,
    name: "NEXT JS",
    logo: <TbBrandNextjs />,
  },
  {
    id: 6,
    name: "TYPESCRIPT",
    logo: <SiTypescript />,
  },
  {
    id: 7,
    name: "HEROKU",
    logo: <SiHeroku />,
  },
  {
    id: 8,
    name: "REDUX",
    logo: <SiRedux />,
  },
  {
    id: 9,
    name: "REDUX",
    logo: <SiRedux />,
  },
  {
    id: 10,
    name: "REDUX",
    logo: <SiRedux />,
  },
  {
    id: 11,
    name: "REDUX",
    logo: <SiRedux />,
  },
];

const Skills = () => {
  return (
    <div className={skillsc.Skills}>
      <div className={skillsc.skillsWrapper}>
        <h1>My Skills</h1>

        <div className={skillsc.mySkills}>
          {skillSets?.map((user) => (
            <div className={skillsc.mySkillsLogo} key={user.id}>
              <div className={skillsc.SkillsHeading}>
                <h6>{user.name}</h6>
              </div>
              {user.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiHeroku,
  SiRedux,
  SiChakraui,
  SiExpress,
  SiVercel,
  SiCodesandbox,
  SiReplit,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import skillsc from "./skills.module.css";
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
    name: "JavaScript",
    logo: <SiJavascript />,
  },
  {
    id: 4,
    name: "React.js",
    logo: <FaReact />,
  },
  {
    id: 5,
    name: "Next.js",
    logo: <TbBrandNextjs />,
  },
  {
    id: 6,
    name: "TypeScript",
    logo: <SiTypescript />,
  },
  {
    id: 7,
    name: "Chakra UI",
    logo: <SiChakraui />,
  },
  {
    id: 8,
    name: "Node.js",
    logo: <FaNodeJs />,
  },
  {
    id: 9,
    name: "REDUX",
    logo: <SiRedux />,
  },
  {
    id: 10,
    name: "MongoDB",
    logo: <DiMongodb />,
  },
  {
    id: 11,
    name: "Express.js",
    logo: <SiExpress />,
  },
  {
    id: 12,
    name: "Heroku",
    logo: <SiHeroku />,
  },
  {
    id: 13,
    name: "Vercel",
    logo: <SiVercel />,
  },
  {
    id: 14,
    name: "Github",
    logo: <AiFillGithub />,
  },
  {
    id: 15,
    name: "Codesandbox",
    logo: <SiCodesandbox />,
  },
  {
    id: 16,
    name: "Replit",
    logo: <SiReplit />,
  },
  {
    id: 17,
    name: "VS Code",
    logo: <SiVisualstudiocode />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className={skillsc.Skills}>
      <div className={skillsc.skillsWrapper}>
        <h1>My Skills</h1>

        <div className={skillsc.mySkills}>
          {skillSets?.map((user) => (
            <div className={skillsc.mySkillsLogo} key={user.id}>
              <h6 className={skillsc.SkillsHeading}>{user.name}</h6>
              {user.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

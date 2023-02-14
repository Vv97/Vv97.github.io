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
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import skillsc from "./skills.module.css";
const skillSets = [
  {
    id: 1,
    name: "HTML5",
    logo: <FaHtml5 className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 2,
    name: "CSS3",
    logo: <FaCss3 className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: (
      <SiJavascript className={`${skillsc.skillsLogoitem} skills-card-img`} />
    ),
  },
  {
    id: 4,
    name: "React.js",
    logo: <FaReact className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 5,
    name: "Next.js",
    logo: (
      <TbBrandNextjs className={`${skillsc.skillsLogoitem} skills-card-img`} />
    ),
  },
  {
    id: 6,
    name: "TypeScript",
    logo: (
      <SiTypescript className={`${skillsc.skillsLogoitem} skills-card-img`} />
    ),
  },
  {
    id: 7,
    name: "Chakra UI",
    logo: (
      <SiChakraui className={`${skillsc.skillsLogoitem} skills-card-img`} />
    ),
  },
  {
    id: 8,
    name: "Node.js",
    logo: <FaNodeJs className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 9,
    name: "REDUX",
    logo: <SiRedux className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 10,
    name: "MongoDB",
    logo: <DiMongodb className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 11,
    name: "Express.js",
    logo: <SiExpress className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 12,
    name: "Heroku",
    logo: <SiHeroku className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 13,
    name: "Vercel",
    logo: <SiVercel className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 14,
    name: "Github",
    logo: (
      <AiFillGithub className={`${skillsc.skillsLogoitem} skills-card-img`} />
    ),
  },
  {
    id: 15,
    name: "Codesandbox",
    logo: (
      <SiCodesandbox className={`${skillsc.skillsLogoitem} skills-card-img`} />
    ),
  },
  {
    id: 16,
    name: "Replit",
    logo: <SiReplit className={`${skillsc.skillsLogoitem} skills-card-img`} />,
  },
  {
    id: 17,
    name: "VS Code",
    logo: (
      <SiVisualstudiocode
        className={`${skillsc.skillsLogoitem} skills-card-img`}
      />
    ),
  },
];

const Skills = () => {
  return (
    <div id="skills" className={skillsc.Skills}>
      <div className={skillsc.skillsWrapper}>
        <h1>My Skills</h1>

        <div className={skillsc.mySkills}>
          {skillSets?.map((user) => (
            <div
              className={`${skillsc.mySkillsLogo} ${skillsc.bounce} skills-card`}
              key={user.id}
            >
              <h6 className={`${skillsc.SkillsHeading} skills-card-name`}>
                {user.name}
              </h6>

              {user.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

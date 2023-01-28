import about from "./about.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={about.about} id="about">
      <div className={about.aboutWrapper}>
        <div className={about.aboutImg}>
          <img src="https://i.ibb.co/bBBFVxS/profile-pic.png" alt="" />
          <div className={about.aboutHeading2Container}>
            <h1 className={about.aboutHeading2}>ABOUT ME</h1>
          </div>
        </div>
        <div className={about.aboutText}>
          <h1>ABOUT ME</h1>
          <p>
            Motivated and innovative aspiring full-stack web developer with
            hands-on experience in building websites with MERN stack and various
            web technologies including HTML, CSS, and JS. Curious to learn about
            emerging web technologies. Looking forward to making a significant
            contribution to an organization through dedicated effort.
          </p>

          <div className={about.aboutSocialHandle}>
            <div>
              <a
                href="https://github.com/Vv97"
                target="_blank"
                className={about.aboutSocialLinks}
              >
                <AiOutlineInstagram />
              </a>
            </div>
            <div>
              <a href="" className={about.aboutSocialLinks}>
                <AiOutlineLinkedin />
              </a>
            </div>
            <div>
              <a href="" className={about.aboutSocialLinks}>
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

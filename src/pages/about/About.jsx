import about from "./about.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { RxDownload } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about section" id="about">
      <div className={about.aboutWrapper}>
        <div className={about.aboutImg}>
          <img
            className="home-img"
            src="https://i.imgur.com/ud5zKGH.png"
            alt=""
          />
          <div className={about.aboutHeading2Container}>
            <h1 className={about.aboutHeading2}>ABOUT ME</h1>
          </div>
        </div>
        <div className={about.aboutText}>
          <h1>ABOUT ME</h1>
          <p id="user-detail-intro">
            Motivated and innovative aspiring full-stack web developer with
            hands-on experience in building websites with MERN stack and various
            web technologies including HTML, CSS, and JS. Curious to learn about
            emerging web technologies. Looking forward to making a significant
            contribution to an organization through dedicated effort.
          </p>

          <div className={about.aboutSocialHandle}>
            <div className={about.aboutBounce}>
              <a
                href="https://www.linkedin.com/in/vishal-varma-96a9bb241/"
                id="contact-linkedin"
                className={about.aboutSocialLinks}
                target="_blank"
              >
                <AiOutlineLinkedin />
              </a>
            </div>
            <div className={about.aboutBounce}>
              <a
                href="https://github.com/Vv97"
                id="contact-github"
                className={about.aboutSocialLinks}
                target="_blank"
              >
                <AiOutlineGithub />
              </a>
            </div>
            <div className={about.resumeBtn}>
              <a href="">
                <div className={about.rest}>
                  Resume <RxDownload className={about.resumeBtnIcon} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import about from "./about.module.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { RxDownload } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import "./about.css";
import { redirect } from "../../component/redirect/rd";

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
          <h1>About </h1>
          <p id="user-detail-intro">
            Motivated and innovative aspiring full-stack web developer with
            hands-on experience in building websites with MERN stack and various
            web technologies including HTML, CSS, and JS. Curious to learn about
            emerging web technologies. Looking forward to making a significant
            contribution to an organization through dedicated effort.
          </p>

          <div className={about.aboutSocialHandle}>
            <Tooltip title="linkedin">
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
            </Tooltip>
            <Tooltip title="github">
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
            </Tooltip>
            <div className={about.resumeBtn}>
              <a
                href="https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6"
                download
                onClick={redirect}
                className="navbarResumelink"
                id="resume-link-2"
              >
                <button
                  id="resume-button-2"
                  style={{ border: "none" }}
                  className={about.rest}
                  // onClick={redirect}
                >
                  Resume <RxDownload className={about.resumeBtnIcon} />
                </button>
              </a>
              {/* <a
                href="https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6"
                download
                id="resume-button-2"
              >
                <button
                  style={{ border: "none", fontSize: "1.1rem" }}
                  className={about.rest}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6/view?usp=share_link"
                    )
                  }
                >
                  Resume{" "}
                </button>
              </a> */}

              {/* <button
                style={{ border: "none", fontSize: "1.1rem" }}
                className={about.rest}
                id="resume-button-2"
                // onClick={redirect}
              >
                <a
                  id="resume-link-2"
                  href="https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6"
                  download="Vishal_Varma_Resume"
                >
                  Resume
                </a>
              </button> */}
              {/* 
              <button
                id="resume-button-2"
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6")
                }
              >
                <a
                  href="https://drive.google.com/file/d/1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6/view"
                  target="_blank"
                >
                  {" "}
                  RESUME
                </a>
              </button> */}
              {/* 
              <a
                id="resume-link-2"
                href="https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6"
                onClick={redirect}
                download
              >
                <button id="resume-link-2">Resume</button>
              </a>
               */}

              {/* <button id="resume-button-2" onClick={redirect}>
                <a
                  href="https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6"
                  download
                  id="resume-link-2"
                >
                  Resume
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
{
  /* <RxDownload
                    style={{ fontSize: "1rem" }}
                    className={about.resumeBtnIcon}
                  /> */
}

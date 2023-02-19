import { Link } from "react-scroll";
import navbar from "./navbar.module.css";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import "./nav.css";
import { useState } from "react";
import { Dropdown } from "./Dropdown/Dropdown";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div id="nav-menu" className={`${navbar.navbar} `}>
      <div className={`${navbar.navWrapper} `}>
        <div className={`${navbar.navLogo} `}>
          <h1>Vishal</h1>
        </div>
        <div className={`${navbar.navMenu}`}>
          <ul className={`${navbar.navList}  ${navbar.grid}`}>
            <li>
              <Link
                to="/"
                id="nav-link"
                className={`${navbar.navLinks}  navli nav-link home`}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                id="nav-link"
                to="about"
                className={`${navbar.navLinks}  navli nav-link  about`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                id="nav-link"
                className={`${navbar.navLinks}  navli nav-link skills`}
                activeClass="activeNavLinks"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                id="nav-link"
                to="project"
                className={`${navbar.navLinks} navli nav-link projects`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                id="nav-link"
                to="contact"
                className={`${navbar.navLinks} navli nav-link contact`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                id="nav-link"
                to="/resume"
                className={`${navbar.navLinks} navli nav-link resume`}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>

        {toggle ? (
          <div
            className={navbar.hamburger}
            onClick={() => settoggle((prev) => !prev)}
          >
            <RiMenuUnfoldLine />
            <Dropdown settoggle={settoggle} />
          </div>
        ) : (
          <div
            className={navbar.hamburger}
            onClick={() => settoggle((prev) => !prev)}
          >
            <RiMenuFoldLine />
          </div>
        )}
      </div>
    </div>
  );
}

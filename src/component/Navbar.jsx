import { Link } from "react-scroll";
import navbar from "./navbar.module.css";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import "./nav.css";
import { useState } from "react";
import { Dropdown } from "./Dropdown/Dropdown";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className={`${navbar.navbar}  nav-menu  `}>
      <div className={`${navbar.navWrapper} `}>
        <div className={`${navbar.navLogo} `}>
          <h1>Vishal</h1>
        </div>
        <div className={`${navbar.navMenu}`}>
          <ul className={`${navbar.navList}  ${navbar.grid}`}>
            <li>
              <Link
                to="/"
                className={`${navbar.navLinks}  navli  nav-link`}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className={`${navbar.navLinks}  navli  nav-link`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                className={`${navbar.navLinks} nav-link`}
                activeClass="activeNavLinks"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link to="project" className={`${navbar.navLinks} nav-link`}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" className={`${navbar.navLinks} nav-link`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className={`${navbar.navLinks} nav-link`}>
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

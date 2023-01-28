import { Link } from "react-scroll";
import navbar from "./navbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { BiDockTop } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsWindows } from "react-icons/bs";
import "./nav.css";
import { useState } from "react";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className={navbar.navbar}>
      <div className={`${navbar.navWrapper} `}>
        <div className={`${navbar.navLogo} `}>
          {" "}
          <h1>Vishal</h1>{" "}
        </div>
        <div
          className={
            toggle
              ? `${navbar.navMenu} ${navbar.showmenu} `
              : `${navbar.navMenu}`
          }
        >
          <ul className={`${navbar.navList}  ${navbar.grid}`}>
            <li>
              <Link to="/" className={`${navbar.navLinks}  navli`}>
                <AiOutlineHome
                  className={`${navbar.uli} ${navbar.navIcons} `}
                />
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className={`${navbar.navLinks}  navli`}>
                <RxPerson className={`${navbar.uli} ${navbar.navIcons}`} />
                About
              </Link>
            </li>
            <li>
              <Link to="skills" className={navbar.navLinks}>
                <AiOutlineFileText
                  className={`${navbar.uli} ${navbar.navIcons}`}
                />
                Skills
              </Link>
            </li>
            <li>
              <Link to="project" className={navbar.navLinks}>
                <AiOutlineProject
                  className={`${navbar.uli} ${navbar.navIcons}`}
                />
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" className={navbar.navLinks}>
                <MdOutlineContactPage
                  className={`${navbar.uli} ${navbar.navIcons}`}
                />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className={navbar.navLinks}>
                <BiDockTop className={`${navbar.uli} ${navbar.navIcons}`} />
                Resume
              </Link>
            </li>
          </ul>
          <RxCross2
            className={`${navbar.navclose} ${navbar.showmenu}`}
            onClick={() => settoggle(!toggle)}
          />
        </div>

        <div className={navbar.navToggle} onClick={() => settoggle(!toggle)}>
          <BsWindows className={`${navbar.uli} ${navbar.uli_app}`} />
        </div>
      </div>
    </div>
  );
}

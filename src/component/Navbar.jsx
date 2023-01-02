import { NavLink } from "react-router-dom";
import navbar from "./navbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { BiDockTop } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsWindows } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.navWrapper}>
        <div className={navbar.navLogo}>Vishal</div>
        <div className={navbar.navMenu}>
          <ul className={`${navbar.navList}  ${navbar.grid}`}>
            <li>
              <NavLink to="/" className={navbar.navLinks}>
                <AiOutlineHome className={`${navbar.uli} ${navbar.navIcons}`} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navbar.navLinks}>
                <RxPerson className={`${navbar.uli} ${navbar.navIcons}`} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={navbar.navLinks}>
                <AiOutlineFileText
                  className={`${navbar.uli} ${navbar.navIcons}`}
                />
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={navbar.navLinks}>
                <AiOutlineProject
                  className={`${navbar.uli} ${navbar.navIcons}`}
                />
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navbar.navLinks}>
                <MdOutlineContactPage
                  className={`${navbar.uli} ${navbar.navIcons}`}
                />
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={navbar.navLinks}>
                <BiDockTop className={`${navbar.uli} ${navbar.navIcons}`} />
                Resume
              </NavLink>
            </li>
          </ul>
          <RxCross2 className={navbar.navclose} />
        </div>

        <div className={navbar.navToggle}>
          <BsWindows className={`${navbar.uli} ${navbar.uli_app}`} />
        </div>
      </div>
    </div>
  );
}

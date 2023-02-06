import "./dropdown.css";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageAdd } from "react-icons/bi";
import { VscExtensions } from "react-icons/vsc";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { BsFileEarmarkText } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export const Dropdown = ({ settoggle }) => {
  return (
    <div className="Dropdown">
      <div className="DropdowncrossIcon">
        <RxCross2 className="dropdowniconCriss" />
      </div>
      <ul className="DropdownWrapper">
        <li className="NavdropdownLink">
          <AiOutlineHome />
          <Link to="/">Home</Link>
        </li>
        <li className="NavdropdownLink">
          <AiOutlineUser />
          <Link to="about">About</Link>
        </li>
        <li className="NavdropdownLink">
          <BsFileEarmarkText />
          <Link to="skills">Skills</Link>
        </li>
        <li className="NavdropdownLink">
          <VscExtensions />
          <Link to="project">Project</Link>
        </li>
        <li className="NavdropdownLink">
          <BiMessageAdd />
          <Link to="Contact">Contact</Link>
        </li>
        <li className="NavdropdownLink">
          <HiOutlineFolderDownload />
          <Link to="*">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

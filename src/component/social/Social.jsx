import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./social.module.css";

export default function Social() {
  return (
    <div className={`${styles.homeSocial}`}>
      <div className={`${styles.SocialWrapper}`}>
        <p>Hi,my name is</p>
        <h1>Vishal Varma</h1>
        <p>Full Stack Web Developer</p>

        <div style={{ marginTop: "25px" }}>
          <a href="#">
            <button className={`${styles.socialBtn}`}>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

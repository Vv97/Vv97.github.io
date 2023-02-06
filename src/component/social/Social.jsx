import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./social.module.css";

export default function Social() {
  return (
    <div className={`${styles.homeSocial}`}>
      <div className={`${styles.SocialWrapper}`}>
        <p className={styles.styleNameTitle}>Hi,my name is</p>
        <h1 className={styles.styleHeadingTitle}>Vishal Varma</h1>
        <p className={styles.styleNameTitle1}>Full Stack Web Developer</p>

        <div style={{ marginTop: "25px" }}>
          <a
            href="https://drive.google.com/uc?export=download&id=1ttdpAgk_U3UTO5BkB5QM2Xwwrp5zH0o6"
            download
          >
            <button className={`${styles.socialBtn}`}>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

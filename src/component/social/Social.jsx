import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./social.module.css";

export default function Social() {
  const naviigate = useNavigate();

  function handleClick() {}
  return (
    <div className={`${styles.homeSocial}`}>
      <div className={`${styles.SocialWrapper}`}>
        <p className={styles.styleNameTitle}>Hi,my name is</p>
        <h1 id="user-detail-name" className={styles.styleHeadingTitle}>
          Vishal Varma
        </h1>
        <p id="user-detail-intro" className={styles.styleNameTitle1}>
          Full Stack Web Developer
        </p>

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

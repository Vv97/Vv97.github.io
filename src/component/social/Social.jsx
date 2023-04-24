import React from "react";
import { Link } from "react-scroll";
import styles from "./social.module.css";

export default function Social() {
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
          <Link to="contact">
            <button className={`${styles.socialBtn}`}>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

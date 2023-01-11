import about from "./about.module.css";

const About = () => {
  return (
    <div className={about.about}>
      <div className={about.aboutWrapper}>
        <div className={about.aboutImg}>
          <img src="https://i.ibb.co/bBBFVxS/profile-pic.png" alt="" />
        </div>
        <div className={about.aboutText}>
          <h1>ABOUT ME</h1>
          <p>
            Motivated and innovative aspiring full-stack web developer with
            hands-on experience in building websites with MERN stack and various
            web technologies including HTML, CSS, and JS. Curious to learn about
            emerging web technologies. Looking forward to making a significant
            contribution to an organization through dedicated effort.
          </p>

          <div className={about.aboutSocialHandle}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

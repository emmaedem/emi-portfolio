import styles from '../profile/profile.module.css';


const Profile = () => {
  return (
    <section className={styles.Container} id="About">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <img src="about/Emmanuel.jpg" alt="Emmanuel Pix" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="about/cursorIcon.png" alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                I am a frontend engineer who builds responsive and scalable web applications
                using technologies like React, HTML, CSS, and JavaScript. I have a strong
                understanding of modern web development practices, ensuring the sites I build
                work seamlessly across different devices and platforms.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="about/serverIcon.png" alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                I have experience in backend technologies like Node.js, Express, and MongoDB. I ensure seamless
                integration between frontend and backend systems, building scalable and efficient
                APIs to support web applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="./contact/github.png" alt="Github Icon" />
            <div className={styles.aboutItemText}>
              <h3>Git</h3>
              <p>
                I have experience using Git for version control, allowing me to track changes,
                manage code versions, and collaborate seamlessly with teams. I am proficient in
                Git workflows like branching, merging, and pull requests, ensuring efficient
                project management and code stability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;

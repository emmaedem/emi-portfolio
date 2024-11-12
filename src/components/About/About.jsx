import styles from '../About/About.module.css';

const About = () => {
  return (
    <section className={styles.container} id="Home">
      <div className={styles.content}>
        <h1 className={styles.title}>I&#39;m Emmanuel Edem</h1>
        <p className={styles.description}>
          I&#39;m a Fullstack Web Developer with a strong focus on front-end development using React. I build efficient and scalable web applications, leveraging technologies like Node.js, Express, and MongoDB. My passion lies in creating seamless user experiences and solving complex problems through code.
        </p>     
        <a className={styles.contact} href="mailto:emmaontop86@yahoo.com">Contact Me</a>
      </div>
      <img src="about/Emmanuel.jpg" alt="Emmanuel's Image" className={styles.aboutImage} />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  );
}

export default About;




import styles from '../Contact/Contact.module.css';

const Contact = () => {
    return (
        <footer className={styles.container} id="Contact">
            <div className={styles.title}>
                <h2>Contact</h2>
                <p>You can reach out via</p>
            </div>
            
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="./contact/email.png" alt="Email Icon" />
                    <a href="mailto:emmaontop86@yahoo.com">Email</a>
                </li>

                <li className={styles.link}>
                    <img src="./contact/github.png" alt="Github Icon" />
                    <a href="https://www.github.com/emmaedem" target="_blank" rel="noopener noreferrer">Github</a>
                </li>

                <li className={styles.link}>
                    <img src="./contact/Linkedin.png" alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/emmaedem86" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>

                <li className={styles.link}>
                    <img src="./contact/facebook.png" alt="Facebook Icon" />
                    <a href="https://www.facebook.com/emmaedem86" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>

                <li className={styles.link}>
                    <img src="./contact/twitter.png" alt="Twitter Icon" />
                    <a href="https://www.twitter.com/emmaedem86" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;

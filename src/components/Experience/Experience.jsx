import styles from './Experience.module.css';
import { getImageUrl } from "../../utils.js";
import skills from "../../data/skills.json";

const Experience = () => {
    return (
        <section className={styles.Container} id="experience">
            <h2>Experience</h2>
            <div>
                {skills.map((skill, id) => {
                    return (
                        <div key={id}>
                            <div>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                <p>{skill.title}</p>
                            </div>
                        </div>
                    );
                })};
                
            </div>
        </section>
    );
};

export default Experience;

import styles from './Experience.module.css';
import { getImageUrl } from "../../utils.js";
import skills from "../data/skills.json";


 const Experience = () => {
    return (
        <section className={styles.Container} id="Experience">
            <h2>Experience</h2>
            <div>
                <div>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                <p>{skill.title}</p>
                            </div>
                        )
                    
                })}
                    

                </div>
                <ul>

                </ul>

            </div>

    
           
      
        </section>
    
    )
}

export default Experience

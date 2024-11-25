import styles from './Skills.module.css';
import {getImageUrl} from "../../utils.js";


 const Skills = () => {
    return (
        <section className={styles.Container} id="Work">
            <h2>Experince</h2>
            <div>
                <div>
                    {Skills.map((skill, id) => {
                        return (
                            <div key={id}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                <p>{skill.title}</p>
                            </div>
                        )
                    
                })};
                    

                </div>
                <ul>

                </ul>

            </div>

            
            
            
            


            
    
           
      
        </section>
    
    )
}

export default Skills

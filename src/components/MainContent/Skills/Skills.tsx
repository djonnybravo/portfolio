import React from 'react';
import styles from './Skills.module.css'
import react from '../../../assets/icons/react.svg'

const Skills = () => {

const skills = [
    {id: 1, title: "HTML", img: react},
    {id: 2, title: "CSS", img: react},
    {id: 2, title: "Javascript", img: react},
    {id: 2, title: "Typescript", img: react},
    {id: 3, title: "React", img: react},
    {id: 4, title: "Redux", img: react},
    {id: 5, title: "GIT", img: react},
    {id: 6, title: "Storybook", img: react},
    {id: 6, title: "Unit Tests", img: react},

]

    return (
        <section>
            <div className={styles.skillsContainer}>
                <h2>Навыки</h2>
                <div className={styles.skillsList}>
                    {skills.map(i => {
                        return (
                            <div className={styles.skillItem} key={i.id}>
                                <img src={i.img} alt={i.title}/>
                                <h3>{i.title}</h3>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default Skills;
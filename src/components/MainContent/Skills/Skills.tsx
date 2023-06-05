import React from 'react';
import styles from './Skills.module.css'

const Skills = () => {

const skills = [
    {id: 1, title: "HTML", img: ""},
    {id: 2, title: "CSS", img: ""},
    {id: 2, title: "Javascript", img: ""},
    {id: 2, title: "Typescript", img: ""},
    {id: 3, title: "React", img: ""},
    {id: 4, title: "Redux", img: ""},
    {id: 5, title: "GIT", img: ""},
    {id: 6, title: "Storybook", img: ""},
    {id: 6, title: "Unit Tests", img: ""},

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
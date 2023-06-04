import React from 'react';
import styles from './Skills.module.css'
const Skills = () => {

    const skills = [
        {id: 1, title: "React", description: "some text", img: ""},
        {id: 3, title: "React", description: "some text", img: ""},
        {id: 4, title: "React", description: "some text", img: ""},
        {id: 5, title: "React", description: "some text", img: ""},
        {id: 7, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
        {id: 6, title: "React", description: "some text", img: ""},
    ]


    return (
        <div className={styles.container}>
            <h2>Навыки</h2>
            <div className={styles.skills__block}>
                {skills.map(s => {
                   return (
                        <div key={s.id} className={styles.skill__item}>
                            <img src={s.img} alt="IMAGE"/>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                        </div>
                   )})}

            </div>
        </div>


    );
};

export default Skills;
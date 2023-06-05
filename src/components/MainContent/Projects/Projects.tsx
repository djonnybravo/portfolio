import React from 'react';
import styles from "./Project.module.css";




const Projects = () => {

    const projects = [
        {id: 1, title: "Todo", img: "", ghUrl: "", ghpagesURL: "", description: "some text"},
        {id: 1, title: "SocialNetWork", img: "", ghUrl: "", ghpagesURL: "", description: "some text"},
        {id: 1, title: "Cards", img: "", ghUrl: "", ghpagesURL: "", description: "some text"},
        {id: 1, title: "Todo", img: "", ghUrl: "", ghpagesURL: "", description: "some text"},
    ]


    return (
        <section>
            <div className={styles.projectsContainer}>
                <h2>Проекты</h2>
                <div className={styles.projectsList}>
                    {projects.map(i => {
                        return (
                            <div className={styles.projectItem} key={i.id}>
                                <img src={i.img} alt={i.title}/>
                                <h3>{i.title}</h3>
                                <a href={i.ghUrl}>Посмотреть проект на GitHub</a>
                                <a href={i.ghpagesURL}>Посмотреть проект на GitHub Pages</a>
                                <p>description</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default Projects;
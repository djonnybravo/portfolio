import React from 'react';
import styles from './MainContent.module.css'
import Profiler from "./Profiler/Profiler";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import HireMe from "./HireMe/HireMe";
import ContactForm from "./ContactForm/ContactForm";

const MainContent = () => {
    return (
        <main>
            <article className={styles.mainContentContainer}>
                <Profiler/>
                <Skills/>
                <Projects/>
                <HireMe/>
                <ContactForm/>

            </article>
        </main>
    );
};

export default MainContent;
import React from 'react';
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ContactForm from "./ContactForm/ContactForm";
import Greetings from "./Greetings/Greetings";
import HireMe from "./Wishes/HireMe";

const MainContent = () => {
    return (
        <main>
            <Greetings/>
            <Skills/>
            <Projects/>
            <HireMe/>
            <ContactForm/>
        </main>
    );
};

export default MainContent;
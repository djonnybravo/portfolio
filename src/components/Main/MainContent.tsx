import React from 'react';
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ContactForm from "./ContactForm/ContactForm";
import Greetings from "./Greetings/Greetings";
import Wishes from "./Wishes/Wishes";

const MainContent = () => {
    return (
        <main>
            <Greetings/>
            <Skills/>
            <Projects/>
            <Wishes/>
            <ContactForm/>
        </main>
    );
};

export default MainContent;
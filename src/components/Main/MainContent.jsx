import React from 'react';
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ContactForm from "./ContactForm/ContactForm";
import Greetings from "./Greetings/Greetings";

const MainContent = () => {
    return (
        <main>
            <Greetings/>
            <Skills/>
            <Projects/>
            <div>
                mywaiting
            </div>
            <ContactForm/>

        </main>
    );
};

export default MainContent;
import React from 'react';

const ContactForm = () => {

    return (
        <form >
            <fieldset>
                <label htmlFor="">your name: <input type="text"/></label>
                <label htmlFor="">your email: <input type="text"/></label>
                <label htmlFor="">message:<textarea name="" id="" ></textarea></label>
            </fieldset>
        </form>
    );
};

export default ContactForm;
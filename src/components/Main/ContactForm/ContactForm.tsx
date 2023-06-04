import React from 'react';
import styles from './ContactForm.module.css'
const ContactForm = () => {

    return (
        // <div className={styles.container}>
        //     <div className={styles.contacts}>
        //         <h3>Контакты</h3>
        //         <span>телефон</span>
        //         <span>телеграм</span>
        //     </div>
            <form className={styles.form}  action={'/'} method="post">
                <fieldset>
                    <legend>Напишите мне</legend>
                    <label >your name: <input type="text"/></label>
                    <label >your email: <input type="text"/></label>
                    <label>Text</label>
                    <label ><textarea name="" id="" ></textarea></label>
                </fieldset>
            </form>

        // </div>

    );
};

export default ContactForm;
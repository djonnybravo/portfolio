import React from 'react';
import styles from './ContactForm.module.css'

const ContactForm = () => {

    return (
        <div className={styles.feedbackContainer}>
            <section id={"feedback"}>
                <h1>Форма обратной связи</h1>
                <form>

                    <div className={styles.field}>
                        <input type={"text"} id={"name"} placeholder={"Как Вас зовут?"}/>
                        <label htmlFor={"name"}>Имя</label>
                    </div>

                    <div className={styles.field}>
                        <input type={"text"} id={"email"} placeholder={"Ваш e-mail адрес"}/>
                        <label htmlFor={"email"}>E-mail</label>
                    </div>

                    <div className={styles.field}>
                        <textarea id="msg" rows={4} placeholder={"Ваше сообщение"}/>
                        <label htmlFor="msg">Текст</label>
                    </div>

                    <input className="button" type="submit" value="Отправить"/>

                </form>
            </section>
        </div>

    );
};

export default ContactForm;
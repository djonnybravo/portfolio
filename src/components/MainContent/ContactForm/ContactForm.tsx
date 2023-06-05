import React from 'react';
import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <section>
            <div className={styles.container}>

                <div className={styles.content}>

                    <div className={styles.leftSide}>
                        <div className="address details">

                            <i className="fas fa-map-marker-alt"></i>

                            <div className="topic">Адрес</div>
                            <div className="text-one">г. Москва</div>
                            <div className="text-two">Пресненская наб., 8 стр. 1</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Телефон</div>
                            <div className="text-one">8-800-000-00-00</div>
                            <div className="text-two">8-900-000-00-00</div>
                        </div>
                        <div className={styles.details}>
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">support@site.com</div>
                            <div className="text-two">admin@site.com</div>
                        </div>
                    </div>


                    <div className={styles.rightSide}>


                        <div className={styles.topicText}>Отправьте нам сообщение</div>


                        <p>
                            Если у вас есть какие-то вопросы или предложения по сотрудничеству -
                            заполните форму ниже
                        </p>

                        <form action="#">

                            <div className={styles.inputBox}>
                                <input type={"text"} placeholder={"Ваше имя"}/>
                            </div>
                            <div className={styles.inputBox}>
                                <input type={"text"} placeholder={"Введите email"}/>
                            </div>
                            <div className={styles.inputBox}>
                                <input type={'text'} placeholder={"Введите телефон"}/>
                            </div>
                            <div className={styles.inputBox + " " + styles.messageBox}>
                                <textarea placeholder={'Сообщение'}></textarea>
                            </div>
                            <div className={styles.button}>
                                <input type={'button'} value={'Отправить'}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactForm;
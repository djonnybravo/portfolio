import React from 'react';
import styles from './Greetings.module.css'

const Greetings = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hello}>
                <span>Привет мир!</span>
                <h1>Евгений Соловьев</h1>
                <p>и я Frontend разработчик</p>
            </div>
            <div className={styles.photo}>
                <img src='' alt="photo"/>
            </div>
        </div>
    );
};

export default Greetings;
import React from 'react';
import styles from './Greetings.module.css'

const Greetings = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hello}>
                <h1>Hello World</h1>
                <h2>Evgenis Solovev</h2>
                <p>Some text</p>
            </div>
            <div className={styles.photo}>
                <img src='img/all-144.png' alt="photo"/>
            </div>
        </div>
    );
};

export default Greetings;
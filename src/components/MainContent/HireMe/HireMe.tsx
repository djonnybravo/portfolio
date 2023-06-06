import React from 'react';
import styles from './HireMe.module.css'

const HireMe = () => {
    return (
        <section>
            <div className={styles.container}>
                <button onClick={() => {alert('CV')}}>Скачать CV</button>
            </div>
        </section>
    );
};

export default HireMe;
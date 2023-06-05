import React from 'react';
import styles from './Profiler.module.css'
import photo from '../../../assets/images/ava.png'


const Profiler = () => {
    return (
        <section>
            <div className={styles.profilerContainer}>

                <div className={styles.profilerText}>

                    <h1>Евгений Соловьев</h1>
                    <p>Frontend Разработчик</p>
                </div>

                <div className={styles.profilerPhoto}>
                    <img src={''} alt={'PHOTO'}></img>
                </div>

            </div>
        </section>
    );
};

export default Profiler;
import React from 'react';
import styles from './HireMe.module.css'
import Button from "../../UI/Button";

const HireMe = () => {
    return (
        <div className={styles.container}>
            <span>Рассматриваю варианты работы в офисе/гибрид </span>
            <Button/>
        </div>
    );
};

export default HireMe;
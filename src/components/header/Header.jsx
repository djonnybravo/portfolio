import React from 'react';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__social}>
                socialmedialinks
            </div>
            <div className={styles.header__navLinks}>
                <a href="#">Главная</a>
                <a href="#">Скилы</a>
                <a href="#">Работы</a>
                <a href="#">Контакты</a>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__social}>
                socialmedialinks
            </div>
            <nav className={styles.header__navLinks}>
                <a href="#">Главная</a>
                <a href="#">Навыки</a>
                <a href="#">Проекты</a>
                <a href="#">Контакты</a>
            </nav>
        </header>
    );
};

export default Header;
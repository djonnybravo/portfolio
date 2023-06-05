import React from 'react';
import styles from './Nav.module.css'
const Nav = () => {
    return (
        <nav>
            <div className={styles.navContainer}>
                <a className={styles.navItem} href="#">Главная</a>
                <a className={styles.navItem} href="#">Навыки</a>
                <a className={styles.navItem} href="#">Проекты</a>
                <a className={styles.navItem} href="#">Контакты</a>
            </div>
        </nav>
    );
};

export default Nav;
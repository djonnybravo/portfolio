import React from 'react';
import styles from './Header.module.css'
import SocialmediaLinks from "../SociamediaLinks/SocialmediaLinks";
import Nav from "./Nav/Nav";


const Header = () => {
    return (
        <header>
            <div className={styles.header__container}>
                <SocialmediaLinks/>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;
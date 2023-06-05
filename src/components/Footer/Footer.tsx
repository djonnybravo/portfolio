import React from 'react';
import styles from './Footer.module.css'
import SocialmediaLinks from "../SociamediaLinks/SocialmediaLinks";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <SocialmediaLinks/>
            </div>
        </footer>
    );
};

export default Footer;
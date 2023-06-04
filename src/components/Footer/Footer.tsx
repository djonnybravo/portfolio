import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {

    const links = [
        {link: '', src: "", title:"telegram"},
        {link: '', src: "", title:"github"},
        {link: '', src: "", title:"linkedin"},
    ]

    return (
        <footer>
            <div className={styles.container}>

                {links.map((item) => {
                    return (
                        <a href={item.link}>
                            <img src={item.src} alt={item.title}/>
                        </a>
                    )
                })}

            </div>
        </footer>
    );
};

export default Footer;
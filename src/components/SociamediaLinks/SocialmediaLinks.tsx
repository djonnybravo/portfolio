import React from 'react';
import styles from './SocialmediaLinks.module.css'
import vkIcon from '../../assets/icons/vk.svg'
import instagrmIcon from '../../assets/icons/instagram.svg'
import gitHubIcon from '../../assets/icons/gitHub.svg'
import linkedinIcon from "../../assets/icons/linkedIn.svg"

const SocialmediaLinks = () => {
    return (
        <div className={styles.container}>

            {/*<a href="#"><img src={vkIcon} alt="vk"/></a>*/}
            <a href="#"><img src={instagrmIcon} alt="instagram"/></a>
            <a href="#"><img src={gitHubIcon} alt="gitHub"/></a>
            <a href="#"><img src={linkedinIcon} alt="linkedin"/></a>

        </div>
    );
};

export default SocialmediaLinks;
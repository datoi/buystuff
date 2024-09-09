import React from 'react';
import WebCanvasLogo from "../../assets/WebCanvasLogo.png";
import TikTok from "../../assets/TikTok.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import Whatsapp from "../../assets/Whatsapp.png";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.logoContainer}>
                    <img src={WebCanvasLogo} alt="logo"/>
                </div>
                <div className={styles.description}>
                    <p>Join Our Community And Stay
                        Updated With The Latest Trends,
                        Exclusive Offers, And Style
                        Tips.
                    </p>
                </div>
                <div className={styles.socialsContainer}>
                    <img className={styles.socials} src={TikTok} alt="TikTok"/>
                    <img className={styles.socials} src={Instagram} alt="Instagram"/>
                    <img className={styles.socials} src={Facebook} alt="Facebook"/>
                    <img className={styles.socials} src={Whatsapp} alt="Whatsapp"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
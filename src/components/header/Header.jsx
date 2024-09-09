import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import HamburgerIcon from '../../assets/HamburgerIcon.png';
import WebCanvasLogo from '../../assets/WebCanvasLogo.png';
import Magnifier from '../../assets/Magnifier.png';
import Bag from '../../assets/Bag.png';
import Profile from '../../assets/Profile.png';
import Exit from '../../assets/Exit.png';

const Header = () => {
    const [popValue, setPopValue] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setIsMenuOpen(false);
    }

    const navigate = useNavigate();
    const HomeSubmit = () => {
        navigate("/");
    }
    const profileSubmit = () => {
        navigate("/login");
    }
    const AboutSubmit = () => {
        navigate("/About");
    }
    const ProductSubmit = () => {
        navigate('/products');
    }
    const searchClick = () => {
        setPopValue(true);
    }

    const ExitSearch = () => {
        setPopValue(false);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className={styles.header}>
                {popValue ? (
                    <div>
                        <div className={styles.darkOver}></div>
                        <div className={styles.searchPopBox}>
                            <input className={styles.searchPop} type="text" placeholder='Search' />
                            <img src={Exit} className={styles.exitIcon} onClick={ExitSearch} alt="Icon" />
                        </div>
                    </div>
                ) : null}

                <nav className={styles.navbar}>
                    <div className={styles.logoBox} onClick={HomeSubmit}>
                        <img className={styles.webCanvasLogo} src={WebCanvasLogo} alt="logo" />
                    </div>

                    <div className={`${styles.navbarOptionBox} ${isMenuOpen ? styles.active : ''}`}>
                        <li
                            className={`${styles.navbarOption} ${activeTab === 'home' ? styles.active : ''}`}
                            onClick={() => { handleTabClick('home'); HomeSubmit(); }}
                        >
                            Home
                        </li>
                        <li
                            className={`${styles.navbarOption} ${activeTab === 'product' ? styles.active : ''}`}
                            onClick={() => { handleTabClick('product'); ProductSubmit(); }}
                        >
                            Product
                        </li>
                        <li
                            className={`${styles.navbarOption} ${activeTab === 'about' ? styles.active : ''}`}
                            onClick={() => { handleTabClick('about'); AboutSubmit(); }}
                        >
                            About
                        </li>
                        <li
                            className={`${styles.navbarOption} ${activeTab === 'contact' ? styles.active : ''}`}
                            onClick={() => handleTabClick('contact')}
                        >
                            Contact
                        </li>
                    </div>
                    <div className={styles.navbar3magesBox}>
                        <li
                            className={`${styles.navbar3mages} ${activeTab === 'search' ? styles.active : ''}`}
                            onClick={() => { handleTabClick('search'); searchClick(); }}
                        >
                            <img className={styles.navbar3mage} src={Magnifier} alt="magnifier" />
                        </li>
                        <li
                            className={`${styles.navbar3mages} ${activeTab === 'bag' ? styles.active : ''}`}
                            onClick={() => handleTabClick('bag')}
                        >
                            <img className={styles.navbar3mage} src={Bag} alt="bag" />
                        </li>
                        <li
                            className={`${styles.navbar3mages} ${activeTab === 'profile' ? styles.active : ''}`}
                            onClick={() => { handleTabClick('profile'); profileSubmit(); }}
                        >
                            <img className={styles.navbar3mage} src={Profile} alt="profile" />
                        </li>
                        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                            <img src={HamburgerIcon} alt="hamburger menu" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
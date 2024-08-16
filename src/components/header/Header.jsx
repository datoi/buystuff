import HamburgerIcon from "../../assets/HamburgerIcon.png";
import WebCanvasLogo from "../../assets/WebCanvasLogo.png";
import Magnifier from "../../assets/Magnifier.png";
import Bag from "../../assets/Bag.png";
import Profile from "../../assets/Profile.png";
import Exit from '../../assets/Exit.png';
import { useNavigate } from "react-router-dom";
import './Header.css';
import { useState } from "react";

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
            <header>
                {popValue ? (
                    <div>
                        <div className='darkOver'></div>
                        <div className='searchPopBox'>
                            <input className='searchPop' type="text" placeholder='Search' />
                            <img src={Exit} className="exitIcon" onClick={ExitSearch} alt="Icon" />
                        </div>
                    </div>
                ) : null}

                <nav className='navbar'>
                    <div className='logoBox'>
                        <img className='webCanvasLogo' src={WebCanvasLogo} alt="logo" />
                    </div>

                    <div className={`navbarOptionBox ${isMenuOpen ? 'active' : ''}`}>
                        <li
                            className={`navbarOption ${activeTab === 'home' ? 'active' : ''}`}
                            onClick={() => { handleTabClick('home'); HomeSubmit(); }}
                        >
                            Home
                        </li>
                        <li
                            className={`navbarOption ${activeTab === 'product' ? 'active' : ''}`}
                            onClick={() => handleTabClick('product')}
                        >
                            Product
                        </li>
                        <li
                            className={`navbarOption ${activeTab === 'about' ? 'active' : ''}`}
                            onClick={() => handleTabClick('about')}
                        >
                            About
                        </li>
                        <li
                            className={`navbarOption ${activeTab === 'contact' ? 'active' : ''}`}
                            onClick={() => handleTabClick('contact')}
                        >
                            Contact
                        </li>
                    </div>
                    <div className="navbar3magesBox">
                        <li
                            className={`navbar3mages ${activeTab === 'search' ? 'active' : ''}`}
                            onClick={() => { handleTabClick('search'); searchClick(); }}
                        >
                            <img className='navbar3mage' src={Magnifier} alt="magnifier" />
                        </li>
                        <li
                            className={`navbar3mages ${activeTab === 'bag' ? 'active' : ''} bagIcon`}
                            onClick={() => handleTabClick('bag')}
                        >
                            <img className='navbar3mage' src={Bag} alt="bag" />
                        </li>
                        <li
                            className={`navbar3mages ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => { handleTabClick('profile'); profileSubmit(); }}
                        >
                            <img className='navbar3mage' src={Profile} alt="profile" />
                        </li>
                    <div className='hamburgerMenu' onClick={toggleMenu}>
                        <img src={HamburgerIcon} alt="hamburger menu" />
                    </div>
                    </div>
                </nav>

            </header>
        </>
    );
}

export default Header;
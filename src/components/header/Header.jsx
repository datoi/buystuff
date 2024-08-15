import WebCanvasLogo from "../../assets/WebCanvasLogo.png";
import Magnifier from "../../assets/Magnifier.png";
import Bag from "../../assets/Bag.png";
import Profile from "../../assets/Profile.png";
import Exit from '../../assets/Exit.png'
import {useNavigate} from "react-router-dom";
import './Header.css'
import {useState} from "react";


const Header = () => {
    const [popValue, setPopValue] = useState(false)

    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    const navigate = useNavigate()
    const HomeSubmit = (e) => {
        navigate("/");
    }
    const profileSubmit = () => {
        navigate("/login");
    }

    const searchClick = () => {
        setPopValue(true)
    }

    const ExitSearch = () => {
        setPopValue(false)
    }
    return (
        <>
            <header>
                {popValue ? <div>
                    <div className='darkOver'></div>
                    <div className='searchPopBox'>
                        <input className='searchPop' type="text" placeholder='Search'/>
                        <img src={Exit} className="exitIcon" onClick={ExitSearch} alt="Icon"/>
                    </div>
                </div>:null}

                (
                <nav className='navbar'>
                    <div className='logoBox'>
                        <img src={WebCanvasLogo} alt="logo"/>
                    </div>
                    <div className='navbarOptionBox'>
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
                            About Us
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
                            <img src={Magnifier} alt="magnifier"/>
                        </li>
                        <li
                            className={`navbar3mages ${activeTab === 'bag' ? 'active' : ''}`}
                            onClick={() => handleTabClick('bag')}
                        >
                            <img src={Bag} alt="bag"/>
                        </li>
                        <li
                            className={`navbar3mages ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => { handleTabClick('profile'); profileSubmit(); }}
                        >
                            <img src={Profile} alt="profile"/>
                        </li>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header
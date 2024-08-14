import WebCanvasLogo from "../../assets/WebCanvasLogo.png";
import Magnifier from "../../assets/Magnifier.png";
import Bag from "../../assets/Bag.png";
import Profile from "../../assets/Profile.png";
import Exit from '../../assets/Exit.png'
import {useNavigate} from "react-router-dom";
import './Header.css'
import {useState} from "react";


const Header = () => {
    const navigate = useNavigate()
    const HomeSubmit = () => {
        navigate("/");
    }
    const profileSubmit = () => {
        navigate("/login");
    }

    const [popValue, setPopValue] = useState(false)
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

                <nav className='navbar'>
                    <div className='logoBox'>
                        <img src={WebCanvasLogo} alt="logo"/>
                    </div>
                    <div className='navbarOptionBox'>
                        <li className='navbarOption' onClick={HomeSubmit}>Home</li>
                        <li className='navbarOption'>Product</li>
                        <li className='navbarOption'>About Us</li>
                        <li className='navbarOption'>Contact</li>
                    </div>
                    <div className="navbar3magesBox">
                        <div className='navbar3mages' onClick={searchClick}><img src={Magnifier} alt="magnifier"/></div>
                        <div className='navbar3mages'><img src={Bag} alt="bag"/></div>
                        <div className='navbar3mages' onClick={profileSubmit}><img src={Profile} alt="profile"/></div>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header
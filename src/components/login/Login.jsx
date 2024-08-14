import './Login.css'
import WebCanvasLogo from '../../assets/WebCanvasLogo.png';
import Magnifier from '../../assets/Magnifier.png';
import Bag from '../../assets/Bag.png';
import GoogleLogo from '../../assets/GoogleLogo.png';
import Profile from '../../assets/Profile.png';
import TikTok from '../../assets/TikTok.png';
import Instagram from '../../assets/Instagram.png';
import Facebook from '../../assets/Facebook.png';
import Whatsapp from '../../assets/Whatsapp.png';
import TBC from '../../assets/TBC.png';


const Login = () => {
    return (
        <div className='page'>
            <header>
                <nav className='navbar'>
                    <div className='logoBox'>
                        <img src={WebCanvasLogo} alt="logo"/>
                    </div>
                    <div className='navbarOptionBox'>
                        <li className='navbarOption'>Product</li>
                        <li className='navbarOption'>Home</li>
                        <li className='navbarOption'>About Us</li>
                        <li className='navbarOption'>Contact</li>
                    </div>
                    <div className="navbar3magesBox">
                        <div className='navbar3mages'><img src={Magnifier} alt="magnifier"/></div>
                        <div className='navbar3mages'><img src={Bag} alt="bag"/></div>
                        <div className='navbar3mages'><img src={Profile} alt="profile"/></div>
                    </div>
                </nav>
            </header>
            <div className='body'>
                <div className='bodyBox'>

                    <div>
                        <h1 className='font-bold underline'>Log in to account</h1>
                    </div>
                    <div className="googleButtonBox">
                        <button className='googleButton'><p>Sign in with </p><img src={GoogleLogo} alt="GoogleLogo"/>
                        </button>
                    </div>

                    <div className='orDevider'>
                        <div>
                            <img src="" alt=""/><p>OR</p><img src="" alt=""/>
                        </div>
                    </div>
                    <div className="emailInputBox">
                        <input className='emailInput' placeholder="Email" type="text"/>
                    </div>
                    <div className='passwordInputBox'>
                        <input className='passwordInput' placeholder='Password' type="text"/>
                    </div>
                    <div className='loginOptionBox'>
                        <div>
                            <p style={{marginTop: '4px'}}>Don't have any account?</p>
                        </div>
                        <div>
                            <p style={{marginTop: '4px'}}>Forgot password?</p>
                        </div>
                    </div>
                    <div className='loginButtonBox'>
                        <button className='loginButton'>Log in</button>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <div>
                    <div>
                        <img src={WebCanvasLogo} alt="logo"/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p style={{width: '290px'}}>Join Our Community And Stay
                            Updated With The Latest Trends,
                            Exclusive Offers, And Style
                            Tips.</p>
                    </div>
                    <div>
                        <img className='socials' src={TikTok} alt="TikTok"/>
                        <img className='socials' src={Instagram} alt="Instagram"/>
                        <img className='socials' src={Facebook} alt="Facebook"/>
                        <img className='socials' src={Whatsapp} alt="Whatsapp"/>
                    </div>
                    <div>
                        <img src={TBC} alt="TBC"/>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Login
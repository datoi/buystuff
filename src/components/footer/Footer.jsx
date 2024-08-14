import WebCanvasLogo from "../../assets/WebCanvasLogo.png";
import TikTok from "../../assets/TikTok.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import Whatsapp from "../../assets/Whatsapp.png";
import TBC from "../../assets/TBC.png";
import './Footer.css'


const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div>
                    <div>
                        <img src={WebCanvasLogo} alt="logo"/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>
                        <p style={{width: '300px'}}>Join Our Community And Stay
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
        </>
    )
}

export default Footer
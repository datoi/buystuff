import slide from '../../assets/slide.png';
import glasses from '../../assets/glasses.png'
import heart from '../../assets/heart.png'
import bag from '../../assets/Bag.png'
import './HomePage.css'
import WebCanvasLogo from "../../assets/WebCanvasLogo.png";
import Magnifier from "../../assets/Magnifier.png";
import Bag from "../../assets/Bag.png";
import Profile from "../../assets/Profile.png";
import {useNavigate} from "react-router-dom";

const HomePage = () => {

    return (
        <>
            <body className='homeBody'>
            <div><img className='slide' src={slide} alt=""/></div>
            <div>
                <h1 className='homeTitle'>Popular Collection</h1>
            </div>
            <div className='itemListBox'>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='itemList'>
                    <div className="itemOption">
                        <div className='heart'><img src={heart} alt=""/></div>
                        <div className='bag'><img src={bag} alt=""/></div>
                    </div>
                    <div className='itemImage'>
                        <img src={glasses} alt=""/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemPriceBox'>
                            <h3 className='itemPrice'>$23.95</h3>
                        </div>
                        <div className='itemDescriptionBo'>
                            <p className='itemDescription'>Geometric Sunglasses</p>
                        </div>
                        <div className='itemButtonBox'>
                            <button className='itemButton'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}

export default HomePage
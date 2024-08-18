import './Product.css'
import downArrow from '../../assets/DownArrow.png'
import {useState} from "react";
import MoreInfo from "../moreinfo/MoreInfo.jsx";
import heart from "../../assets/heart.png"
import bag from "../../assets/Bag.png"
import RayBan from "../../assets/RayBan.png"

const Products = () => {
    const [shopNow, setShopNow] = useState(false)
    const shopNowClick = () => {
        setShopNow(true)
    }

    return (
        <div className='productBody'>
            <nav className='listNav'>
                <div className='listBarBox'>
                    <li className='barOption'>Fashion</li>
                    <li className='barOption'>Classic</li>
                    <li className='barOption'>Retro</li>
                    <li className='barOption'>Computer/Vision</li>
                    <li className='barOption bestSeller'>Best Sellers <img className='downArrow' src={downArrow}
                                                                           alt=""/></li>
                </div>
            </nav>
            <div className='itemListBox'>
                {shopNow ?
                    <div className='moreInfoBox'>
                        <MoreInfo/>
                        <div className='seeMoreBox'>
                            <h1 className='seeMore'>See More</h1>
                        </div>
                        <hr style={{width: '190px', opacity: '0.6'}}/>
                        <div className='itemListBox'>
                            <div className='itemList'>
                                <div className="itemOption">
                                    <div className='heart'><img src={heart} alt=""/></div>
                                    <div className='bag'><img src={bag} alt=""/></div>
                                </div>
                                <div className='itemImage'>
                                    <img src={RayBan} alt=""/>
                                </div>
                                <div className='itemInfo'>
                                    <div className='itemPriceBox'>
                                        <h3 className='itemPrice'>$23.95</h3>
                                    </div>
                                    <div className='itemDescriptionBoxx'>
                                        <p className='itemDescription'>Geometric Sunglasses</p>
                                    </div>
                                    <div className='itemButtonBox'>
                                        <button onClick={shopNowClick} className='itemButton'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='itemList'>
                                <div className="itemOption">
                                    <div className='heart'><img src={heart} alt=""/></div>
                                    <div className='bag'><img src={bag} alt=""/></div>
                                </div>
                                <div className='itemImage'>
                                    <img src={RayBan} alt=""/>
                                </div>
                                <div className='itemInfo'>
                                    <div className='itemPriceBox'>
                                        <h3 className='itemPrice'>$23.95</h3>
                                    </div>
                                    <div className='itemDescriptionBoxx'>
                                        <p className='itemDescription'>Geometric Sunglasses</p>
                                    </div>
                                    <div className='itemButtonBox'>
                                        <button onClick={shopNowClick} className='itemButton'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='itemList'>
                                <div className="itemOption">
                                    <div className='heart'><img src={heart} alt=""/></div>
                                    <div className='bag'><img src={bag} alt=""/></div>
                                </div>
                                <div className='itemImage'>
                                    <img src={RayBan} alt=""/>
                                </div>
                                <div className='itemInfo'>
                                    <div className='itemPriceBox'>
                                        <h3 className='itemPrice'>$23.95</h3>
                                    </div>
                                    <div className='itemDescriptionBoxx'>
                                        <p className='itemDescription'>Geometric Sunglasses</p>
                                    </div>
                                    <div className='itemButtonBox'>
                                        <button onClick={shopNowClick} className='itemButton'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    :
                    <>
                        <div className='itemList'>
                            <div className="itemOption">
                                <div className='heart'><img src={heart} alt=""/></div>
                                <div className='bag'><img src={bag} alt=""/></div>
                            </div>
                            <div className='itemImage'>
                                <img src={RayBan} alt=""/>
                            </div>
                            <div className='itemInfo'>
                                <div className='itemPriceBox'>
                                    <h3 className='itemPrice'>$23.95</h3>
                                </div>
                                <div className='itemDescriptionBoxx'>
                                    <p className='itemDescription'>Geometric Sunglasses</p>
                                </div>
                                <div className='itemButtonBox'>
                                    <button onClick={shopNowClick} className='itemButton'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='itemList'>
                            <div className="itemOption">
                                <div className='heart'><img src={heart} alt=""/></div>
                                <div className='bag'><img src={bag} alt=""/></div>
                            </div>
                            <div className='itemImage'>
                                <img src={RayBan} alt=""/>
                            </div>
                            <div className='itemInfo'>
                                <div className='itemPriceBox'>
                                    <h3 className='itemPrice'>$23.95</h3>
                                </div>
                                <div className='itemDescriptionBoxx'>
                                    <p className='itemDescription'>Geometric Sunglasses</p>
                                </div>
                                <div className='itemButtonBox'>
                                    <button onClick={shopNowClick} className='itemButton'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='itemList'>
                            <div className="itemOption">
                                <div className='heart'><img src={heart} alt=""/></div>
                                <div className='bag'><img src={bag} alt=""/></div>
                            </div>
                            <div className='itemImage'>
                                <img src={RayBan} alt=""/>
                            </div>
                            <div className='itemInfo'>
                                <div className='itemPriceBox'>
                                    <h3 className='itemPrice'>$23.95</h3>
                                </div>
                                <div className='itemDescriptionBoxx'>
                                    <p className='itemDescription'>Geometric Sunglasses</p>
                                </div>
                                <div className='itemButtonBox'>
                                    <button onClick={shopNowClick} className='itemButton'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </>

                }


            </div>
        </div>

    )
}

export default Products
import RayBan from "../../assets/RayBan.png";
import RayBanRight from "../../assets/RayBanRight.png";
import RayBanSide from "../../assets/RayBanSide.png";
import Tag from "../../assets/Tag.png"
import downArrow from '../../assets/DownArrow.png'
import Bag from "../../assets/Bag.png";
import './MoreInfo.css'
import {useState} from "react";


const MoreInfo = () => {

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };
    return (
        <>
            <div className='shopNowBox'>
                <div className='visualCheckItem'>
                    <div className='shopNowItemBigBox'>
                        <img className="shopNowItemBig" src={RayBan} alt=""/>
                    </div>
                    <div className="shopNowItemSmallBox">
                        <img className="shopNowItemSmall" src={RayBanRight} alt=""/>
                        <img className="shopNowItemSmall" src={RayBanSide} alt=""/>
                    </div>
                </div>
                <div className='itemInfo'>
                    <div className='itemNameBox'>
                        <h1 className='itemName'>Ray-Ban RB2140 Wayfarer</h1>
                    </div>
                    <div className='itemRatingBox'>
                        {/*Ratings*/}
                    </div>
                    <div className='infoPriceBox'>
                        <h2 className='infoPrice'>$180</h2>
                        <div className='countItemBox'>
                            <button className='countItemButton' onClick={handleDecrement}>-</button>
                            <input
                                className='countItemInput'
                                type="text"
                                value={value}
                                readOnly
                            />
                            <button className='countItemButton' onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className='ifBoughtBox'>
                        <p className='ifBought'><img src={Tag} alt=""/>Best Value Coupon Applied: LENSES50</p>
                        <p className='ifBought'><img src={downArrow} alt=""/>Free Shipping And Returns</p>
                        <p className='ifBought'><img src={downArrow} alt=""/>Money Back Guaranteed</p>
                    </div>
                    <div className='itemInfoButtonBox'>
                        <div className='addToCartBox'>
                            <button className='addToCart'><img className='bagIcon' src={Bag} alt=""/> Add To Cart
                            </button>
                        </div>
                        <div className='buyItNowBox'>
                            <button className='buyItNow'><img className='bagIcon' src={Bag} alt=""/> Add To Cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreInfo
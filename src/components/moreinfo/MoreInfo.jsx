import RayBan from "../../assets/RayBan.png";
import RayBanRight from "../../assets/RayBanRight.png";
import RayBanSide from "../../assets/RayBanSide.png";
import Tag from "../../assets/Tag.png"
import downArrow from '../../assets/DownArrow.png'
import Bag from "../../assets/Bag.png";
import styles from './MoreInfo.module.css';
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
            <div className={styles.shopNowBox}>
                <div className={styles.visualCheckItem}>
                    <div className={styles.shopNowItemBigBox}>
                        <img className={styles.shopNowItemBig} src={RayBan} alt=""/>
                    </div>
                    <div className={styles.shopNowItemSmallBox}>
                        <img className={styles.shopNowItemSmall} src={RayBanRight} alt=""/>
                        <img className={styles.shopNowItemSmall} src={RayBanSide} alt=""/>
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <div className={styles.itemNameBox}>
                        <h1 className={styles.itemName}>Ray-Ban RB2140 Wayfarer</h1>
                    </div>
                    <div className={styles.itemRatingBox}>
                        {/*Ratings*/}
                    </div>
                    <div className={styles.infoPriceBox}>
                        <h2 className={styles.infoPrice}>$180</h2>
                        <div className={styles.countItemBox}>
                            <button className={styles.countItemButton} onClick={handleDecrement}>-</button>
                            <input
                                className={styles.countItemInput}
                                type="text"
                                value={value}
                                readOnly
                            />
                            <button className={styles.countItemButton} onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className={styles.ifBoughtBox}>
                        <p className={styles.ifBought}><img src={Tag} alt=""/>Best Value Coupon Applied: LENSES50</p>
                        <p className={styles.ifBought}><img src={downArrow} alt=""/>Free Shipping And Returns</p>
                        <p className={styles.ifBought}><img src={downArrow} alt=""/>Money Back Guaranteed</p>
                    </div>
                    <div className={styles.itemInfoButtonBox}>
                        <div className={styles.addToCartBox}>
                            <button className={styles.addToCart}><img className={styles.bagIcon} src={Bag} alt=""/> Add To Cart</button>
                        </div>
                        <div className={styles.buyItNowBox}>
                            <button className={styles.buyItNow}><img className={styles.bagIcon} src={Bag} alt=""/> Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreInfo;
import styles from './Product.module.css'
import downArrow from '../../assets/DownArrow.png'
import { useState } from "react";
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
        <div className={styles.productBody}>
            <nav className={styles.listNav}>
                <div className={styles.listBarBox}>
                    <li className={styles.barOption}>Fashion</li>
                    <li className={styles.barOption}>Classic</li>
                    <li className={styles.barOption}>Retro</li>
                    <li className={styles.barOption}>Computer/Vision</li>
                    <li className={`${styles.barOption} ${styles.bestSeller}`}>
                        Best Sellers <img className={styles.downArrow} src={downArrow} alt=""/>
                    </li>
                </div>
            </nav>
            <div className={styles.itemListBox}>
                {shopNow ? (
                    <div className={styles.moreInfoBox}>
                        <MoreInfo />
                        <div className={styles.seeMoreBox}>
                            <h1 className={styles.seeMore}>See More</h1>
                        </div>
                        <hr style={{ width: '190px', opacity: '0.6' }} />
                        <div className={styles.itemListBox}>
                            {[...Array(3)].map((_, index) => (
                                <div className={styles.itemList} key={index}>
                                    <div className={styles.itemOption}>
                                        <div className={styles.heart}>
                                            <img src={heart} alt="Heart icon"/>
                                        </div>
                                        <div className={styles.bag}>
                                            <img src={bag} alt="Bag icon"/>
                                        </div>
                                    </div>
                                    <div className={styles.itemImage}>
                                        <img src={RayBan} alt="Ray-Ban sunglasses"/>
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <div className={styles.itemPriceBox}>
                                            <h3 className={styles.itemPrice}>$23.95</h3>
                                        </div>
                                        <div className={styles.itemDescriptionBoxx}>
                                            <p className={styles.itemDescription}>Geometric Sunglasses</p>
                                        </div>
                                        <div className={styles.itemButtonBox}>
                                            <button onClick={shopNowClick} className={styles.itemButton}>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {[...Array(3)].map((_, index) => (
                            <div className={styles.itemList} key={index}>
                                <div className={styles.itemOption}>
                                    <div className={styles.heart}>
                                        <img src={heart} alt="Heart icon"/>
                                    </div>
                                    <div className={styles.bag}>
                                        <img src={bag} alt="Bag icon"/>
                                    </div>
                                </div>
                                <div className={styles.itemImage}>
                                    <img src={RayBan} alt="Ray-Ban sunglasses"/>
                                </div>
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemPriceBox}>
                                        <h3 className={styles.itemPrice}>$23.95</h3>
                                    </div>
                                    <div className={styles.itemDescriptionBoxx}>
                                        <p className={styles.itemDescription}>Geometric Sunglasses</p>
                                    </div>
                                    <div className={styles.itemButtonBox}>
                                        <button onClick={shopNowClick} className={styles.itemButton}>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Products;
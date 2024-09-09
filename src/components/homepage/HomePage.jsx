import slide from '../../assets/slide.png';
import glasses from '../../assets/glasses.png';
import heart from '../../assets/heart.png';
import bag from '../../assets/Bag.png';
import RayBan from '../../assets/RayBan.png';  // RayBan asset added for moreInfo section
import MoreInfo from '../moreinfo/MoreInfo.jsx';  // Assuming you already have a MoreInfo component
import styles from './HomePage.module.css';
import { useState } from 'react';

const HomePage = () => {
    const [shopNow, setShopNow] = useState(true);

    const shopNowClick = () => {
        setShopNow(false);
    };

    return (
        <div className={styles.homeBody}>
            <div><img className={styles.slide} src={slide} alt=""/></div>
            <div>
                <h1 className={styles.homeTitle}>Popular Collection</h1>
            </div>
            <div className={styles.itemListBox}>
                {shopNow ? (
                    <>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={styles.itemList}>
                                <div className={styles.itemOption}>
                                    <div className={styles.heart}><img src={heart} alt=""/></div>
                                    <div className={styles.bag}><img src={bag} alt=""/></div>
                                </div>
                                <div className={styles.itemImage}>
                                    <img src={glasses} alt=""/>
                                </div>
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemPriceBox}>
                                        <h3 className={styles.itemPrice}>$23.95</h3>
                                    </div>
                                    <div className={styles.itemDescriptionBoxx}>
                                        <p className={styles.itemDescription}>Geometric Sunglasses</p>
                                    </div>
                                    <div className={styles.itemButtonBox}>
                                        <button className={styles.itemButton}>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div>
                        <MoreInfo/>
                        <div className={styles.seeMoreBox}>
                            <h1 className={styles.seeMore}>See More</h1>
                        </div>
                        <hr style={{ width: '190px', opacity: '0.6' }} />
                        <div className={styles.itemListBox}>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={styles.itemList}>
                                    <div className={styles.itemOption}>
                                        <div className={styles.heart}><img src={heart} alt=""/></div>
                                        <div className={styles.bag}><img src={bag} alt=""/></div>
                                    </div>
                                    <div className={styles.itemImage}>
                                        <img src={RayBan} alt=""/>
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
                )}
            </div>
        </div>
    );
};

export default HomePage;
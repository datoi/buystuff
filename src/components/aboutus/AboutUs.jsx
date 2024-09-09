import React from 'react';
import styles from './AboutUs.module.css';
import Bgimage from '../../assets/about-images/Bg.png';
import Glasses from '../../assets/about-images/Glasses.png';
import Sunglasses from '../../assets/about-images/Sunglasses.png';

function AboutUs() {
    return (
        <div className={styles.about}>
            <div className={styles.backgroundImage}>
                <img src={Bgimage} alt="Background" />
                <h1>LuxeLens</h1>
            </div>
            <div className={styles.glassesContainer}>
                <img src={Glasses} alt="Glasses" />
                <p>For us, glasses are more than a vision correction device or a fashion accessory.
                    Glasses are an extension of who we are, a part of our identity.
                    They tell the first chapter of our story.
                    “Finding that perfect pair is like finding the missing piece of your personal puzzle”.
                    When you get it right, you are overcome with a feeling of unparalleled confidence and
                    are ready to take on anything that comes your way.
                    But we know finding that perfect pair is easier said than done.</p>
            </div>
            <div className={styles.sunglassesContainer}>
                <p>That is why we built <a href='#'>GlassesUSA.com.</a> Providing quality eyewear at an affordable price is our business.
                    Enhancing the life of our customers by matching you with your perfect pair of glasses is our passion.
                    We promise to find you the perfect pair of glasses that fits your style, size, budget, and eyewear needs.</p>
                <img src={Sunglasses} alt="Sunglasses" />
            </div>
        </div>
    );
}

export default AboutUs;
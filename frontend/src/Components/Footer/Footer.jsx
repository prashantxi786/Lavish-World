import React from 'react';
import styles from "../Footer/Footer.module.css"
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsPinterest } from "react-icons/bs";


const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <section >
                        <p>Stay in the loop</p>
                        <p>Sign up and be the first to hear about new products and promotions!</p>
                    </section>
                    <button className={styles.footbtn}>SIGN UP NOW</button>
                    <section style={{ display: "flex", gap: "18px" }}>
                        <BsFacebook className={styles.socialicon} />
                        <BsInstagram className={styles.socialicon} />
                        <BsYoutube className={styles.socialicon} />
                        <BsTwitter className={styles.socialicon} />
                        <BsPinterest className={styles.socialicon} />
                    </section>
                    <section >
                        <p style={{ fontSize: "10px", marginTop: "30px" }}>© Lavish World 2023</p>
                    </section>
                </div>
                <div className={styles.rightSection}>
                    <button className={styles.rightbtn}>SHOP NOW, PAY LATER WITH Kalarna</button>

                    <div className={styles.listSection}>
                        <ul>
                            <li>SHOP BROOKSTONE.COM</li>
                            <li>Massage Chair Buyers Guide</li>
                            <li>FAQ</li>
                            <li>About Us</li>
                            <li>Shipping Info</li>
                            <li>SPrivacy Policy</li>
                            <li>Prop 65</li>
                            <li>Accessibility Statement</li>
                        </ul>

                        <ul>
                            <li>CUSTOMER SERVICE</li>
                            <li>Contact Us</li>
                            <li>Return Policy</li>
                            <li>Order Tracking</li>
                            <li>Product Manuals</li>
                            <li>Your California Privacy Rights</li>
                            <li>Accessibility Mode</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;

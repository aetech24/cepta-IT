import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer"> {/* Changed class to className */}
                <div className="container">
                    <div className="left-box">
                        <div className="box">
                            <div className="icon_box">
                                <FaPiggyBank />
                            </div>
                            <div className="detail">
                                <h3>Great Saving</h3>
                                <p>Unlock exclusive deals and save big on every purchase.</p>
                            </div>
                        </div>
                        <div className="box"> {/* Moved this div outside of the previous box */}
                            <div className="icon_box">
                                <FaShippingFast />
                            </div>
                            <div className="detail">
                                <h3>Free Delivery</h3>
                                <p>Enjoy fast, free delivery on all orders above a certain amount.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                                <FaHeadphonesAlt />
                            </div>
                            <div className="detail">
                                <h3>24/7 Support</h3>
                                <p>Our team is here to help you anytime, day or night.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                                <FaWallet />
                            </div>
                            <div className="detail">
                                <h3>Money Back</h3>
                                <p>Shop with confidence--easy returns and full refunds guaranteed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div class="header">
                            <img src="" alt="Cepta IT Logo"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ips</p>
                        </div>
                        <div class="bottom">
                            <div class="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>  
                                </ul>
                            </div>
                            <div class="box">
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order</li>
                                    <li>New Products</li>
                                    <li>Old Products</li>  
                                </ul>
                            </div>
                            <div class="box">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>Palace Mall, Spintex RD. Accra-Ghana.</li>
                                    <li>+233xxxxxxxxx</li>
                                    <li>info@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
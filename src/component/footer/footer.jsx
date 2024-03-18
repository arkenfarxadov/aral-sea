import React from "react";
import "./footer.css"
const Footer = ({ t }) => {
    return (
        <>
            <footer className="footer">
                <div className="footer-box1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1339.9858927861928!2d59.617274492732!3d42.455227840624914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b4d3f7c2ac7%3A0x7e1a039531ee6a5f!2sBesqala!5e0!3m2!1sru!2s!4v1706187475338!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="footer-box2">
                    <div className="container">
                        <div className="footer-box2-flex">
                            <div className="box2-line1">
                                <div className="box2-line1-1">
                                    <div className="line1-li">
                                        <span className="logo-i-li">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        </span>
                                        <span className="line1-li-text">
                                            <h1>{t("footer-address")}:</h1>
                                            <h1>{t("address")}</h1>
                                            <h1>121</h1>
                                        </span>
                                    </div>
                                    <div className="line1-li">
                                        <span className="logo-i-li">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                        </span>
                                        <span className="line1-li-text">
                                            <h1>{t("phoneNumber")}:</h1>
                                            <h1>+998 97 354 00 24</h1>
                                            <h1>+998 91 377 77 29</h1>
                                        </span>
                                    </div>
                                    <div className="line1-li">
                                        <span className="logo-i-li">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                        <span className="line1-li-text">
                                            <h1>{t("email")}:</h1>
                                            <h1>besqalatour@gmail.com</h1>
                                        </span>
                                    </div>
                                </div>
                                <div className="line1-soc">
                                    <a href="https://t.me/+998913777729" target="_blank">
                                        <i class="fa fa-telegram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.instagram.com/aral_sea_discovery/" target="_blank">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.facebook.com/tazabay.uteuliev/" target="_blank">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="box2-line2">
                                <span>
                                    <i class="fa fa-creative-commons" aria-hidden="true"></i>
                                    {t("PravaZach")}.
                                </span>
                                <span>Aral Sea Discovery - 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
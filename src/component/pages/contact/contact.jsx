import React from "react";
import "./contact.css"
const Contact = ({ t }) => {
    return (
        <>
            <div className="contact">
                <div className="contact-flex">
                    <section className="contact-sec-1">
                        <div className="container">
                            <div className="contact-sec-1-text">
                                <h4>{t("methodofcommunication")}</h4>
                                <h3>{t("ouroperators")}</h3>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <section className="contact-sec-2">
                            <div className="contact-sec-2-box">
                                <span className="contact-sec-2-box-1">
                                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                                </span>
                                <span className="contact-sec-2-box-2">
                                    <h3>{t("Call")}:</h3>
                                    <h4>+998(91)-377-77-29</h4>
                                    <h4>+998(78)-113-86-06</h4>
                                </span>
                            </div>
                            <div className="contact-sec-2-box">
                                <span className="contact-sec-2-box-1">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                                <span className="contact-sec-2-box-2">
                                    <h3>{t("email")}:</h3>
                                    <h4>besqalatour@gmail.com</h4>
                                    <h4>besqalatour@rambler.ru</h4>
                                </span>
                            </div>
                            <div className="contact-sec-2-box">
                                <span className="contact-sec-2-box-1">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                <span className="contact-sec-2-box-2">
                                    <h3>{t("Address")}:</h3>
                                    <h4>{t("AddressO" + ".respublic")}</h4>
                                    <h4>{t("AddressO" + ".city")}</h4>
                                    <h4>{t("AddressO" + ".street")}</h4>
                                </span>
                            </div>
                            <div className="contact-sec-2-box googlemaps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1339.9858927861928!2d59.617274492732!3d42.455227840624914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b4d3f7c2ac7%3A0x7e1a039531ee6a5f!2sBesqala!5e0!3m2!1sru!2s!4v1706187475338!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="contact-sec-2-box">
                                <span className="contact-sec-2-box-3">
                                    <a href="https://t.me/Aralsea_tazabay888" className="link" target="_blank">
                                        <i class="fa fa-telegram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://api.whatsapp.com/message/LTXOF4DAPSBVM1?autoload=1&app_absent=0" className="link" target="_blank">
                                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.facebook.com/besqalatour" className="link" target="_blank">
                                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.instagram.com/aral_sea_discovery/" className="link" target="_blank">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.booking.com/hotel/uz/guest-house-besqala.ru.html?aid=2127705&label=metagha-link-LUUZ-hotel-4803812_dev-desktop_los-1_bw-21_dow-Wednesday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20231108_ppt-&sid=19b3c23fd2ec2c7d7dd2319a5482dccd&all_sr_blocks=480381206_339290924_0_42_0%2C480381206_339290924_0_42_0&checkin=2023-11-08&checkout=2023-11-09&dest_id=-2578349&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=480381206_339290924_0_42_0%2C480381206_339290924_0_42_0&hpos=1&matching_block_id=480381206_339290924_0_42_0&no_rooms=2&req_adults=2&req_children=0&room1=A&room2=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=480381206_339290924_0_42_0__1000%2C480381206_339290924_0_42_0__1000&srepoch=1697632178&srpvid=fb8757d7a33d0121&type=total&ucfs=1&activeTab=photosGallery" className="link" target="_blank">
                                        <img src="logobooking.png" alt="" />
                                    </a>
                                </span>
                            </div>

                        </section>
                        <section className="contact-sec-3">
                            <span className="about-sec1 contact-sec-3-teeext">
                                <h5 className="about-sec1-1 contact-sec-3-teeext-1">{t("Operators")}</h5>
                            </span>
                            <div className="contact-sec-3-boxs">
                                <div className="contact-sec-3-box">
                                    <span className="contact-sec-3-box-img"><img src="rasulicon.png" alt="" /></span>
                                    <span className="contact-sec-3-box-text">
                                        <h1>{t("fioOperator.rasul")}</h1>
                                        <h2>{t("TourOperator")}</h2>
                                        <h3>{t("phoneNumber")}:<span>+998 50 008 00 66</span></h3>
                                        <h3>{t("email")}: <span>aymurzaevmurzabek@gmail.com</span></h3>
                                        <ul className="contact-sec-3-box-soc">
                                            <a href="https://t.me/+998995451818" target="_blank">
                                                <i class="fa fa-telegram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                            </a>
                                        </ul>
                                    </span>
                                </div>
                                <div className="contact-sec-3-box">
                                    <span className="contact-sec-3-box-img"><img src="xabibicon.png" alt="" /></span>
                                    <span className="contact-sec-3-box-text">
                                        <h1>{t("fioOperator.xabib")}</h1>
                                        <h2>{t("TourOperator")}</h2>
                                        <h3>{t("phoneNumber")}:<span>+998 50 008 00 66</span></h3>
                                        <h3>{t("email")}: <span>aymurzaevmurzabek@gmail.com</span></h3>
                                        <ul className="contact-sec-3-box-soc">
                                            <a href="https://t.me/+998906639605" target="_blank">
                                                <i class="fa fa-telegram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                            </a>
                                        </ul>
                                    </span>
                                </div>
                                <div className="contact-sec-3-box">
                                    <span className="contact-sec-3-box-img"><img src="murzikicon.png" alt="" /></span>
                                    <span className="contact-sec-3-box-text">
                                        <h1>{t("fioOperator.murzik")}</h1>
                                        <h2>{t("TourOperator")}</h2>
                                        <h3>{t("phoneNumber")}:<span>+998 50 008 00 66</span></h3>
                                        <h3>{t("email")}: <span>aymurzaevmurzabek@gmail.com</span></h3>
                                        <ul className="contact-sec-3-box-soc">
                                            <a href="https://t.me/+998913735333" target="_blank">
                                                <i class="fa fa-telegram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                            </a>
                                        </ul>
                                    </span>
                                </div>
                                <div className="contact-sec-3-box">
                                    <span className="contact-sec-3-box-img"><img src="timaicon.png" alt="" /></span>
                                    <span className="contact-sec-3-box-text">
                                        <h1>{t("fioOperator.timur")}</h1>
                                        <h2>{t("TourOperator")}</h2>
                                        <h3>{t("phoneNumber")}:<span>+998 50 008 00 66</span></h3>
                                        <h3>{t("email")}: <span>aymurzaevmurzabek@gmail.com</span></h3>
                                        <ul className="contact-sec-3-box-soc">
                                            <a href="https://t.me/+998500080066" target="_blank">
                                                <i class="fa fa-telegram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                            </a>
                                            <a href="" className="link" target="_blank">
                                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                            </a>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
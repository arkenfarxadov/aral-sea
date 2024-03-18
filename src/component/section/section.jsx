import React, { useEffect, useState } from "react";
import "./section.css"
import tours from "../datebase/tours";
import imgdate from "../datebase/imgdata";
import { Link } from "react-router-dom";
const Section = ({ t, setOpenReq }) => {
    document.title = "Aral Sea Discovery";

    const [openImg, setopenImg] = useState(false);
    const [srcImg, setsrcImg] = useState("");
    const opImg = (e) => {
        setopenImg(true);
        setsrcImg(e.src);
    }
    const closeImg = () => {
        setopenImg(false)
    }
    useEffect(() => {
        const openFon = document.querySelector(".img-open");
        const imgSrc = document.querySelector(".openImg");
        if (openImg === true) {
            openFon.classList.add("active")
            imgSrc.src = srcImg;
        }
        else {
            setopenImg(false)
            openFon.classList.remove("active")
        }
    })
    useEffect((e) => {
        document.onclick = (e) => {
            if (e.target.className === "img-open active") {
                e.stopPropagation();
                setopenImg(false)
            }
        }
    })
    return (
        <>
            <section className="section1">
                <div className="container">
                </div>
            </section>
            <section className="section2">
                <div className="container">
                    <div className="sec2-box">
                        <h3>{t("sec2-text1")}</h3>
                        <h2>{t("sec2-text2")}</h2>
                        <h4>{t("sec2-text3")}</h4>
                        <div className="sec2-btn">
                            <a href="#tour" className="sec2-button link">{t("sec2-text4")}</a>
                            <button onClick={() => { setOpenReq(true) }} className="sec2-button">{t("btn-zayav")}</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section3" id="tour">
                <div className="container">
                    <div className="sec-3-flex">
                        <div className="sec-text-align">
                            <div className="sec-3-text">
                                <h5>{t("sec2-text4")}</h5>
                            </div>
                        </div>
                        <div className="sec-3-maps">
                            {tours.map(koks => {
                                return (
                                    <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to={"/tours/" + koks.id}>
                                        <div className="sec-3-box" key={koks.id}>
                                            <div className="sec-3-box-img">
                                                <img src={koks.img[0]} alt="" />
                                            </div>
                                            <div className="sec-3-box-text">
                                                <h5>{t("tour" + koks.id + ".toursidname")}</h5>
                                                <h3>
                                                    <span>
                                                        {t("pricefrom")}
                                                    </span>
                                                    <i class="fa fa-usd" aria-hidden="true"></i>
                                                    {koks.price}
                                                </h3>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <span className="line-sections"></span>
            <section className="section4">
                <div className="container">
                    <div className="sec-4-flex">
                        <div className="sec-text-align">
                            <div className="sec-3-text">
                                <h5>
                                    {t("gallery")}
                                </h5>
                            </div>
                        </div>
                        <div className="img-open">
                            <span className="span-open-img">
                                <img className="openImg" src="" alt="" />
                                <button className="btn-close-img" onClick={closeImg}><i className="fa fa-times" aria-hidden="true"></i></button>
                            </span>
                        </div>
                        <div className="sec-4-grid">
                            {
                                imgdate.map(koks => {
                                    if (koks.id <= 4) {
                                        return (
                                            <div key={koks.id}>
                                                <img src={koks.src} onClick={() => { opImg(koks) }} key={koks.id} alt="" />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="section5">
                <section className="section5-text">
                    <div className="container">
                        <div className="sec-5-flex">
                            <div className="sec5-box">
                                <h5>{t("sec2-text1")}</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}
export default Section;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./tourDetails.css"
import { Link, NavLink } from "react-router-dom";
import tours from "../../datebase/tours";
const TourDetails = ({ setTourId, t, setOpenReq }) => {
    const { id } = useParams();
    useEffect(() => {
        const box1sec2days = Array.from(document.querySelectorAll(".sec2-days-h2"))
        const activeFunc = (e) => {
            e.preventDefault();
            let activeBoxline = e.target.closest(".sec2-days-h2");
            let activeBox = e.target.nextElementSibling;
            activeBoxline.classList.toggle("active");
            if (activeBoxline.classList.contains("active")) {
                activeBox.style.maxHeight = activeBox.scrollHeight + "px";

            }
            else {
                activeBox.style.maxHeight = 0;
            }
        }
        box1sec2days.forEach((x) => {
            x.addEventListener("click", activeFunc)
        })
    })
    useEffect(() => {
        const box1sec3spech2 = Array.from(document.querySelectorAll(".box1-sec3-spec-h2"));
        const activeFunc = (e) => {
            e.preventDefault();
            let activeBoxline = e.target.closest(".box1-sec3-spec-h2");
            let activeBox = e.target.nextElementSibling;
            activeBoxline.classList.toggle("active");
            if (activeBoxline.classList.contains("active")) {
                activeBox.style.maxHeight = activeBox.scrollHeight + "px";
            }
            else {
                activeBox.style.maxHeight = 0;
            }
        }
        box1sec3spech2.forEach((x) => {
            x.addEventListener("click", activeFunc)
        })
    })
    let [marginId, setmarginId] = useState(0);
    const [lengthId, setlengthId] = useState(tours.at(id - 1).img.length - 1);
    useEffect(() => {
        const sliderdiv = document.querySelector(".slider-div");
        const btnleft = document.querySelector(".btn-left");
        const btnright = document.querySelector(".btn-right");
        btnright.addEventListener("click", (e) => {
            if (marginId < lengthId) {
                marginId++;
                console.log(marginId);
                setmarginId(marginId)
                sliderdiv.style = `margin-left:${"-" + marginId + "00%"}`
            }
        })
        btnleft.addEventListener("click", (e) => {
            if (marginId <= lengthId && marginId > 0) {
                marginId--;
                console.log(marginId);
                setmarginId(marginId)
                sliderdiv.style = `margin-left:${"-" + marginId + "00%"}`
            }
        })
    })
    return (
        <>
            <div className="tourdetails">
                <div className="container">
                    {tours.map(koks => {
                        if (koks.id == id) {
                            document.title = t("tour" + koks.id + ".toursidname");
                            return (
                                <>
                                    <div className="details-flex">
                                        <div className="details-box1">
                                            <div className="details-box1-img">
                                                <button className="btn-left" >
                                                    <i class="fa fa-caret-left" aria-hidden="true"></i>
                                                </button>
                                                <button className="btn-right" >
                                                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                </button>
                                                {
                                                    koks.img.map((e) => {
                                                        return (
                                                            <>
                                                                <div className="slider-div">
                                                                    <span><img src={e} alt="" /></span>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="details-box1-text">
                                                <div className="text-tours">
                                                    <span>
                                                        <h3>{t("tour" + koks.id + ".toursidname")}</h3>
                                                        <h3>
                                                            <span className="startPrice">
                                                                {t("startPrice")}:
                                                            </span>
                                                            <span className="dollar">$</span>
                                                            {koks.price}
                                                        </h3>
                                                        <span className="span-price-zav">*{t("price-to")}</span>
                                                    </span>
                                                </div>
                                                <div className="text-tours-desc">
                                                    <h3>
                                                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                                                        {t("allMap")}:
                                                    </h3>
                                                    <h4>{t("tour" + koks.id + ".toursmaps")}</h4>
                                                    <h3>
                                                        <i class="fa fa-map-o" aria-hidden="true"></i>
                                                        {t("toMaps")}:
                                                    </h3>
                                                    <h4>{t("tour" + koks.id + ".toursdescription")}</h4>
                                                </div>
                                                <div className="text-tours-icons">
                                                    <div>
                                                        <h4>{t("peopleMax")}</h4>
                                                        <span>
                                                            <span>
                                                                <i class="fa fa-users" aria-hidden="true"></i>
                                                            </span>
                                                            <h2>48</h2>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4>{t("age")}</h4>
                                                        <span>
                                                            <span>
                                                                <i class="fa fa-male" aria-hidden="true"></i>
                                                            </span>
                                                            <h2>0+</h2>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-tourts-btn">
                                                    <button onClick={() => { setOpenReq(true); setTourId(t("tour" + koks.id + ".toursidname")) }} className="link-button">
                                                        {t("btn-zayav")}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-flex2">
                                        <div className="details-flex2-box1">
                                            <div className="flex2-box1-btn">
                                                <a className="box1-linkbtn" href="#maps">
                                                    <button>{t("marshrut")}</button>
                                                </a>
                                                <a className="box1-linkbtn" href="#inclusion">
                                                    <button>{t("vklicheno")}</button>
                                                </a>
                                                <a className="box1-linkbtn" href="#questions">
                                                    <button>{t("questions")}</button>
                                                </a>
                                            </div>
                                            <div className="flex2-box1-sec1">
                                                {koks.day.map(youzai => {
                                                    if (youzai.id == "day1") {
                                                        return (
                                                            <>
                                                                <div className="box1-sec2-days">
                                                                    <h2 className="sec2-days-h2 active">{t("day")} 1</h2>
                                                                    <div className="sec2DaysActive sec2DaysActive1">
                                                                        <span className="sec2DaysActive-text">
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id)}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("nutrition")}
                                                                            </h2>
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id + "meal")}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("habit")}
                                                                            </h2>
                                                                        </span>
                                                                        <div className="sec2-habit">
                                                                            <span className="sec2-habit-img">
                                                                                <img src={youzai.habitationImg} alt="" />
                                                                            </span>
                                                                            <span className="sec2-habit-text">
                                                                                <h3>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitationName")}</h3>
                                                                                <h2>
                                                                                    <span><i class="fa fa-money" aria-hidden="true"></i></span>
                                                                                    ${youzai.habitationPrice}
                                                                                </h2>
                                                                                <h4>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitation")}</h4>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (youzai.id == "day2") {
                                                        return (
                                                            <>
                                                                <div className="box1-sec2-days">
                                                                    <h2 className="sec2-days-h2">{t("day")} 2</h2>
                                                                    <div className="sec2DaysActive sec2DaysActive2">
                                                                        <span className="sec2DaysActive-text">
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id)}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("nutrition")}
                                                                            </h2>
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id + "meal")}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("habit")}
                                                                            </h2>
                                                                        </span>
                                                                        <div className="sec2-habit">
                                                                            <span className="sec2-habit-img">
                                                                                <img src={youzai.habitationImg} alt="" />
                                                                            </span>
                                                                            <span className="sec2-habit-text">
                                                                                <h3>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitationName")}</h3>
                                                                                <h2>
                                                                                    <span><i class="fa fa-money" aria-hidden="true"></i></span>
                                                                                    ${youzai.habitationPrice}
                                                                                </h2>
                                                                                <h4>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitation")}</h4>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (youzai.id == "day3") {
                                                        return (
                                                            <>
                                                                <div className="box1-sec2-days">
                                                                    <h2 className="sec2-days-h2">{t("day")} 3</h2>
                                                                    <div className="sec2DaysActive sec2DaysActive2">
                                                                        <span className="sec2DaysActive-text">
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id)}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("nutrition")}
                                                                            </h2>
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id + "meal")}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("habit")}
                                                                            </h2>
                                                                        </span>
                                                                        <div className="sec2-habit">
                                                                            <span className="sec2-habit-img">
                                                                                <img src={youzai.habitationImg} alt="" />
                                                                            </span>
                                                                            <span className="sec2-habit-text">
                                                                                <h3>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitationName")}</h3>
                                                                                <h2>
                                                                                    <span><i class="fa fa-money" aria-hidden="true"></i></span>
                                                                                    ${youzai.habitationPrice}
                                                                                </h2>
                                                                                <h4>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitation")}</h4>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (youzai.id == "day4") {
                                                        return (
                                                            <>
                                                                <div className="box1-sec2-days">
                                                                    <h2 className="sec2-days-h2">{t("day")} 4</h2>
                                                                    <div className="sec2DaysActive sec2DaysActive2">
                                                                        <span className="sec2DaysActive-text">
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id)}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("nutrition")}
                                                                            </h2>
                                                                            <h3>
                                                                                {t("tour" + koks.id + ".tourspain" + youzai.id + "meal")}
                                                                            </h3>
                                                                            <h2>
                                                                                {t("habit")}
                                                                            </h2>
                                                                        </span>
                                                                        <div className="sec2-habit">
                                                                            <span className="sec2-habit-img">
                                                                                <img src={youzai.habitationImg} alt="" />
                                                                            </span>
                                                                            <span className="sec2-habit-text">
                                                                                <h3>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitationName")}</h3>
                                                                                <h2>
                                                                                    <span><i class="fa fa-money" aria-hidden="true"></i></span>
                                                                                    ${youzai.habitationPrice}
                                                                                </h2>
                                                                                <h4>{t("tour" + koks.id + ".tourspain" + youzai.id + "habitation")}</h4>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                })}
                                            </div>

                                        </div>
                                        <div className="details-flex2-box2" id="maps">
                                            <div className="flex2-box2-1">
                                                {
                                                    tours.reduce(e => {
                                                        if (koks.id == 1 || koks.id == 2 || koks.id == 3) {
                                                            return (
                                                                <>
                                                                    <img src={koks.maps} alt="" />
                                                                </>
                                                            )
                                                        }
                                                        if (koks.id > 3) {
                                                            return (
                                                                <>
                                                                    <iframe src={koks.maps}></iframe>
                                                                </>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                            <div className="flex2-box2-2">
                                                <div className="flex2-box1-sec2" id="inclusion">
                                                    <h1 className="flex2-box1-sec2-H1">
                                                        <i class="fa fa-umbrella" aria-hidden="true"></i>
                                                        {t("vklicheno")}:
                                                    </h1>
                                                    <div className="flex2-box1-sec2-On">
                                                        <span className="flex2-box1-sec2-span">
                                                            <i class="fa fa-check" aria-hidden="true"></i>
                                                        </span>
                                                        <h2>
                                                            {t("tour" + koks.id + ".inclusionOn")}
                                                        </h2>
                                                    </div>
                                                    <div className="flex2-box1-sec2-X">
                                                        <span className="flex2-box1-sec2-span">
                                                            <i class="fa fa-times" aria-hidden="true"></i>
                                                        </span>
                                                        <h2>
                                                            {t("tour" + koks.id + ".inclusionX")}
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-flex3" id="questions">
                                        <div className="flex2-box1-sec3">
                                            <h1 className="flex2-box1-sec3-H1">
                                                {t("questions")}
                                            </h1>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ1")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ1O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ2")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ2O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ3")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ3O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ4")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ4O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ5")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ5O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ6")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ6O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ7")}</h2>
                                                <div className="box1-sec3-spec-div">
                                                    {t("specialQuetion.speciQ7O")}
                                                </div>
                                            </div>
                                            <div className="box1-sec3-spec">
                                                <h2 className="box1-sec3-spec-h2">{t("specialQuetion.speciQ8")}</h2>
                                                <div className="box1-sec3-spec-div ">
                                                    {t("specialQuetion.speciQ8O")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}
export default TourDetails;
import React from "react";
import { Link } from "react-router-dom";
import tours from "../../datebase/tours";
import "./tours.css"
const Tours = ({ t }) => {
    return (
        <>
            <div className="tours">
                <div className="container">
                    <div className="tours-title-text">{t("ToursAral")}</div>
                    <div className="tours-flex">
                        {tours.map(koks => {
                            if (koks.category == "Aral") {
                                return (
                                    <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to={"/tours/" + koks.id}>
                                        <div className="tours-box" key={koks.id}>
                                            <div className="tours-box-img">
                                                <img src={koks.img[0]} alt="" />
                                            </div>
                                            <div className="tours-box-text">
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
                        }
                        )}
                    </div>
                    <div className="tours-title-text">{t("ToursDrevnie")}</div>
                    <div className="tours-flex">
                        {tours.map(koks => {
                            if (koks.category == "DrevnieGoroda") {
                                return (
                                    <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to={"/tours/" + koks.id}>
                                        <div className="tours-box" key={koks.id}>
                                            <div className="tours-box-img">
                                                <img src={koks.img[0]} alt="" />
                                            </div>
                                            <div className="tours-box-text">
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
                        }
                        )}
                    </div>
                    <div className="tours-title-text">{t("drugie")}</div>
                    <div className="tours-flex">
                        {tours.map(koks => {
                            if (koks.category == "Goroda") {
                                return (
                                    <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to={"/tours/" + koks.id}>
                                        <div className="tours-box" key={koks.id}>
                                            <div className="tours-box-img">
                                                <img src={koks.img[0]} alt="" />
                                            </div>
                                            <div className="tours-box-text">
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
                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tours;
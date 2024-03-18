import React from "react";
import "./about.css"
const About = ({ t }) => {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="about-flex">
                        <div className="about-sec1">
                            <h5 className="about-sec1-1">
                                {t("maintext4")}
                            </h5>
                        </div>
                        <div className="about-sec2">
                            <div className="about-sec2-1">
                                <h3 className="about-sec2-1-zagolovka">
                                    {t("Ocompany")}
                                </h3>
                                <div className="about-sec2-1-text">
                                    <h2>{t("Ocompany1")}</h2>
                                    <h2>{t("Ocompany2")}</h2>
                                    <h2>{t("Ocompany3")}</h2>
                                </div>
                                <div className="about-sec2-1-result">
                                    <span>
                                        <h1>+35.000</h1>
                                        <h5>{t("result1")}</h5>
                                    </span>
                                    <span>
                                        <h1>19</h1>
                                        <h5>{t("result2")}</h5>
                                    </span>
                                    <span>
                                        <h1>+20</h1>
                                        <h5>{t("result3")}</h5>
                                    </span>
                                    <span>
                                        <h1>24</h1>
                                        <h5>{t("result4")}</h5>
                                    </span>
                                </div>
                            </div>
                            <div className="about-sec2-2">
                                <img src="https://lh3.google.com/u/3/d/1hdnJaQ8jZG6J_phNoPdjx6HZLikh6Whb=w1428-h944-iv1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
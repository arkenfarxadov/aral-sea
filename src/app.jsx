import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./app.css"
import "./media.css"
import Header from "./component/header/header";
import Section from "./component/section/section";
import Footer from "./component/footer/footer";
import TourDetails from "./component/pages/tourDetails/tourDetails";
import Request from "./component/pages/request/request";
import Gallery from "./component/pages/gallery/gallery";
import About from "./component/pages/about/about";
import Tours from "./component/pages/tours/tours";
import Contact from "./component/pages/contact/contact";
import "./component/font-awesome-4.7.0/css/font-awesome.css"
import "./component/font-awesome-4.7.0/css/font-awesome.min.css"
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from './i18n';
const App = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    const activeheadChange = () => {
        const headChangeVisible = document.querySelector(".head-3-change");
        if (headChangeVisible.classList.contains("active") == true) {
            headChangeVisible.classList.remove("active")
        }
        else {
            headChangeVisible.classList.add("active")

        }
    }
    const activeheadMenu = () => {
        const headChangeVisible = document.querySelector(".head-2-menu");
        if (headChangeVisible.classList.contains("active") == true) {
            headChangeVisible.classList.remove("active")
        }
        else {
            headChangeVisible.classList.add("active")

        }
    }
    const changeLang = (e) => {
        const headChangeVisible = document.querySelector(".head-3-change");
        if (e === 'ru') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
            headChangeVisible.classList.remove("active")
            window.scrollTo(0, 0)

        }
        if (e === 'en') {
            i18n.changeLanguage('en');
            setLanguage('en');
            headChangeVisible.classList.remove("active")
            window.scrollTo(0, 0)

        }
        if (e === 'fr') {
            i18n.changeLanguage('fr');
            setLanguage('fr');
            headChangeVisible.classList.remove("active")
            window.scrollTo(0, 0)

        }
        if (e === 'is') {
            i18n.changeLanguage('is');
            setLanguage('is');
            headChangeVisible.classList.remove("active")
            window.scrollTo(0, 0)

        }
        if (e === 'ja') {
            i18n.changeLanguage('ja');
            setLanguage('ja');
            headChangeVisible.classList.remove("active")
            window.scrollTo(0, 0)

        }
    };
    const [tourId, setTourId] = useState("");
    const [openReq, setOpenReq] = useState(false);

    return (
        <>
            <Request
                t={t}
                tourId={tourId}
                setTourId={setTourId}
                openReq={openReq}
                setOpenReq={setOpenReq}
            />
            <Header
                activeheadChange={activeheadChange}
                activeheadMenu={activeheadMenu}
                changeLang={changeLang}
                setOpenReq={setOpenReq}
                t={t}
            />
            <Routes>
                <Route path="/" element={<Section
                    setOpenReq={setOpenReq}
                    t={t}
                />} />
                <Route exact path="/tours/:id" element={<TourDetails
                    setTourId={setTourId}
                    setOpenReq={setOpenReq}
                    t={t}
                />} />
                <Route path="/gallery" element={<Gallery
                    t={t}
                />} />
                <Route path="/about" element={<About
                    t={t}
                />} />
                <Route path="/tours" element={<Tours
                    t={t}
                />} />
                <Route path="/contact" element={<Contact
                    t={t}
                />} />
            </Routes>
            <Footer
                t={t}
            />
        </>
    )
}
export default App;
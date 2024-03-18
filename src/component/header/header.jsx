import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css"
const Header = ({ t, activeheadChange, changeLang, setOpenReq, activeheadMenu }) => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-flex">
                        <div className="header-click-menu">
                            <div className="head-2-menu">
                                <ul>
                                    <Link className="link" to={"/"} onClick={() => { window.scrollTo(0, 0); activeheadMenu() }}>
                                        <li>{t('maintext1')}</li>
                                    </Link>
                                    <Link className="link" to={"/tours"} onClick={() => { window.scrollTo(0, 0); activeheadMenu() }}>
                                        <li>{t('maintext2')}</li>
                                    </Link>
                                    <Link className="link" to={"/gallery"} onClick={() => { window.scrollTo(0, 0); activeheadMenu() }}>
                                        <li>{t('maintext3')}</li>
                                    </Link>
                                    <Link className="link" to={"/about"} onClick={() => { window.scrollTo(0, 0); activeheadMenu() }}>
                                        <li>{t('maintext4')}</li>
                                    </Link>
                                    <Link className="link" to={"/contact"} onClick={() => { window.scrollTo(0, 0); activeheadMenu() }}>
                                        <li>{t('maintext5')}</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="head-1">
                            <Link className="link" to={"/"} onClick={() => { window.scrollTo(0, 0) }}>
                                <img src="../../../logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="head-2">
                            <ul>
                                <Link className="link" to={"/"} onClick={() => { window.scrollTo(0, 0) }}>
                                    <li>{t('maintext1')}</li>
                                </Link>
                                <Link className="link" to={"/tours"} onClick={() => { window.scrollTo(0, 0) }}>
                                    <li>{t('maintext2')}</li>
                                </Link>
                                <Link className="link" to={"/gallery"} onClick={() => { window.scrollTo(0, 0) }}>
                                    <li>{t('maintext3')}</li>
                                </Link>
                                <Link className="link" to={"/about"} onClick={() => { window.scrollTo(0, 0) }}>
                                    <li>{t('maintext4')}</li>
                                </Link>
                                <Link className="link" to={"/contact"} onClick={() => { window.scrollTo(0, 0) }}>
                                    <li>{t('maintext5')}</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="head-3">
                            <ul>
                                <li>
                                    <button onClick={() => { setOpenReq(true) }} className="head-3-btn">{t('btn-zayav')}</button>
                                </li>
                                <li>
                                    <button onClick={activeheadChange} className="head-3-btn-lang">
                                        <i class="fa fa-globe" aria-hidden="true"></i>
                                    </button>
                                    <span className="head-3-change">
                                        <Link onClick={() => { changeLang("ru") }} to={"/"} className="head-3-btn-change">
                                            <span>
                                                <img src="../../../RU.png" alt="" />
                                            </span>
                                            Русский
                                        </Link>
                                        <Link onClick={() => { changeLang("en") }} to={"/"} className="head-3-btn-change">
                                            <span>
                                                <img src="../../../ENG.png" alt="" />
                                            </span>
                                            English
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <button onClick={activeheadMenu} className="head-3-btn-menu">
                                        <i class="fa fa-bars" aria-hidden="true"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
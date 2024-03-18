import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./gallery.css"
import imgdate from "../../datebase/imgdata";
const Gallery = ({ t }) => {
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
            <div className="gallery">
                <div className="container">
                    <div className="gallery-grid">
                        <div className="img-open">
                            <span className="span-open-img">
                                <img className="openImg" src="" alt="" />
                                <button className="btn-close-img" onClick={closeImg}><i className="fa fa-times" aria-hidden="true"></i></button>
                            </span>
                        </div>
                        {
                            imgdate.map(koks => {
                                return (
                                    <>
                                        <div className="gallery-grid-img">
                                            <img onClick={() => { opImg(koks) }} src={koks.src} alt="" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery
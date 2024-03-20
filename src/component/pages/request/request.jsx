import React, { useEffect } from "react";
import axios from "axios";
import "./request.css";
import tours from "../../datebase/tours";
const Request = ({ t, tourId, openReq, setOpenReq, setTourId }) => {

    const formText = () => {
        const textbtn = document.querySelector(".text-btn");
        textbtn.classList.remove("required");
        textbtn.classList.remove("nonrequired");
    }
    const formRequred = (e) => {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const tours = document.querySelector("#tours");
        const date = document.querySelector("#date");
        const textbtn = document.querySelector(".text-btn");
        const textbtnH5 = document.querySelector(".text-btn-h5");
        if (((name.value == "") && (email.value == "")) || ((tours.value == "") && (date.value == ""))) {
            textbtn.classList.add("nonrequired");
            textbtn.classList.remove("required");
            textbtnH5.innerHTML = t("nonaccepted");
        }

        else {
            textbtn.classList.remove("nonrequired");
            textbtn.classList.add("required");
            textbtnH5.innerHTML = t("accepted");
            form1func()
        }
    }
    const form1func = (e) => {
        const TOKEN = "7095992067:AAHUHBaAq05KUxhsCDeUa3Gyz-MgCQO2Upc";
        const CHAT_ID = "-1001545016749";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const question = document.querySelector("#question");
        const name = document.querySelector("#name");
        const phoneNumber = document.querySelector("#phoneNumber");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
        const tours = document.querySelector("#tours");
        const date = document.querySelector("#date");
        const kolvo = document.querySelector("#kolvo");
        const date1 = document.querySelector("#date1");
        let mes = `<b>Новая заявка c сайта</b>\n`;
        if (question.value == t("request.quests")) {
            mes += `<b>Категория: </b>#${question.value}\n`;
            mes += `<b>ФИО: </b>${name.value}\n`;
            mes += `<b>Номер Телефон: </b>${phoneNumber.value}\n`;
            mes += `<b>Почта: </b>${email.value}\n`;
            mes += `<b>Сообщение: </b>${message.value}\n`;
        }
        else if (question.value == t("request.bronirova")) {
            mes += `<b>Категория: </b>#${question.value}\n`;
            mes += `<b>Туры: </b>${tours.value}\n`;
            mes += `<b>ФИО: </b>${name.value}\n`;
            mes += `<b>Дата поездки от: </b>${date.value}\n`;
            mes += `<b>Дата поездки до: </b>${date1.value}\n`;
            mes += `<b>Количество путешественников: </b>${kolvo.value}\n`;
            mes += `<b>Номер Телефон: </b>${phoneNumber.value}\n`;
            mes += `<b>Почта: </b>${email.value}\n`;
            mes += `<b>Сообщение: </b>${message.value}\n`;
        }
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "HTML",
            text: mes
        })
            .then((res) => {
            })
            .catch((error) => {
            })
            .finally(() => {
                name.value = ""
                date.value = ""
                kolvo.value = ""
                phoneNumber.value = ""
                email.value = ""
                date1.value = ""
                message.value = ""
            })
    }
    useEffect(() => {
        const question = document.querySelector("#question");
        const offTours = document.querySelector(".offTours");
        const offDate = document.querySelector(".offDate");
        const offKolvo = document.querySelector(".offKolvo");
        const DpTel = document.querySelector(".DpTel");
        question.addEventListener("click", (e) => {
            const name = document.querySelector("#name");
            const date = document.querySelector("#date");
            const kolvo = document.querySelector("#kolvo");
            const phoneNumber = document.querySelector("#phoneNumber");
            const email = document.querySelector("#email");
            const date1 = document.querySelector("#date1");
            const message = document.querySelector("#message");
            setTourId("")
            if (question.value == "Вопрос" || question.value == "Question") {
                offTours.style = "display:none"
                offDate.style = "display:none"
                offKolvo.style = "display:none"
                DpTel.style = "display:none"
                name.value = ""
                date.value = ""
                kolvo.value = ""
                phoneNumber.value = ""
                email.value = ""
                date1.value = ""
                message.value = ""
            }
            else if (question.value == "Бронирование" || question.value == "Reservation") {
                offTours.style = "display:block"
                offDate.style = "display:block"
                offKolvo.style = "display:block"
                DpTel.style = "display:block"
                name.value = ""
                date.value = ""
                kolvo.value = ""
                phoneNumber.value = ""
                email.value = ""
                date1.value = ""
                message.value = ""
            }
        })
    })
    useEffect(() => {
        const selectoption = Array.from(document.querySelectorAll("#selectoption"));
        const selectOptionVB = Array.from(document.querySelectorAll("#selectOptionVB"));
        const offTours = document.querySelector(".offTours");
        const offDate = document.querySelector(".offDate");
        const offKolvo = document.querySelector(".offKolvo");
        const DpTel = document.querySelector(".DpTel");
        selectoption.map(e => {
            if (e.value == tourId) {
                offTours.style = "display:block"
                offDate.style = "display:block"
                offKolvo.style = "display:block"
                DpTel.style = "display:block"
                selectOptionVB[1].selected = true
                e.selected = true
            }
        })
    })
    useEffect(() => {
        const request = document.querySelector(".request");
        if (openReq == true) {
            request.classList.add("active");
        }
        else {
            request.classList.remove("active");
        }
        window.onclick = (e) => {
            if (e.target.className == "request active") {
                e.stopPropagation();
                setOpenReq(false)
            }
        }
    })

    return (
        <>
            <div className="request">
                <div className="container">
                    <div className="request-form">
                        <button onClick={() => { setOpenReq(false) }} className="request-form-btn-close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <form className="form1">
                            <span>
                                <label for="question">{t("request.tipObra")}</label>
                                <select name="question" id="question">
                                    <option selected id="selectOptionVB" value={t("request.quests")}>{t("request.quests")}</option>
                                    <option id="selectOptionVB" value={t("request.bronirova")}>{t("request.bronirova")}</option>
                                </select>
                            </span>
                            <span className="offTours">
                                <label for="tours">{t("maintext2")}<span>*</span></label>
                                <select name="tours" id="tours">
                                    {
                                        tours.map(koks => {
                                            return (
                                                <>
                                                    <option id="selectoption" value={t("tour" + koks.id + ".toursidname")}>{t("tour" + koks.id + ".toursidname")}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </span>
                            <span>
                                <label for="name">{t("request.fio")} <span>*</span></label>
                                <input id="name" type="text" required />
                            </span>
                            <span className="offKolvo">
                                <label for="kolvo">{t("request.kolvoPut")}</label>
                                <input id="kolvo" type="number" required />
                            </span>
                            <span className="offDate">
                                <label for="date">{t("request.date")}<span>*</span></label>
                                <input type="date" id="date" required />
                            </span>
                            <span className="DpTel">
                                <label for="date1">{t("request.date1")}<span>*</span></label>
                                <input id="date1" type="date" />
                            </span>
                            <span>
                                <label for="phoneNumber">{t("phoneNumber")}</label>
                                <input id="phoneNumber" type="number" required />
                            </span>
                            <span>
                                <label for="email">{t("email")}<span>*</span></label>
                                <input id="email" type="email" />
                            </span>
                            <span>
                                <label for="message">{t("request.soobchenie")}</label>
                                <textarea name="message" className="message" id="message"></textarea>
                            </span>
                            <button type="button" onClick={() => { formRequred() }}>
                                {t("request.ostavit")}
                            </button>
                        </form>
                        <div className="text-btn">
                            <h5 className="text-btn-h5">
                                Отправлено
                            </h5>
                            <button onClick={formText}>Ок</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Request;
import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    return (
        <div className="back-color text-light p-3 d-flex justify-content-between">
            <div className="container py-5">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div>
                            <h5 className="mb-3">О НАС</h5>
                            <p>«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии Компания «Osten» была основана в 2019 году!</p>
                            <h4 className="mb-0 mb-3">МЫ В СОЦ.СЕТЯХ:</h4>
                            <div className="d-flex">
                                <span className="me-2"><FaFacebook className="size" /></span>
                                <span className="me-2"><FaInstagram className="size" /></span>
                                <span className="me-2"><FaTelegram className="size" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 colsm-12 col-md-6 col-lg-4">
                        <div>
                            <h5 className="mb-3">ПОСЛЕДНИЕ НОВОСТИ</h5>
                            <div className="border-bottom w-50 mb-4"><a href="#">Построен новый лифт</a></div>
                            <div className="border-bottom mb-4"><a href="#">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</a></div>
                            <div className="border-bottom w-50 mb-4"><a href="#">ДИСПЕТЧЕРИЗАЦИЯ</a></div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div>
                            <h5 className="mb-3">КОНТАКТЫ</h5>
                            <p>Номер телефона: +998 (93) 511-11-17 +998 (91) 791-51-15</p>
                            <p>Электронная почта: info@uzlift.uz</p>
                            <p>Адрес: 100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

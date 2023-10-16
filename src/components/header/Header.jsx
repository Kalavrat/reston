import React from "react";
import style from "./Header.module.css"
import { Link } from "react-router-dom";
import {HandySvg} from 'handy-svg';
import logo from "../../media/logo.svg"
import arrow from "../../media/arrow.svg"
import cart from "../../media/cart.svg"
import person from "../../media/person.svg"

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.header_left}>
                <HandySvg className={style.header_left_logo} src={logo} alt="" />
                <div className={style.header_left_div}>
                    <span className={style.header_left_text}>Калуга</span>
                    <HandySvg className={style.header_left_arrow} src={arrow} alt="" />
                </div>
            </div>
            <div className={style.header_mid}>
                <Link className={style.link} to="">Каталог</Link>
                <Link className={style.link} to="">Услуги</Link>
                <Link className={style.link} to="">Контакты</Link>
                <Link className={style.link} to="">О нас</Link>
            </div>
            <div className={style.header_right}>
                <HandySvg className={style.header_right_cart} src={cart} alt="" />
                <HandySvg className={style.header_right_person} src={person} alt="" />
            </div>
        </div>
    )
}
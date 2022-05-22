import React from "react";
import style from '../LoginPage/Login.module.scss'

export const ButtonClick = (props) => {
    return (
        <div className={style.form_button_container}>
            <button className={style.form_button} onClick={() => {props.hendler()}}>{props.text}</button>
        </div>
    )
}
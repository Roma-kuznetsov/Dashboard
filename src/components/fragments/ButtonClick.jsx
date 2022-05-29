import React from "react";
import style from '../LoginPage/Login.module.scss'

export const ButtonClick = (props) => {
    return (
        <div className={style.form_button_container}>
            <button className={style.form_button} onClick={() => {props.click()}}>{props.text}</button>
        </div>
    )
}
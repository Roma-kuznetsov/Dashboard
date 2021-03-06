import React from "react";
import style from '../LoginPage/Login.module.scss'

export const ButtonSubmit = (props) => {
    return (
        <div className={style.form_button_container}>
            <button className={style.form_button} type="submit">{props.text}</button>
        </div>
    )
}
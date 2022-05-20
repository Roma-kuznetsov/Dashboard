import classNames from "classnames/bind";
import { Field } from "formik";
import React, { useState } from "react";
import style from './Login.module.scss';


const Fieldjs = (props) => {
    let cx = classNames.bind(style);
    const [error, setError] = useState(false)

    if (props.errors && props.touched && error !== true) {
        setError(true)
    } else if (!props.errors && props.touched && error !== false) {
        setError(false)
    }

    let mixStyle = cx({
        form_input: true,
        errorStyle: error,
    });

    return (
        <div className={style.form_block}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className={style.field_icon}>
                <Field className={mixStyle} name={props.name} validate={props.validate} type={props.type} />
                <span><props.icon size={24} /></span>
            </div>
            {props.errors && props.touched && <div className={style.error}>{props.errors}</div>}
        </div>
    )
}


export default Fieldjs
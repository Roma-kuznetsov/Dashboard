import { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import style from './Settings.module.scss'
import { ButtonClick } from "../fragments/ButtonClick";
import { BsQuestionCircle } from 'react-icons/bs'
import classNames from "classnames/bind";
import { Field } from "formik";


let cx = classNames.bind(style);
const SettingsUI = (props) => {
    const [show, setShow] = useState(false)
    // show true/false classnames
    let mixStyles = cx({
        respons: true,
        active: show,
    });

    return (
        <>
            <div className={style.title}>
                <h1 className={style.position}>
                    Настройки UI
                    <BsQuestionCircle onClick={() => { setShow(!show) }} className={style.question} />
                </h1>
            </div>
            <div className={style.question_block}>
                <div className={mixStyles}>Тут можно настроить свой собственный градиент на задний фон.
                    Выберите 2 цвета (да больше поинтов для цвета не завезли)
                    и с помощью 2 ползунков распределите как захочется если не удобно воспользуйтесь полями ввода они задублирован.
                    Нижний ползунок отвечает за поворот градиента в градусах 0 - 360. Не забудьте сохранить.</div>
            </div>
            <div className={style.ui_constainer}>
                <div className={style.ui_block}>
                    <Field type="color" name="firstColor" id="firstColor" onInput={(e) => props.handleChange(e)} />
                    <Field type="color" name="secondColor" id="secondColor" onInput={(e) => props.handleChange(e)} />
                </div>
                <MultiRangeSlider
                    step={1}
                    ruler={false}
                    preventWheel={false}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    onInput={(e) => {
                        props.handleInput(e);
                    }}
                />
                <div className={style.ui_block}>
                    <Field value={props.minValue} name="minValue" id="minValue" type="number" onInput={(e) => { props.hendlerMinMax(e.currentTarget.value, props.setMinValue) }} />
                    <Field value={props.maxValue} name="maxValue" id="maxValue" type="number" onInput={(e) => { props.hendlerMinMax(e.currentTarget.value, props.setMaxValue) }} />
                </div>
                <div>
                    <Field name="rotate" id="rotate" style={{ 'width': '100%' }} type="range" min='0' max='360' value={props.rotate}
                        onInput={(e) => props.handleChange(e)} />
                    <span>{props.rotate} deg(угол поворота)</span>
                </div>
            </div>
        </>
    );
}

export default SettingsUI;

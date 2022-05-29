import { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import style from './Settings.module.scss'
import { ButtonClick } from "../fragments/ButtonClick";
import { BsQuestionCircle } from 'react-icons/bs'
import classNames from "classnames/bind";


let cx = classNames.bind(style);


const SettingsUI = (props) => {
    // initialValues from server side settings.minValue...
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [firstColor, setFirstColor] = useState('#6277de');
    const [secondColor, setSecondColor] = useState('#f400ff');
    const [rotate, setRotate] = useState(83)
    const [show, setShow] = useState(false)

    //предварительный просмотр
    useEffect(() => {
        let bg = `linear-gradient(${rotate}deg, ${firstColor} ${minValue}%, ${secondColor} ${maxValue}%)`
        props.setBg(bg)
    }, [rotate, firstColor, minValue, secondColor, maxValue]);
    // show true/false classnames
    let mixStyles = cx({
        respons: true,
        active: show,
    });

    const dubleMinMax = (value, fun) => {
        if (value > 100) {
            fun(100)
        } else if (value < 0 || value === '') {
            fun(0)
        } else {
            fun(value)
        }
    }
    // default from multi-range-slider-react
    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };
    //dispatch to BLL layer from onClick()
    const hendler = () => {
        console.log(rotate)
        //dispatch(thunk(minValue,maxValue...n))
    }

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
                    <input type="color" value={firstColor} onChange={(e) => { setFirstColor(e.currentTarget.value) }} />
                    <input type="color" value={secondColor} onChange={(e) => { setSecondColor(e.currentTarget.value) }} />
                </div>
                <MultiRangeSlider
                    step={1}
                    ruler={false}
                    preventWheel={false}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
                <div className={style.ui_block}>
                    <input value={minValue} type="number" onChange={(e) => { dubleMinMax(e.currentTarget.value, setMinValue) }} />
                    <input value={maxValue} type="number" onChange={(e) => { dubleMinMax(e.currentTarget.value, setMaxValue) }} />
                </div>
                <div>
                    <input style={{ 'width': '100%' }} type="range" min='0' max='360' value={rotate}
                        onChange={(e) => { setRotate(e.currentTarget.value) }} />
                    <span>{rotate} deg(угол поворота)</span>
                </div>
                <div className={style.section_block}>
                    <ButtonClick click={hendler} text={'Сохранить'} />
                </div>
            </div>
        </>
    );
}

export default SettingsUI;

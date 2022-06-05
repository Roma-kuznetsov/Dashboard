import React, { useEffect, useState } from "react";
import style from './Settings.module.scss';
import SettingsUI from './SettingsUI'
import { Field, Form, Formik } from "formik";
import { ButtonSubmit } from "../fragments/ButtonSubmit";
import SettingsBlock from "./SettingsBlock";

const Settings = (props) => {
    //create redux store
    // initialValues from server side settings...
    const [state, setState] = useState({ avatar: '', userName: 'clown', firstColor: '#6277de', secondColor: '#f400ff', rotate: 83 })
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    //location home
    useEffect(() => {
        let bg = `linear-gradient(${state.rotate}deg, ${state.firstColor} ${minValue}%, ${state.secondColor} ${maxValue}%)`
        props.setBg(bg)
    }, [state.rotate, state.firstColor, minValue, state.secondColor, maxValue]);

    const hendlerMinMax = (value, fun) => {
        if (value > 100) {
            fun(100)
        } else if (value < 0 || value === '') {
            fun(0)
        } else {
            fun(value)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };

    return (
        <section className={style.container}>
            <Formik
                initialValues={{
                    avatar: state.avatar,
                    userName: state.name,
                    firstColor: state.firstColor,
                    secondColor: state.secondColor,
                    minValue: minValue,
                    maxValue: maxValue,
                    rotate: state.rotate,

                }}
                onSubmit={(values) => {
                    values.minValue = minValue
                    values.maxValue = maxValue
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form >
                    <SettingsBlock avatar={state.avatar} userName={state.userName} handleChange={handleChange} />

                    <SettingsUI
                        rotate={state.rotate} setMaxValue={setMaxValue}
                        setMinValue={setMinValue} minValue={minValue}
                        maxValue={maxValue} handleInput={handleInput}
                        handleChange={handleChange}
                        hendlerMinMax={hendlerMinMax} />

                    <div className={style.section_block}>
                        <ButtonSubmit text={'Сохранить'} />
                    </div>
                </Form>
            </Formik>
        </section >
    );
}

export default Settings;

import classNames from "classnames/bind";
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { DiCodeigniter } from 'react-icons/di';
import { ButtonSubmit } from '../fragments/ButtonSubmit';
import Fieldjs from './Field';
import style from './Login.module.scss';
import { validateKey } from "./ValidateForm";


let cx = classNames.bind(style);
const CodeForm = (props) => {
    const [key, setKey] = useState('111')
    const [counter, setCounter] = useState(120);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    let mixStyle = cx({
        description: true,
        display: counter === 0,
    });

    return (
        <div>
            <div className={style.description}>На указанный вами адресс был отправлен код подтвеждения</div>
            <Formik
                initialValues={{
                    code: ''
                }}
                onSubmit={values => {
                    if (values.code === key) {
                        console.log(values);
                        props.setForm('Создате новый пароль')
                        return
                    }
                }}>

                {({ errors, touched }) => (
                    <Form>
                        <Fieldjs label={'Код подтверждения'}
                            name={'code'} icon={DiCodeigniter}
                            touched={touched.code} errors={errors.code}
                            type={'text'} validate={validateKey} />
                        <div className={mixStyle}>
                            <button disabled={counter !== 0} onClick={() => { setCounter(120) }}
                                >Отправить код повторно</button>
                            <span> через {counter} секунд</span>
                        </div>
                        <ButtonSubmit text={'Отпрвить'} />
                    </Form>
                )}
            </Formik>
        </div >
    );
};

export default CodeForm;

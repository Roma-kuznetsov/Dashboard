import React from 'react';
import { Formik, Form } from 'formik';
import style from './Login.module.scss'
import { validateEmail, validatePassword, validateUsername } from './ValidateForm.tsx';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai'
import Fieldjs from './Field';

const SingupForm = () => {

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                userName: ''
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Fieldjs validate={validateEmail} label={'Почтовый адрес'}
                        name={'email'} icon={MdAlternateEmail} errors={errors.email} touched={touched.email} type={'text'} />

                    <Fieldjs validate={validatePassword} label={'Пароль'}
                        name={'password'} icon={RiLockPasswordLine} errors={errors.password} touched={touched.password} type={'password'} />

                    <Fieldjs validate={validateUsername} label={'Имя'}
                        name={'userName'} icon={AiOutlineUser} errors={errors.userName} touched={touched.userName} type={'text'} />

                    {/* <div className={style.form_block}>
                            <label htmlFor="userName">Имя</label>
                            <div className={style.field_icon}>
                                <Field className={style.form_input} type='text' name="userName" validate={validateUsername} />
                                <span><AiOutlineUser size={24} /></span>
                            </div>
                            {errors.userName && touched.userName && <div>{errors.userName}</div>}
                        </div> */}
                    <div className={style.form_button_container}>
                        <button className={style.form_button} type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};



export default SingupForm;
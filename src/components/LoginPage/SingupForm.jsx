import { Form, Formik } from 'formik';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ButtonSubmit } from '../fragments/ButtonSubmit';
import Fieldjs from './Field';
import { validateEmail, validatePassword, validateUsername } from './ValidateForm';

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
                        name={'email'} icon={MdAlternateEmail}
                        errors={errors.email} touched={touched.email}
                        type={'text'} />

                    <Fieldjs validate={validatePassword} label={'Пароль'}
                        name={'password'} icon={RiLockPasswordLine}
                        errors={errors.password} touched={touched.password}
                        type={'password'} />

                    <Fieldjs validate={validateUsername} label={'Имя'}
                        name={'userName'} icon={AiOutlineUser} 
                        errors={errors.userName} touched={touched.userName} 
                        type={'text'} />

                    <ButtonSubmit text={'Отправить'}/>
                </Form>
            )}
        </Formik>
    )
};



export default SingupForm;
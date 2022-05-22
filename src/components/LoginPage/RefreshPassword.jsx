import { Form, Formik } from 'formik';
import { MdAlternateEmail } from 'react-icons/md';
import { ButtonSubmit } from '../fragments/ButtonSubmit';
import Fieldjs from './Field';
import style from './Login.module.scss';
import { validateEmail } from './ValidateForm';


const RefreshPassword = (props) => {

    return (
        <div>
            <div className={style.description}>Введите адрес почты указаный при регистрации</div>
            <Formik
                initialValues={{
                    email: ''
                }}
                onSubmit={values => {
                    console.log(values);
                    props.setForm('Подтверждение')
                }}
            >

                {({ errors, touched }) => (
                    <Form>
                        <Fieldjs validate={validateEmail} label={'Почтовый адрес'}
                            name={'email'} icon={MdAlternateEmail}
                            errors={errors.email} touched={touched.email}
                            type={'text'} />
                        <ButtonSubmit text={'Отправить'} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RefreshPassword;

import { Form, Formik } from 'formik';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ButtonSubmit } from '../fragments/ButtonSubmit';
import Fieldjs from './Field';
import { validateEmail, validatePassword } from './ValidateForm.tsx';


const LoginForm = (props) => {

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
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
                        <ButtonSubmit />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;

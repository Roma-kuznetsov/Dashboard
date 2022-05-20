import { Field, Form, Formik } from 'formik';
import style from './Login.module.scss'
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
                        <div className={style.form_block}>
                            <label htmlFor="email">Почтовый адрес</label>
                            <Field className={style.form_input} name="email" validate={validateEmail} />
                            {errors.email && touched.email && <div>{errors.email}</div>}
                        </div>
                        <div className={style.form_block}>
                            <label htmlFor="password">Пароль</label>
                            <Field className={style.form_input} type='password' name="password" validate={validatePassword} />
                            {errors.password && touched.password && <div >{errors.password}</div>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;

import { Form, Formik } from 'formik';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ButtonSubmit } from '../fragments/ButtonSubmit';
import Fieldjs from './Field';
import { validatePassword } from './ValidateForm';


const CreateNewPasswordForm = (props) => {

    return (
        <div>
            <Formik
                initialValues={{
                    newPassword: ''
                }}
                onSubmit={values => {
                    console.log(values);
                    props.setForm('Вход')
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Fieldjs validate={validatePassword} label={'Пароль'}
                            name={'newPassword'} icon={RiLockPasswordLine}
                            errors={errors.newPassword} touched={touched.newPassword}
                            type={'password'} />
                        <ButtonSubmit text={'Отправить'} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateNewPasswordForm;

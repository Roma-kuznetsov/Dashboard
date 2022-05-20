import { useState } from 'react';
import style from './Login.module.scss'
import LoginForm from './LoginForm';
import SingupForm from './SingupForm';


const Login = () => {
    const [form, setForm] = useState('Вход')
    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.form_header}>
                    {form}
                </div>
                <div>
                    {form === 'Вход' ? <LoginForm form={form} setForm={setForm} /> : <SingupForm />}
                </div>
                <div className={style.swapForm}>
                    {form === 'Вход' ? <span onClick={() => { setForm('Регистрация') }}>Регистрация</span>
                        : <span onClick={() => { setForm('Вход') }}>Вход</span>}
                </div>
            </div>
        </div>
    );
}

export default Login;

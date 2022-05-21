import { useState } from 'react';
import CodeForm from './CodeForm';
import style from './Login.module.scss'
import LoginForm from './LoginForm';
import RefreshPassword from './RefreshPassword';
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
                    {form === 'Вход' ? <LoginForm setForm={setForm} />
                        : form === 'Регистрация' ? <SingupForm />
                            : form === 'Восстановление' ? <RefreshPassword setForm={setForm} />
                                : form === 'Подтверждение' ? < CodeForm setForm={setForm} />
                                    : <div></div>}
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

import { useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Account from '../AccountPage/Account';
import Settings from '../SettingsPage/Settings';
import Task from '../TaskPage/Task';
import style from './Home.module.scss';
import Navbar from './Navbar';


const Home = () => {
    const [isAuth, setisAuth] = useState(true)
    const [bg,setBg] = useState('linear-gradient(83deg, #6277de 0%, #f400ff 100%)')


    if (!isAuth) {
        return (<Navigate to="/login" />);
    } else {
        return (
            <section className={style.container} style={{'background': bg}}>
                <div className={style.block}>
                    <Navbar />
                    <div className={style.content}>
                            <Routes>
                                <Route path="account" element={<Account />} />
                                <Route path="tasks" element={<Task />} />
                                <Route path="settings" element={<Settings setBg={setBg} />} />
                            </Routes>
                    </div>
                </div>
            </section >
        );
    }
}

export default Home;

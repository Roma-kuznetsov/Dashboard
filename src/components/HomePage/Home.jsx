import { useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Account from '../AccountPage/Account';
import Group from '../GroupPage/Group';
import Settings from '../SettingsPage/Settings';
import Task from '../TaskPage/Task';
import style from './Home.module.scss';
import Navbar from './Navbar';


const Home = () => {
    const [isAuth, setisAuth] = useState(true)
    const [bg, setBg] = useState('linear-gradient(83deg, #6277de 0%, #f400ff 100%)')
    const OllTasks = [
        {id: 1, name: 'begin', tasks: [{ id: 11, title: 'Первая задача', description: 'lorem lorem lorem' },
        { id: 12, title: 'Первая задача1', description: 'lorem lorem lorem' }]},
        {id: 2, name: 'inProcces',tasks: [{ id: 21, title: 'Вторая задача', description: 'lorem lorem lorem' }]},
        {id: 3, name: 'finish',tasks: [{ id: 31, title: 'Третья задача', description: 'lorem lorem lorem' }]}
    ]
    if (!isAuth) {
        return (<Navigate to="/login" />);
    } else { 
        return (
            <section className={style.container} style={{ 'background': bg }}>
                <div className={style.block}>
                    <Navbar />
                    <div className={style.content}>
                        <Routes>
                            <Route path="account" element={<Account />} />
                            <Route path="tasks" element={<Task task1={OllTasks} />} />
                            <Route path="groups" element={<Group />} />
                            <Route path="settings" element={<Settings bg={bg} setBg={setBg} />} />
                        </Routes>
                    </div>
                </div>
            </section >
        );
    }
}

export default Home;

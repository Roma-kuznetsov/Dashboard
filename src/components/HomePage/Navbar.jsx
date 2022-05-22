import { NavLink, useLocation } from "react-router-dom"
import style from './Home.module.scss'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai';
import { GrCompliance } from 'react-icons/gr'
import {BsPeople} from 'react-icons/bs'


const Navbar = () => {
    const location1 = useLocation();
    return (
        <nav className={style.nav}>
            <NavLink to='/account' className={location1.pathname === "/account"
                ? `${style.active} ${style.nav_block}` : style.nav_block} >
                <div className={style.nav_icon}><AiOutlineUser size={32} /></div>
                <div className={style.nav_text}>Профиль</div>
            </NavLink>

            <NavLink to='/tasks' className={location1.pathname === "/tasks"
                ? `${style.active} ${style.nav_block}` : style.nav_block}>
                <div className={style.nav_icon}><GrCompliance size={32} /></div>
                <div className={style.nav_text}>Задачи</div>
            </NavLink>

            <NavLink to='/settings' className={location1.pathname === "/settings"
                ? `${style.active} ${style.nav_block}` : style.nav_block}>
                <div className={style.nav_icon}><FiSettings size={32} /></div>
                <div className={style.nav_text}>Настройки</div>
            </NavLink>
            <NavLink to='/groups' className={location1.pathname === "/groups"
                ? `${style.active} ${style.nav_block}` : style.nav_block}>
                <div className={style.nav_icon}><BsPeople size={32} /></div>
                <div className={style.nav_text}>Группы</div>
            </NavLink>
        </nav >

    );
}

export default Navbar;

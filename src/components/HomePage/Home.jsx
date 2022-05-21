import { useState } from 'react';
import { Navigate } from "react-router-dom"
import style from './Home.module.scss'


const Home = () => {
    const [isAuth, setisAuth] = useState(true)


    if (!isAuth) {
        return (<Navigate to="/login"/>);
    } else {
        return (
            <section className={style.container}>
                <div className={style.block}>
                    <nav className={style.nav}>

                    </nav>
                    <div className={style.content}>

                    </div>
                </div>
            </section>
        );
    }
}

export default Home;

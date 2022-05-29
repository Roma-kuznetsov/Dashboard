import React from "react";
import style from './Settings.module.scss';
import defaultAvatar from '../../images/avatar.jpg';
import SettingsFragment from './SettingsFragment.jsx'
import SettingsUI from './SettingsUI'



const Settings = (props) => {
    return (
        <section className={style.container}>
            <div className={style.block}>
                <div className={style.title}>
                    <h1>Настройки</h1>
                </div>
                {/* avatar block */}
                <div className={style.avatar_section}>
                    <h3 className={style.sub_title}>Avatar</h3>
                    <div className={style.SwitchAva}>
                        <div className={style.sub_SwitchAvatar}>
                            <img className={style.avatar} src={defaultAvatar} alt="" />
                            <input type='file' id='input__file' className={style.avatarInput}></input>
                            <div className={style.container_label}>
                                <label className={style.avatarButton} htmlFor="input__file"><p>Сменить аватар</p></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.field}>
                    <h1>Почта</h1>
                    <p>{'ksfiSF@mail.ru'}</p>
                </div>
                <SettingsFragment title={'Имя'} name={'clown'} />
            </div>

            <SettingsUI setBg={props.setBg} />

        </section >
    );
}

export default Settings;

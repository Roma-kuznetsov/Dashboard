import { Field } from "formik";
import React from "react";
import style from "./Settings.module.scss"
import SettingsFragment from "./SettingsFragment";
import defaultAvatar from '../../images/avatar.jpg';

const SettingsBlock = (props) => {
    return (
        <div className={style.block}>
            <div className={style.title}>
                <h1>Настройки</h1>
            </div>
            {/* avatar block */}
            <div className={style.avatar_section}>
                <h3 className={style.sub_title}>Avatar</h3>
                <div className={style.SwitchAva}>
                    <div className={style.sub_SwitchAvatar}>
                        <img className={style.avatar} src={props.avatar || defaultAvatar} alt="" />
                        <Field type='file' id='avatar' name="avatar" className={style.avatarInput} value={props.avatar} />
                        <div className={style.container_label}>
                            <label className={style.avatarButton} htmlFor="avatar"><p>Сменить аватар</p></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.field}>
                <h1>Почта</h1>
                <p>{'ksfiSF@mail.ru'}</p>
            </div>
            <SettingsFragment title={'Имя'} name={props.userName} handleChange={props.handleChange} />
        </div>
    )
}

export default SettingsBlock
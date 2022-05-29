import { useState } from "react"
import style from './Settings.module.scss'


const SettingsFragment = (props) => {
    const [isUpdate, setIsUpdate] = useState(false)
    const [name, setName] = useState(props.name)
    return (
        <div className={style.field}>
            <h1>{props.title}</h1>
            <div className={style.block_flex}>
                {isUpdate ? <input className={style.field_input}
                    value={name}
                    onChange={(e) => { setName(e.currentTarget.value) }}
                    type="text" />
                    : <p>{props.name}</p>}
            </div>
            <div className={style.block_flex}>
                {isUpdate ? <button className={style.form_button} onClick={() => { setIsUpdate(!isUpdate) }}>Применить</button>
                    : <button className={style.form_button} onClick={() => { setIsUpdate(!isUpdate) }}>Изменить</button>}
            </div>
        </div>
    )
}

export default SettingsFragment
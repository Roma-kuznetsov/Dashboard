import { useState } from "react"
import style from './Settings.module.scss'


const SettingsFragment = (props) => {
    const [isUpdate, setIsUpdate] = useState(false)
    return (
        <div className={style.field}>
            <h1>{props.title}</h1>
            <h1>{props.name}</h1>
            <input type="text" value={props.name} />
            {isUpdate ? <button onClick={() => { setIsUpdate(!isUpdate) }}>Сохранить</button>
                : <button onClick={() => { setIsUpdate(!isUpdate) }}>Изменить</button>}
        </div>
    )
}

export default SettingsFragment
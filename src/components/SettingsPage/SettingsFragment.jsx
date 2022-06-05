import { Field } from "formik"
import { useState } from "react"
import style from './Settings.module.scss'


const SettingsFragment = (props) => {
    const [isUpdate, setIsUpdate] = useState(false)
    return (
        <div className={style.field}>
            <h1>{props.title}</h1>
            <div className={style.block_flex}>
                {isUpdate ? <Field className={style.field_input}
                    id="userName"
                    name="userName"
                    type="text"
                    value={props.name}
                    onInput={(e)=>{props.handleChange(e)}}
                    />
                    : <p>{props.name}</p>}
            </div>
            <div className={style.block_flex}>
                {isUpdate ? <button type="button" className={style.form_button} onClick={() => { setIsUpdate(!isUpdate) }}>Применить</button>
                    : <button type="button" className={style.form_button} onClick={() => { setIsUpdate(!isUpdate) }}>Изменить</button>}
            </div>
        </div>
    )
}

export default SettingsFragment
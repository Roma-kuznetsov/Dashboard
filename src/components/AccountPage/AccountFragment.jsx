import React, { useState } from 'react';
import FormNew from '../fragments/FormNew';
import { MapElement } from '../fragments/MapElement';
import style from './Account.module.scss'

const AccountFragmetn = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className={style.field}>
                <h1 className={style.field_text} onClick={() => { setShow(!show) }}>{props.text} </h1>
                <h1>{props.arr.length}</h1>
            </div>
            <ul className={show ? style.showOld : style.unShowOld}>
                {props.form && <FormNew />}
                {props.arr.map((i) => <MapElement key={i.id} title={i.title} description={i.description} />)}
            </ul>
        </div>
    )
}

export default AccountFragmetn;
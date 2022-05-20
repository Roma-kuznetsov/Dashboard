import classNames from "classnames/bind";
import { useState } from "react";
import styles from './Test.module.scss'

let cx = classNames.bind(styles);


const Test = () => {
    const [isReg, setReg] = useState('reg')

    let hqader = cx({
        color: true,
        active: isReg == 'log',
    });
    return (
        <div>
            <h1 className={hqader}>Test</h1>
            <button onClick={() => { setReg('log')}}>sub</button>
            <button onClick={() => { setReg('reg')}}>sub2</button>
        </div>
    );
}

export default Test;

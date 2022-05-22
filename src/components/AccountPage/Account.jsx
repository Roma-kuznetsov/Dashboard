import { useState } from 'react';
import FormNew from '../fragments/FormNew';
import { MapElement } from '../fragments/MapElement';
import style from './Account.module.scss';






const Account = (props) => {
    const [showOld, setShowOld] = useState(false)
    const [showNew, setShowNew] = useState(false)

    let arr = [{ id: 1, title: 'dashboard', description: 'доделать этот сайт' },
    { id: 2, title: 'dashboard', description: 'доделать этот сайт' },
    { id: 3, title: 'dashboard', description: 'доделать этот сайт' }]

    const hendler = () => {
        setShowNew(false)
    }

    return (
        <section className={style.container}>
            <div className={style.title}>
                <h1>Мой профиль</h1>
            </div>

            {/* вынести в отдельную компоненту */}
            <div className={style.field}>
                <h1 className={style.field_text} onClick={() => { setShowOld(!showOld) }}>Закрытых задач </h1>
                {/* props.profile.array.length */}
                <h1>{arr.length}</h1>
            </div>
            {/* props.arr.map */}
            <ul className={showOld ? style.showOld : style.unShowOld}>
                {arr.map((i) => <MapElement key={i.id} title={i.title} description={i.description} />)}
            </ul>


            <div className={style.field}>
                {/* props.profile.array.length */}
                <h1>Активных задач</h1>
                <h1>{'1'}</h1>
            </div>


            {/* вынести в отдельную компоненту */}
            <div className={style.field}>
                <h1 className={style.field_text} onClick={() => { setShowNew(!showNew) }}>Идеи для будущих проектов </h1>
                <h1>{arr.length}</h1>
            </div>
            {/* props.arr.map */}
            <ul className={showNew ? style.showOld : style.unShowOld}>
                <FormNew />
                {arr.map((i) => <MapElement key={i.id} title={i.title} description={i.description} />)}

            </ul>
        </section>
    );
}

export default Account;

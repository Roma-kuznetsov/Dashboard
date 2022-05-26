import style from './Account.module.scss';
import AccountFragmetn from './AccountFragment';

const Account = (props) => {

    let arr = [{ id: 1, title: 'dashboard', description: 'доделать этот сайт' },
    { id: 2, title: 'dashboard', description: 'доделать этот сайт' },
    { id: 3, title: 'dashboard', description: 'доделать этот сайт' }]

    return (
        <section className={style.container}>
            <div className={style.title}>
                <h1>Мой профиль</h1>
            </div>
            <AccountFragmetn arr={arr} text={'Закрытые задачи'} />
            <div className={style.field}>
                <h1>Активных задач</h1>
                {/* props.profile.array.length */}
                <h1>{'1'}</h1>
            </div>
            <AccountFragmetn arr={arr} text={'Идеи для будущих проектов'} form={true} />
        </section>
    );
}

export default Account;

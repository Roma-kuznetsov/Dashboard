import style from './Task.module.scss'
import OneTask from './OneTask'

const TaskBlock = (props) => {
    //tasks: [{ id: 11, title: 'Первая задача', description: 'lorem lorem lorem' }]
    return (
        <div>
            <div className={style.field}>
                <h1>{props.name}</h1>
                {/* props.profile.array.length */}
                <h1>{'1'}</h1>
            </div>
            <div>
                {props.tasks.map((i)=> <OneTask key={i.id} title={i.title} description={i.description}  /> )}
            </div>
        </div>
    );
}

export default TaskBlock;

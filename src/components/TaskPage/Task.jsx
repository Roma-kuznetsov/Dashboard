import style from './Task.module.scss'
import TaskBlock from './TaskBlock';

const Task = (props) => {
    //    const task1 = [{ id: 1, name: 'begin', tasks: [{ id: 11, title: 'Первая задача', description: 'lorem lorem lorem' }] }]
    return (
        <section className={style.container}>
        <div className={style.title}>
            <h1>Задачи</h1>
        </div>
        {props.task1.map((i)=> <TaskBlock key={i.id} name={i.name} tasks={i.tasks} />)}
    </section>
    );
}

export default Task;

import Task from './Task'


const Tasks=({tasks,onDelete,onDouble})=>{


    return(
        <>
        {tasks.map((task)=><Task key={task.id} task={task} onDelete={onDelete} onDouble={onDouble} />)}
        </>
    )
}

export default Tasks
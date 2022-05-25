const Task=({task,onDelete,onDouble})=>{
    return(
        <div onDoubleClick={()=>onDouble(task.id)}>
            <h3>{task.text} - reminder:{task.reminder?"true":"false"}</h3>
            <p>{task.date}</p>
            <button onClick={()=>onDelete(task.id)}>click</button>
        </div>
    )
}
export default Task
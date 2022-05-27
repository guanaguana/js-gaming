import React from "react"

const Task=({task,onDelete,onDouble})=>{
    return(
        <div onDoubleClick={()=>onDouble(task.id)}>
            <h3>{task.text}</h3>
            <h4>{task.date}</h4>
            <p>reminder:{task.reminder?"true":"false"}</p>
            <button onClick={()=>onDelete(task.id)}>click</button>
        </div>
    )
}
export default Task
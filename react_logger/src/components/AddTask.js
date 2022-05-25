import { useState } from "react"

const AddTask=({onAdd})=>{
    const[text,setText]=useState('')
    const[date,setDate]=useState('')
    const[reminder,setReminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert("wifenlooof")
        }
        else{
        onAdd({text,date,reminder})
        
        setText('')
        setDate('')
        setReminder(false)
    }}
    return(
        <form onSubmit={onSubmit}>
            <div>
               <label htmlFor="jmeno">Task</label>
               <input type="text" name="jmeno" placeholder="Add Task" onChange={(e)=>{setText(e.target.value)}} value={text}/> 
            </div>


            <div>
                <label htmlFor="datum">Date</label>
                <input type="date" name="datum" placeholder="Add Date" onChange={(e)=>{setDate(e.target.value)}} value={date}/> 
            </div>


            <div>
                    <label htmlFor="Check">Reminder</label>
                    <input type="checkbox" name="Check" placeholder="Set reminder" onChange={(e)=>{setReminder(e.currentTarget.checked)}} checked={reminder} /> 
            </div>
            <input type="submit" value="uložit" />
            <hr />
        </form>
    )
}

export default AddTask
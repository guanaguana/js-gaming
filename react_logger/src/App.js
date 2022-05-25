import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask,setShow]=useState(false)
  const[tasks,setTask]=useState([{id:1,text:"sample text",date:7,reminder:true},{id:2,text:"lorem ipsum",date:2,reminder:false}])
  const deleteTask=(id)=>{
    setTask(tasks.filter((task)=>task.id !== id))
  }
  const toggleReminder=(id)=>{
    setTask(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
  const addTask=(task)=>{
    console.log(task)
    const id= Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTask([...tasks,newTask])
  }

  return (
    <div className="App">
      <Header onAdd={()=>setShow(!showAddTask)} napis={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      { (tasks.length>0)?<Tasks tasks={tasks} onDelete={deleteTask} onDouble={toggleReminder} />:<p>Nic</p> }
    </div>
  );
}

export default App;

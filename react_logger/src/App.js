import React,{ useState, useEffect } from "react"
import { BrowserRouter,Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import Footer from "./components/footer";
import About from "./components/about";


function App() {
  const [showAddTask,setShow]=useState(false)
  const[tasks,setTask]=useState([])

  useEffect(()=>{
   const getTasks=async()=>{
     const tasksFromServer= await fetchTasks()
     setTask(tasksFromServer)
   }
    getTasks()
  },[])



  const fetchTasks= async() =>{
    const res= await fetch("http://localhost:5000/tasks")
    const data=  res.json()
    return data
  }

  const fetchTask=async (id) =>{
    const res=await fetch(`http://localhost:5000/tasks/${id}`)
    const data=await res.json()
    return data
  }


  const deleteTask=async (id)=>{
     await fetch(`http://localhost:5000/tasks/${id}`,{
       method:"DELETE",
     })

   setTask(tasks.filter((task)=>task.id !== id))
  }
  const toggleReminder=async(id)=>{
    const taskToToggle=await fetchTask(id)
    const updatedTask={...taskToToggle,reminder:!taskToToggle.reminder}
    const res=await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updatedTask)})
      const data=await res.json()

    setTask(tasks.map((task)=>task.id===id?{...task,reminder:data.reminder}:task))
  }
  const addTask=async(task)=>{
    const res=await fetch("http://localhost:5000/tasks",{
      method:"POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
    const data=await res.json()
    setTask([...tasks,data])
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Header onAdd={()=>setShow(!showAddTask)} napis={showAddTask} />
      <Routes>
      <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onDouble={toggleReminder}
                  />
                ) : (
                  'Nic'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />

      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

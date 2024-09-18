/* eslint-disable no-unused-vars */


import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/api";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function genId(data){
    const maxId = data.reduce((prev, current) => prev && prev> current.id ? prev : current.id ,0)
    return maxId+1
  }
  const handleAddTask = (text) => {
    
  };
  const handleChangeTask=(editedtask)=>{
    
  }
  const handleDeleteTask=(delId)=>{
    
  }

  return (
    <>
      <div className="app" style={{margin:"200px auto",width:"400px",background:"#ddd",padding:"80px",textAlign:"center"}}>
        

        <AddTask Addit={handleAddTask} />
        <TaskList tasks={tasks} onchangetask={handleChangeTask} ondeletetask={handleDeleteTask}/>
        
      </div>
    </>
  );
}

export default App;

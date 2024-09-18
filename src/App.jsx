/* eslint-disable no-unused-vars */


import { useReducer, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/api";
import taskReducer from "./reducers/taskReducer";
import { TaskContext, TaskDispatchContext } from "./contexts/TaskContexts";
function App() {
  const [tasks, dispatch] = useReducer(taskReducer,initialTasks);

  function genId(data){
    const maxId = data.reduce((prev, current) => prev && prev> current.id ? prev : current.id ,0)
    return maxId+1
  }
  const handleAddTask = (text) => {
    dispatch({type:"added",text: text,id: genId(tasks)})
  };
  const handleChangeTask=(editedtask)=>{
    dispatch({type:"changed",editedtask: editedtask})
    console.log(editedtask)
  }
  const handleDeleteTask=(delId)=>{
    dispatch({type:"delete",delId: delId})
  }

  return (
    <>
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>

      <div className="app" style={{margin:"200px auto",width:"400px",background:"#ddd",padding:"80px",textAlign:"center"}}>        
        <AddTask Addit={handleAddTask} />
        <TaskList tasks={tasks}/>
      </div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
    </>
  );
}

export default App;

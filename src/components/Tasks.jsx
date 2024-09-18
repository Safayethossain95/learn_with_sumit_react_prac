
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { TaskDispatchContext } from "../contexts/TaskContexts";

const Tasks = ({ task }) => {

  const dispatch = useContext(TaskDispatchContext)
    const [editable,seteditable] = useState(false)
  return (
    <>
    {
        editable ? (
         <>
          <input
            type="text"
            value={task.text}
            onChange={(e) => 
            dispatch({type:"changed", editedtask: {...task,text:e.target.value}})}
          />
          <button onClick={()=>seteditable(false)}>Save</button>
         </>
        )
        : (
        <>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              dispatch({type:"changed", editedtask: {...task,done: e.target.checked}})}
            }
          />
          <h3>{task.text}</h3>
          <button onClick={()=>seteditable(true)}>Edit</button>
        </>
        )
    }
      
      
      <button onClick={() => dispatch({type:"delete",delId: task.id})}>Delete</button>
    </>
  );
};

export default Tasks;


/* eslint-disable react/prop-types */

import { useState } from "react";

const Tasks = ({ task,onchangetask,ondeletetask }) => {

    const [editable,seteditable] = useState(false)
  return (
    <>
    {
        editable ? (
         <>
          <input
            type="text"
            value={task.text}
            onChange={(e) => onchangetask({...task,text:e.target.value})}
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
              onchangetask({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          <h3>{task.text}</h3>
          <button onClick={()=>seteditable(true)}>Edit</button>
        </>
        )
    }
      
      
      <button onClick={() => ondeletetask(task.id)}>Delete</button>
    </>
  );
};

export default Tasks;

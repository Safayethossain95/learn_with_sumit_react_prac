/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import Tasks from "./Tasks"


const TaskList = ({tasks,onchangetask,ondeletetask}) => {
    const [isedit,setisedit] = useState(false)

    const handleedit = (myvar) => {
        setisedit(myvar)
    }

  return (
    <>
        {
            tasks.map((task) => (
                <div key={task.id} style={{display:"flex",margin:"20px 0",gap:"10px"}}>
                   <Tasks task={task} editable={handleedit} onchangetask={onchangetask} ondeletetask={ondeletetask}/>
                </div>
            ))
        }
    </>
  )
}

export default TaskList
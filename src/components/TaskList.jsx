/* eslint-disable no-unused-vars */

import { useContext, useState } from "react"
import Tasks from "./Tasks"
import { TaskContext } from "../contexts/TaskContexts"


const TaskList = () => {
    const [isedit,setisedit] = useState(false)
    const tasks = useContext(TaskContext)

    const handleedit = (myvar) => {
        setisedit(myvar)
    }

  return (
    <>
        {
            tasks.map((task) => (
                <div key={task.id} style={{display:"flex",margin:"20px 0",gap:"10px"}}>
                   <Tasks task={task} editable={handleedit} />
                </div>
            ))
        }
    </>
  )
}

export default TaskList
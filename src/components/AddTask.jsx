/* eslint-disable react/prop-types */
import { useState } from "react"

const AddTask = ({Addit}) => {
    const [text,settext] = useState("")
  return (
    <div style={{display:"flex", gap:"20px"}}>  
        <input style={{border:"0",height:"40px"}} type="text" value={text} onChange={(e)=>settext(e.target.value)} />
        <button onClick={()=>{settext(""); Addit(text)}}>Add Task</button>
    </div>
  )
}

export default AddTask
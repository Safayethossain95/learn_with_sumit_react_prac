/* eslint-disable no-undef */
// --- add task
setTasks([
    ...tasks,
    {id:genId(tasks) , text: text, done:false}
  ])

//   --- change task

  const newtasks= tasks.map((task) => {
    if(task.id==editedtask.id){
      return editedtask;
    }
    else{
      return task;
    }
  })
  setTasks(newtasks)

  // --- delete task
  const newTasks= tasks.filter((task) => task.id!==delId)
    setTasks(newTasks)
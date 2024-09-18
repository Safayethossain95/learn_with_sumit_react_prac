
export default function taskReducer(tasks,action){
    switch (action.type) {
        case "added":{
            return [
                ...tasks,
                {id:action.id , text: action.text, done:false}
              ] 
        }
        case "changed":{
            return tasks.map((task) => {
                if(task.id==action.editedtask.id){
                  return action.editedtask;
                }
                else{
                  return task;
                }
              })
        }
        case "delete":{
            return tasks.filter((task) => task.id!==action.delId)
        }
        default:{
            throw Error(`No action matched with ${action.type}`)
        }
    }
   
   
}
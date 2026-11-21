


import { useState } from "react";

function TodoTask() {

  // Store the current input value
  const [taskName, setTaskName] = useState("");

  // Store all tasks in an array
  const [tasks, setTasks] = useState([]);

  //update task 
  const [updateindex, setUpdateindex] = useState(false);

  // Handle form submission
  function taskDetail(e) {
    e.preventDefault();

    // Check if input is empty
    if(updateindex == false){
 if (taskName.trim() === "") {
      return;
    }
    else {
      // Add new task to the array
      setTasks([...tasks, taskName]);

      // Clear the input field
      setTaskName("");
    }
    }
    else{
      const updatedTask = tasks.map((value,index)=>{
        if(updateindex === index ){
          return taskName;
        }
        else{
          return value;
        }
      })
      setTasks(updatedTask);
      setUpdateindex(false);
      setTaskName("");
    }
   
    
  }
  function handleDeleteTask(index){
    const updatedTask = tasks.filter((value,ind)=>{
           if(index !== ind){
            return value;
           }
    })
    setTasks(updatedTask);
  }
  function handleUpdateTask(index){
setTaskName(tasks[index]);
setUpdateindex(index);
   
  }


  return (
    <div>

      <h2>My Todo App</h2>

      <form onSubmit={taskDetail}>

        <input
          type="text"
          value={taskName}
          placeholder="Enter your task"
          onChange={(e) => setTaskName(e.target.value)}
        />

        <button type="submit">Add Task</button>

      </form>

      {/* Display all tasks */}
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button onClick={()=>handleDeleteTask(index)}>D</button>
              <button onClick={()=>handleUpdateTask(index)}>U</button>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default TodoTask;


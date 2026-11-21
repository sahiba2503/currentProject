


import { useState } from "react";

function TodoTask() {

  // Store the current input value
  const [taskName, setTaskName] = useState("");

  // Store all tasks in an array
  const [tasks, setTask] = useState([]);

  // Handle form submission
  function taskDetail(e) {
    e.preventDefault();

    // Check if input is empty
    if (taskName.trim() === "") {
      return;
    }
    else {
      // Add new task to the array
      setTask([...tasks, taskName]);

      // Clear the input field
      setTaskName("");
    }
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
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default TodoTask;


import { useState, useEffect } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if(taskName == "" || taskDeadline == ""){}
    if (taskName.trim()) {
      setTasks([...tasks, { taskName, taskDeadline, done: false }]);
      setTaskName("");
      setTaskDeadline("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const textboxStyle = {padding: 5, margin: 10}

  return (
    <div>
      <h2>My Tasks</h2>
      <form onSubmit={addTask}>
        <input
          type="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add new task"
          style={textboxStyle}
          required
        />
        <input 
            type="date"
            value={taskDeadline}
            onChange={(e) => setTaskDeadline(e.target.value)}
            placeholder="Deadline"
            style={textboxStyle}
            required
        />
        <button type="submit" style={{padding: 5}}>Add</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
                style={textboxStyle}
              />
              <span style={{ 
                textDecoration: task.done ? "line-through" : "",
                color: (!task.done && new Date(task.taskDeadline) < new Date()) ? "red" : "inherit",
                padding: 5,
                margin: 5,
              }}>
                {task.taskName}, {task.taskDeadline}
              </span>
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}        </ul>
      )}
    </div>
  );
}

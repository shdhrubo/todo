import React, { useEffect, useState } from "react";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  return (
    <div>
      <h3 className="text-xl text-primary">My Items</h3>
      {tasks.map((task) => (
        <div className="border border-2 w-52 mx-auto mt-3">
          <h3 className="font-bold">Task Name : {task.task}</h3>
          <p>Task Description : {task.taskDescription}</p>
          
        </div>
      ))}
    </div>
  );
};

export default MyTasks;

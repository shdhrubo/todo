import axios from "axios";
import React from "react";
import "./Home.css";
const Home = () => {
  const handleTask = async (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const taskDescription = event.target.description.value;
    const { data } = await axios.post("http://localhost:5000/tasks", {
      task,
      taskDescription,
    });
    event.target.reset();
  };
  return (
    <form
      className=" flex flex-col items-center justify-center"
      onSubmit={handleTask}
    >
      <input type="text" name="task" placeholder="Task" className="task" />
      <br />
      <textarea
        name="description"
        className="task"
        placeholder="Task Description"
        cols="20"
        rows="5"
      ></textarea>
      <br />
      <button className="btn btn-primary">
        <input type="submit" value="Submit" />
      </button>
    </form>
  );
};

export default Home;

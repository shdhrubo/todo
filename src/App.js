import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import MyTasks from "./components/MyTasks/MyTasks";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tasks" element={<MyTasks></MyTasks>}></Route>
      </Routes>
    </div>
  );
}

export default App;

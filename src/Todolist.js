import React, { useState } from "react";
import "./todolist.css";

function Todolist() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState({
    text: "",
  });

  function changeMessage(e) {
    //console.log("Error");
    setTask((prevTask) => ({ ...prevTask, text: e.target.value }));
  }

  function addTask(e) {
    e.preventDefault();
    if (task.text !== "") {
      var newTodo = {
        text: task.text,
        id: new Date().getTime().toString(),
      };
      // console.log(newTodo);
      setList([...list, newTodo]);
      setTask({ text: "" });
    } else {
      alert("Please Enter Your Task, then click on ADD TASK");
    }
  }
  function removeTask(id) {
    let newTodos = list.filter((eachitem) => {
      return eachitem.id !== id;
    });
    setList(newTodos);
  }
  return (
    <>
      <form className="myList">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter Your Task Here"
          className="task"
          value={task.text}
          onChange={changeMessage}
        />

        <button type="submit" className="add" onClick={addTask}>
          Add Task
        </button>
      </form>
      <hr className="line" />
      {list.length == 0 && <h4>Please add your ToDo's see the list</h4>}
      <ul className="task-list">
        {list.map((eachTask) => (
          <li key={eachTask.id} className="tasks">
            {eachTask.text}
            <button className="remove" onClick={() => removeTask(eachTask.id)}>
              Remove Task
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todolist;

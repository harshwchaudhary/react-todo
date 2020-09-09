import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoDetails = ({ ToDo }) => {
  const { removeToDo } = useContext(ToDoContext);
  return (
    <li onClick={() => removeToDo(ToDo.id)}>
      <div className="title">{ToDo.title}</div>
      <div className="data">{ToDo.data}</div>
    </li>
  );
};

export default ToDoDetails;

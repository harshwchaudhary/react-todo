import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import ToDoDetails from "./ToDoDetails";
const ToDoList = () => {
  const { ToDo } = useContext(ToDoContext);
  return ToDo.length ? (
    <div className="ToDo-list">
      <ul>
        {ToDo.map((ToDo) => {
          return <ToDoDetails ToDo={ToDo} key={ToDo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No ToDo to complete. </div>
  );
};

export default ToDoList;

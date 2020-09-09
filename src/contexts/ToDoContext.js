import React, { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";
export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
  const [ToDo, setToDo] = useState([
    { title: " Read Books ", data: " Reading the last chapter", id: 1 },
    { title: " Code", data: " Write code in React ", id: 2 },
  ]);
  const addToDo = (title, data) => {
    setToDo([...ToDo, { title, data, id: v4() }]);
  };
  const removeToDo = (id) => {
    setToDo(ToDo.filter((ToDo) => ToDo.id !== id));
  };
  return (
    <ToDoContext.Provider value={{ ToDo, addToDo, removeToDo }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;

import React, { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const NewToDoForm = () => {
  const { addToDo } = useContext(ToDoContext);
  const [title, setTitle] = useState("");
  const [data, setdata] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(title, data);
    setTitle("");
    setdata("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ToDo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="data"
        value={data}
        onChange={(e) => setdata(e.target.value)}
        required
      />
      <input type="submit" value="add ToDo" />
    </form>
  );
};

export default NewToDoForm;

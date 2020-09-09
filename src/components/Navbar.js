import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const Navbar = () => {
  const { ToDo } = useContext(ToDoContext);
  return (
    <div className="navbar">
      <h1>My ToDo List</h1>
      <p>Currently you have {ToDo.length} Tasks to complete...</p>
    </div>
  );
};

export default Navbar;

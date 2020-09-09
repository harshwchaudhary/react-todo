import React from "react";
import ToDoContextProvider from "./contexts/ToDoContext";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import NewToDoForm from "./components/ToDoForm";

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <Navbar />
        <ToDoList />
        <NewToDoForm />
      </ToDoContextProvider>
    </div>
  );
}

export default App;

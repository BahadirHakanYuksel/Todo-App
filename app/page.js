"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [input_todo, setInput_todo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if (input_todo === "") return;
    setTodos([...todos, input_todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, input_todo]));
    setInput_todo("");
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="box">
      <p className="text-xs font-medium bg-gray-600 bg-opacity-20 text-gray-400 rounded-md h-7 flex items-center justify-center">
        Bahadır Hakan Yüksel
      </p>
      <header className="app_name">Todo App </header>
      <form onSubmit={addTodo} className="addTodoBox">
        <input
          onChange={(e) => setInput_todo(e.target.value)}
          type="text"
          value={input_todo}
          className="todo_input"
          placeholder="Enter Todo"
        />
        <button type="submit" className="addTodoButton">
          Add
        </button>
      </form>
      {todos.length === 0 ? (
        <div className="bg-blue-500 bg-opacity-20 text-blue-500 rounded-md w-full h-14 flex items-center justify-center">
          What To Do?
        </div>
      ) : (
        <>
          <header className="text-gray-500 font-medium italic text-xl border-b-2 border-solid border-b-gray-800 -mb-2.5">
            Todos
          </header>
          <div className="flex flex-col gap-2.5">
            {todos.map((todo, index) => (
              <div key={index} className="todo">
                <p className="todo_name">{todo}</p>
                <button
                  className="del_button"
                  onClick={() => removeTodo(index)}
                >
                  Del
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isEditable, setEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { editTodo, deleteTodo, toggleCompleteTodo } = useTodo();

  const editTodoItem = () => {
    editTodo(todo.id, { ...todo, todo: todoMsg });
    setEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleteTodo(todo.id);
  };

  const deleteTodoItem = () => {
    deleteTodo(todo.id);
  };

  return (
    <div
      className={`flex gap-x-1 border border-black/10 rounded-lg px-3 py-1.5 shadow-sm
         shadow-white/50 duration-300 text-black ${
           todo.completed ? "bg-green-200" : "bg-slate-400"
         }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg 
            ${isEditable ? "border-black/10 px-2" : "border-transparent"}
            ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded  text-sm border
       border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-50 disabled:bg-gray-500"
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) editTodoItem();
          else setEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isEditable ? "💾" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border
       border-black/10 justify-center items-center bg-red-500 hover:bg-red-700 shrink-0"
        onClick={() => {
          deleteTodoItem();
        }}
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;

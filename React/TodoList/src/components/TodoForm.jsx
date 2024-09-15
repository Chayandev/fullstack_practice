import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo: todo, completed: false });
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Todo..."
          className="w-full border border-white/10 rounded-l-lg px-3 py-3 outline-none duration-150 bg-white/20"
        />
        <button
          type="submit"
          className="rounded-r-lg px-5 py-2 bg-blue-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

import React from "react";

function TodoItem({ index, task, handleDelete }) {
  {
    console.log(task);
  }
  return (
    <div className="bg-slate-400 rounded-md px-4 py-3 flex w-full shadow-sm hover:bg-red-100">
      <li className="list-none flex-1 text-black font-medium">{`${index}: ${task}`}</li>
      <button
        onClick={() => handleDelete(index)}
        className=" p-1 bg-red-100 rounded-full text-white"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";
import { addTask, deleteTask } from "./features/taskSlice";

function App() {
  const [taskInput, setTaskInput] = useState("");

  const tasks = useSelector((state) => state.task.todoTasks);
  console.log(tasks);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskInput));
    setTaskInput("");
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-slate-600 p-6 rounded-md shadow-md flex flex-col gap-3">
          <h1 className="text-white text-xl">To-do List</h1>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => {
                setTaskInput(e.target.value);
              }}
              placeholder="Add a new task"
              className="text-white focus:outline-none flex-1 bg-slate-500 shadow-md rounded-md px-4 py-2"
            />
            <button className="bg-blue-950 rounded-md px-4 py-2 text-white">
              submit
            </button>
          </form>
          <div className="flex flex-col gap-3">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <TodoItem
                  key={index}
                  task={task}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <p className="text-white">No tasks available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

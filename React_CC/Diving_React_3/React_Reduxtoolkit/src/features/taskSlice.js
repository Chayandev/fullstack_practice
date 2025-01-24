import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoTasks: ["Buy Course"],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    //any property is defiend will be  actioncreators in redux
    addTask(state, action) {
      state.todoTasks.push(action.payload);
      //under the hood the state is not mutated direclty , immer librabry is handlgin this
    },
    deleteTask(state, action) {
      state.todoTasks = state.todoTasks.filter((currTask, indx) => {
        return indx !== action.payload;
      });
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;

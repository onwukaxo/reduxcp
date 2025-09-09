import { createSlice } from "@reduxjs/toolkit";

// ✅ Slice definition
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],      // 👈 stores all tasks
    filter: "all", // 👈 filter state (all | done | notDone)
  },
  reducers: {
    // ✅ Add new task
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),        // 👈 unique id (quick & simple)
        description: action.payload, 
        isDone: false,         // 👈 default: task is not done
      });
    },

    // ✅ Toggle task completion
    toggleTask: (state, action) => {
      const task = state.list.find((item) => item.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },

    // ✅ Edit existing task description
    editTask: (state, action) => {
      const { id, desc } = action.payload;
      const task = state.list.find((item) => item.id === id);
      if (task) task.description = desc;
    },

    // ✅ Set filter for tasks
    setFilter: (state, action) => {
      state.filter = action.payload; 
    },
  },
});

// ✅ Export actions for components to dispatch
export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;

// ✅ Export reducer for store
export default tasksSlice.reducer;

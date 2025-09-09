import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";

// ✅ Creating the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // ✅ attaches your slice to "tasks" state
  },
});

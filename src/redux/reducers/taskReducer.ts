import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "@/data/tasks";

interface TasksState {
  list: Task[];
}

const initialState: TasksState = {
  list: tasks,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTaskStatus: (state, action: PayloadAction<{ taskId: string; newStatus: TaskStatus }>) => {
      const task = state.list.find((t) => t.id === action.payload.taskId);
      if (task) {
        task.status = action.payload.newStatus;
      }
    },
  },
});

export const { updateTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;

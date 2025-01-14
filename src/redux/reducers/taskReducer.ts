import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasks } from "@/data/tasks";
import dayjs from "dayjs";

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
    addNewTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      state.list.push({
        id: Math.random().toString(36).substr(2, 9),
        dueDate: action.payload.dueDate || dayjs().add(1, "day").format("YYYY-MM-DD"),
        ...action.payload,
      });
    },
    updateTaskStatus: (state, action: PayloadAction<{ taskId: string; newStatus: TaskStatus }>) => {
      const task = state.list.find((t) => t.id === action.payload.taskId);
      if (task) {
        task.status = action.payload.newStatus;
      }
    },
  },
});

export const { addNewTask, updateTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;

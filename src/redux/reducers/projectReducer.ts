import { createSlice } from '@reduxjs/toolkit';
import { users } from '@/data/users';

interface ProjectState {
  users: User[];
}

const initialState: ProjectState = {
  users: users,
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;

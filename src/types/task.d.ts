type TaskStatus = 0 | 1 | 2 | 3;

type Task = {
  id: string;
  title: string;
  description: string;
  assigneeIds: string[];
  storyPoints?: number;
  startDate?: string;
  dueDate?: string;
  status: TaskStatus;
};

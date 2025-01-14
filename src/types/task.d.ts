type TaskStatus = 0 | 1 | 2 | 3;

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  description?: string;
  assigneeIds?: string[];
  storyPoints?: number;
  startDate?: string;
  dueDate?: string;
};

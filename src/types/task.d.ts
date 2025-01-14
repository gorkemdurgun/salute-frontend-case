type TaskStatus = 0 | 1 | 2 | 3;

type Task = {
  id: string;
  title: string;
  description: string;
  assigneeIds: string[];
  storyPoints: number | null;
  startDate: string | null;
  dueDate: string | null;
  status: TaskStatus;
};

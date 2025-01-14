type TaskStatus = "Open" | "In Progress" | "In Review" | "Done";

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

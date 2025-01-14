type BoardColumn = {
  id: TaskStatus;
  title: string;
  taskIds: string[];
};

type Board = {
  tasks: Record<string, Task>;
  columns: Record<TaskStatus, BoardColumn>;
  columnOrder: TaskStatus[];
};

type DragDropEvent = {
  draggableId: string;
  type: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  } | null;
};

type BoardColumn = {
  status: TaskStatus;
  title: string;
  taskList: Task[];
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

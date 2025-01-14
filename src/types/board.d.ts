type BoardColumn = {
  status: TaskStatus;
  title: string;
  taskIds: string[];
};

type Board = {
  id: string;
  title: string;
  columnOrder: string[];
  columns: Record<string, BoardColumn>;
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

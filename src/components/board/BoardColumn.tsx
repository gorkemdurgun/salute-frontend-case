import { updateTaskStatus } from "@/redux/reducers/taskReducer";
import TaskCard from "./TaskCard";
import AddTaskCard from "./AddTaskCard";
import { useAppDispatch } from "@/hooks";
import Button from "../common/Button";
import { memo, useState } from "react";

type Props = BoardColumn;

const BoardColumn: React.FC<Props> = ({ status, title, taskList }) => {
  const dispatch = useAppDispatch();
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    dispatch(updateTaskStatus({ taskId, newStatus: status }));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col w-72 bg-neutral-light rounded-lg py-2 px-1" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="flex items-center">
        <h2 className="uppercase text-neutral-dark font-medium text-xs my-2 ml-3">{title}</h2>
        <span className="ml-2 text-neutral-dark/60 text-xs">{taskList?.length}</span>
        <div className={`w-3 h-3 rounded-full ml-auto mr-2 bg-blue`}></div>
      </div>
      <div className="flex flex-col gap-1 bg-neutral-light mb-2">
        {taskList.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
        {isAddingTask && <AddTaskCard status={status} onCancel={() => setIsAddingTask(false)} />}
      </div>
      <div className="mt-auto mb-0 flex justify-center items-center w-full h-8 bg-neutral-light">
        <Button
          className="w-full block text-gray-500 text-xs bg-transparent hover:text-neutral-dark hover:bg-neutral/50"
          onClick={() => setIsAddingTask(true)}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default memo(BoardColumn);

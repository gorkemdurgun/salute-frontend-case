import { updateTaskStatus } from "@/redux/reducers/taskReducer";
import Task from "./Task";
import { useAppDispatch } from "@/hooks";

type Props = BoardColumn;

const BoardColumn: React.FC<Props> = ({ status, title, taskList }) => {
  const dispatch = useAppDispatch();

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
      <div className="flex flex-col gap-1 bg-neutral-light">
        {taskList?.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;

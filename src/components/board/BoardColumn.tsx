import { tasks } from "@/data/tasks";
import Task from "./Task";

type Props = BoardColumn;

const BoardColumn: React.FC<Props> = ({ title, taskIds }) => {
  const taskList = tasks.filter((task) => taskIds.includes(task.id));

  return (
    <div className="flex flex-col w-72 bg-neutral-light rounded-lg py-2 px-1">
      <div className="flex items-center">
        <h2 className="uppercase text-neutral-dark font-medium text-xs my-2 ml-3">{title}</h2>
        <span className="ml-2 text-neutral-dark/60 text-xs">{taskIds.length}</span>
      </div>
      <div className="flex flex-col gap-1 bg-neutral-light">
        {taskList.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;

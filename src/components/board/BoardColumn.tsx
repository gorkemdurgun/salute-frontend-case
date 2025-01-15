import { updateTaskStatus } from '@/redux/reducers/taskReducer';
import TaskCard from './TaskCard';
import AddTaskCard from './AddTaskCard';
import { useAppDispatch } from '@/hooks';
import Button from '../common/Button';
import { memo, useState } from 'react';

type Props = BoardColumn;

const BoardColumn: React.FC<Props> = ({ status, title, taskList }) => {
  const dispatch = useAppDispatch();
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    dispatch(updateTaskStatus({ taskId, newStatus: status }));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex w-72 w-full flex-col rounded-lg bg-neutral-light px-1 py-2"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex items-center">
        <h2 className="my-2 ml-3 text-xs font-medium uppercase text-neutral-dark">
          {title}
        </h2>
        <span className="ml-2 text-xs text-neutral-dark/60">
          {taskList?.length}
        </span>
        <div className={`bg-blue ml-auto mr-2 h-3 w-3 rounded-full`}></div>
      </div>
      <div className="mb-2 flex flex-col gap-1 bg-neutral-light">
        {taskList.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
        {isAddingTask && (
          <AddTaskCard
            status={status}
            onCancel={() => setIsAddingTask(false)}
          />
        )}
      </div>
      <div className="mb-0 mt-auto flex h-8 w-full items-center justify-center bg-neutral-light">
        <Button
          className="block w-full bg-transparent text-xs text-gray-500 hover:bg-neutral/50 hover:text-neutral-dark"
          onClick={() => setIsAddingTask(true)}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default memo(BoardColumn);

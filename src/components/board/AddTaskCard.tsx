import { useState } from 'react';
import { useAppDispatch } from '@/hooks';
import { addNewTask } from '@/redux/reducers/taskReducer';
import Button from '../common/Button';

type Props = {
  status: TaskStatus;
  onCancel: () => void;
};

const AddTaskCard: React.FC<Props> = ({ status, onCancel }) => {
  const dispatch = useAppDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    dispatch(
      addNewTask({
        title: newTaskTitle,
        status,
      })
    );
    setNewTaskTitle('');
    onCancel();
  };

  return (
    <div className="flex flex-col gap-2 rounded-md border bg-white p-2">
      <input
        type="text"
        className="w-full rounded-md p-1 text-sm text-neutral-dark outline-none"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Task title"
      />
      <div className="mt-2 flex justify-end gap-2">
        <Button
          className="bg-transparent text-xs text-gray-500 hover:bg-neutral/50 hover:text-neutral-dark"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="bg-primary text-xs text-white"
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTaskCard;

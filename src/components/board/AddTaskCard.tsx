import { useState } from "react";
import { useAppDispatch } from "@/hooks";
import { addNewTask } from "@/redux/reducers/taskReducer";
import Button from "../common/Button";

type Props = {
  status: TaskStatus;
  onCancel: () => void;
};

const AddTaskCard: React.FC<Props> = ({ status, onCancel }) => {
  const dispatch = useAppDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    dispatch(
      addNewTask({
        title: newTaskTitle,
        status,
      })
    );
    setNewTaskTitle("");
    onCancel();
  };

  return (
    <div className="flex flex-col gap-2 p-2 border bg-white rounded-md">
      <input
        type="text"
        className="text-sm text-neutral-dark w-full p-1 rounded-md outline-none"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Task title"
      />
      <div className="flex justify-end gap-2 mt-2">
        <Button
          className="text-xs text-gray-500 bg-transparent hover:text-neutral-dark hover:bg-neutral/50"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="text-xs bg-primary text-white"
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTaskCard;

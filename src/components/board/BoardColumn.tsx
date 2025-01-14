import { addNewTask, updateTaskStatus } from "@/redux/reducers/taskReducer";
import Task from "./Task";
import { useAppDispatch } from "@/hooks";
import Button from "../common/Button";
import { memo, useState } from "react";

type Props = BoardColumn;

const BoardColumn: React.FC<Props> = ({ status, title, taskList }) => {
  const dispatch = useAppDispatch();

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

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
        {taskList
          ?.sort((a, b) => a.id.localeCompare(b.id))
          .map((task) => (
            <Task key={task.id} {...task} />
          ))}
        {!isAddingTask && (
          <div className="flex flex-col gap-2 p-2 border bg-white rounded-md">
            <input
              type="text"
              className="text-sm text-neutral-dark w-full p-1 border rounded-md"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Task title"
            />
            <div className="flex gap-2">
              <Button
                className="text-xs text-gray-500 bg-transparent hover:text-neutral-dark hover:bg-neutral/50"
                onClick={() => setIsAddingTask(false)}
              >
                Cancel
              </Button>
              <Button
                className="text-xs bg-primary text-white"
                onClick={() => {
                  dispatch(
                    addNewTask({
                      title: newTaskTitle,
                      status,
                    })
                  );
                  setIsAddingTask(false);
                  setNewTaskTitle("");
                }}
              >
                Add Task
              </Button>
            </div>
          </div>
        )}
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

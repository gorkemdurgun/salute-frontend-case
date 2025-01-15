'use client';

import {
  PiX as CloseIcon,
  PiTrash as TrashIcon,
  PiCheck as SaveIcon,
} from 'react-icons/pi';
import Button from '../common/Button';
import { useState } from 'react';
import UserGroup from '../common/UserGroup';
import { useAppDispatch, useAppSelector } from '@/hooks';
import UserPicker from '../input/UserPicker';
import {
  updateTaskAssignees,
  updateTaskDetails,
  deleteTask,
} from '@/redux/reducers/taskReducer';
import DatePicker from '../input/DatePicker';
import dayjs from 'dayjs';

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  task: Task;
};
const TaskEditModal: React.FC<Props> = ({ visible, setVisible, task }) => {
  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state) => state.project);
  const assigneeList = users.filter((user) =>
    task?.assigneeIds?.includes(user.id)
  );

  const [taskDetails, setTaskDetails] = useState<Task>(task);

  if (!visible) return null;

  const handleChangeInput = (key: string, value: string) => {
    setTaskDetails({ ...taskDetails, [key]: value });
  };

  const handleSaveChanges = () => {
    dispatch(updateTaskDetails({ taskId: task.id, details: taskDetails }));
    setVisible(false);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
    setVisible(false);
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex w-[500px] flex-col gap-4 rounded-md bg-white p-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-md font-medium text-neutral-dark">Edit Task</h3>
          <Button onClick={() => setVisible(false)}>
            <CloseIcon className="text-lg text-neutral-dark" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="title" className="text-xs text-neutral-dark">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              value={taskDetails.title}
              onChange={(e) => handleChangeInput('title', e.target.value)}
              className="w-full rounded-md border p-2 text-sm text-neutral-dark"
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="Description" className="text-xs text-neutral-dark">
              Description
            </label>
            <textarea
              id="Description"
              value={taskDetails.description}
              onChange={(e) => handleChangeInput('description', e.target.value)}
              className="w-full rounded-md border p-2 text-sm text-neutral-dark"
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="userList" className="text-xs text-neutral-dark">
              Assignees
            </label>
            <div className="relative flex items-center gap-2">
              <UserGroup tooltip avatarSize="lg" users={assigneeList} />
              <UserPicker
                currentUsers={assigneeList}
                onChangeList={(users) => {
                  dispatch(
                    updateTaskAssignees({
                      taskId: task.id,
                      assigneeIds: users.map((u) => u.id),
                    })
                  );
                }}
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-[1fr_1fr_80px] gap-4">
            <div className="flex w-full flex-col gap-1">
              <label htmlFor="startDate" className="text-xs text-neutral-dark">
                Start Date
              </label>
              <DatePicker
                defaultValue={taskDetails.startDate}
                minDate={dayjs().format('YYYY-MM-DD')}
                onChangeDate={(date) => handleChangeInput('startDate', date)}
              />
            </div>
            <div className="flex w-full flex-col gap-1">
              <label htmlFor="dueDate" className="text-xs text-neutral-dark">
                Due Date
              </label>
              <DatePicker
                defaultValue={taskDetails.dueDate}
                minDate={dayjs().format('YYYY-MM-DD')}
                onChangeDate={(date) => handleChangeInput('dueDate', date)}
              />
            </div>
            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor="storyPoints"
                className="text-xs text-neutral-dark"
              >
                Story Points
              </label>
              <input
                type="number"
                id="storyPoints"
                value={taskDetails.storyPoints}
                onChange={(e) =>
                  handleChangeInput('storyPoints', e.target.value)
                }
                className="w-full rounded-md border p-2 text-sm text-neutral-dark"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-2">
          <Button className="bg-danger/10" onClick={handleDeleteTask}>
            <TrashIcon className="text-md text-danger" />
            <span className="text-xs text-danger">Delete Task</span>
          </Button>
          <Button className="bg-success/10" onClick={handleSaveChanges}>
            <SaveIcon className="text-md text-success" />
            <span className="text-xs text-success">Save Changes</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;

"use client";

import { PiX as CloseIcon, PiTrash as TrashIcon, PiCheck as SaveIcon } from "react-icons/pi";
import Button from "../common/Button";
import { useState } from "react";
import UserGroup from "../common/UserGroup";
import { useAppDispatch, useAppSelector } from "@/hooks";
import UserPicker from "../input/UserPicker";
import { updateTaskAssignees } from "@/redux/reducers/taskReducer";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  task: Task;
};
const TaskEditModal: React.FC<Props> = ({ visible, setVisible, task }) => {
  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state) => state.project);
  const assigneeList = users.filter((user) => task?.assigneeIds?.includes(user.id));

  const [taskDetails, setTaskDetails] = useState<Task>(task);

  if (!visible) return null;

  const handleChangeInput = (key: string, value: string) => {
    setTaskDetails({ ...taskDetails, [key]: value });
  };

  return (
    <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[500px] bg-white p-4 rounded-md flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-md text-neutral-dark font-medium">Edit Task</h3>
          <Button onClick={() => setVisible(false)}>
            <CloseIcon className="text-lg text-neutral-dark" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="title" className="text-xs text-neutral-dark">
              Görev Adı
            </label>
            <input
              type="text"
              id="title"
              value={taskDetails.title}
              onChange={(e) => handleChangeInput("title", e.target.value)}
              className="w-full p-2 border rounded-md text-sm text-neutral-dark"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="Description" className="text-xs text-neutral-dark">
              Açıklama
            </label>
            <textarea
              id="Description"
              value={taskDetails.description}
              onChange={(e) => handleChangeInput("description", e.target.value)}
              className="w-full p-2 border rounded-md text-sm text-neutral-dark"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="userList" className="text-xs text-neutral-dark">
              Atananlar
            </label>
            <div className="relative flex items-center gap-2">
              <UserGroup avatarSize="md" users={assigneeList} />
              <UserPicker
                currentUsers={assigneeList}
                onChangeList={(users) => {
                  dispatch(updateTaskAssignees({ taskId: task.id, assigneeIds: users.map((u) => u.id) }));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_80px] gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="startDate" className="text-xs text-neutral-dark">
                Başlangıç Tarihi
              </label>
              <input
                type="date"
                id="startDate"
                value={taskDetails.startDate}
                onChange={(e) => handleChangeInput("startDate", e.target.value)}
                className="w-full p-2 border rounded-md text-sm text-neutral-dark"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="dueDate" className="text-xs text-neutral-dark">
                Bitiş Tarihi
              </label>
              <input
                type="date"
                id="dueDate"
                value={taskDetails.dueDate}
                onChange={(e) => handleChangeInput("dueDate", e.target.value)}
                className="w-full p-2 border rounded-md text-sm text-neutral-dark"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="storyPoints" className="text-xs text-neutral-dark">
                Story Point
              </label>
              <input
                type="number"
                id="storyPoints"
                value={taskDetails.storyPoints}
                onChange={(e) => handleChangeInput("storyPoint", e.target.value)}
                className="w-full p-2 border rounded-md text-sm text-neutral-dark"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <Button className="bg-danger/10">
            <TrashIcon className="text-md text-danger" />
            <span className="text-xs text-danger">Görevi Sil</span>
          </Button>
          <Button className="bg-success/10">
            <SaveIcon className="text-md text-success" />
            <span className="text-xs text-success">Değişiklikleri Kaydet</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;

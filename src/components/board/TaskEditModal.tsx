"use client";

import { PiX as CloseIcon, PiTrash as TrashIcon, PiCheck as SaveIcon } from "react-icons/pi";
import Button from "../common/Button";
import { useState } from "react";
import UserPicker from "../input/UserPicker";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  task: Task;
};
const TaskEditModal: React.FC<Props> = ({ visible, setVisible, task }) => {
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
            <UserPicker currentUsers={taskDetails.assigneeIds} setList={(list) => setTaskDetails({ ...taskDetails, assigneeIds: list })} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button className="bg-danger/10">
            <TrashIcon className="text-lg text-danger" />
            <span className="text-sm text-danger">Sil</span>
          </Button>
          <Button className="bg-primary">
            <SaveIcon className="text-lg text-white" />
            <span className="text-sm text-white">Kaydet</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;

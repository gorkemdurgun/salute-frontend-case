"use client";

import AvatarGroup from "../common/UserGroup";

import dayjs from "dayjs";
import { PiPencilSimple as EditIcon } from "react-icons/pi";
import Button from "../common/Button";
import TaskEditModal from "./TaskEditModal";
import { useState } from "react";
import { useAppSelector } from "@/hooks";

type Props = Task;
const Task: React.FC<Props> = ({ ...props }) => {
  const { users } = useAppSelector((state) => state.project);
  const assigneeList = users.filter((user) => props?.assigneeIds?.includes(user.id));
  const isOverdue = dayjs().isAfter(dayjs(props.dueDate));

  const [isEditing, setIsEditing] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("taskId", props.id);
  };

  return (
    <>
      {isEditing && <TaskEditModal visible={isEditing} setVisible={setIsEditing} task={props} />}
      <div
        className="group cursor-grab flex flex-col gap-2 p-2 border bg-white rounded-md"
        draggable
        onDragStart={handleDragStart}
        onClick={() => setIsEditing(true)}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm text-neutral-dark">{props?.title}</h3>
          <Button className="!p-0 text-sm text-transparent group-hover:text-gray-500">
            <EditIcon />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <span className={`inline-flex gap-1 text-xs font-medium ${isOverdue ? "text-danger" : "text-neutral-dark/80"}`}>
            Due: {dayjs(props.dueDate).format("MMM DD")}
          </span>
          <AvatarGroup users={assigneeList} />
        </div>
      </div>
    </>
  );
};

export default Task;

"use client";

import { users } from "@/data/users";
import AvatarGroup from "../common/AvatarGroup";

import dayjs from "dayjs";
import DatePicker from "../input/DatePicker";

type Props = Task & {
  // onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string, sourceColumn: string) => void;
};

const Task: React.FC<Props> = ({ title, dueDate, assigneeIds }) => {
  const assigneeList = users.filter((user) => assigneeIds.includes(user.id));

  const isOverdue = dayjs().isAfter(dayjs(dueDate));

  return (
    <div className="cursor-grab flex flex-col gap-2 p-2 border bg-white rounded-md">
      <h3 className="text-sm text-neutral-dark">{title}</h3>
      <div className="flex items-center justify-between">
        <span className={`inline-flex gap-1 text-xs font-medium ${isOverdue ? "text-danger" : "text-neutral-dark/80"}`}>
          Due: <DatePicker defaultValue={dueDate} onChangeDate={(date) => console.log(date)} />
        </span>
        <AvatarGroup avatars={assigneeList.map((assignee) => ({ src: assignee.avatar }.src))} />
      </div>
    </div>
  );
};

export default Task;

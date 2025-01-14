"use client";

import { users } from "@/data/users";
import AvatarGroup from "../common/AvatarGroup";

import dayjs from "dayjs";
import DatePicker from "../input/DatePicker";

type Props = Task;

const Task: React.FC<Props> = ({ title, startDate, dueDate, status, assigneeIds, storyPoints }) => {
  const assigneeList = users.filter((user) => assigneeIds.includes(user.id));

  const dateDiff = dayjs(dueDate).diff(dayjs(startDate), "day");
  const isOverdue = dayjs().isAfter(dayjs(dueDate));

  return (
    <div className="flex flex-col gap-2 p-2 border bg-white rounded-md">
      <h3 className="text-sm text-neutral-dark">{title}</h3>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-medium ${isOverdue ? "text-danger" : "text-neutral-dark/80"}`}>
          <DatePicker defaultValue={dueDate} onChangeDate={(date) => console.log(date)} />
        </span>
      </div>
      {/* <AvatarGroup avatars={assigneeList.map((assignee) => ({ src: assignee.avatar }.src))} /> */}
    </div>
  );
};

export default Task;

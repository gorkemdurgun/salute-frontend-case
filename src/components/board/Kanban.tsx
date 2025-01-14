"use client";

import BoardColumn from "@/components/board/BoardColumn";
import { boards } from "@/constants/board";
import { useAppSelector } from "@/hooks";

export default function Kanban() {
  const { list } = useAppSelector((state) => state.tasks);

  // console.log("Kanban", list);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(boards).map(([key, value]) => (
          <BoardColumn key={key} status={value.status} title={value.title} taskList={list.filter((task) => task.status === value.status)} />
        ))}
      </div>
    </div>
  );
}

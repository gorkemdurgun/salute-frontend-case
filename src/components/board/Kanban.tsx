"use client";

import { useState } from "react";
import BoardColumn from "@/components/board/BoardColumn";
import { boards } from "@/constants/board";
import { tasks } from "@/data/tasks";

export default function BoardPage() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(boards).map(([key, value]) => (
          <BoardColumn key={key} status={value.status} title={value.title} taskIds={["1", "2", "3"]} />
        ))}
      </div>
    </div>
  );
}

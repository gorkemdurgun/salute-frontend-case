"use client";

import Kanban from "@/components/board/Kanban";
import Breadcrumb from "@/components/common/Breadcrumb";
import UserGroup from "@/components/common/UserGroup";
import SearchBox from "@/components/input/SearchBox";
import { useAppSelector } from "@/hooks";

export default function BoardPage() {
  const { users } = useAppSelector((state) => state.project);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <Breadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Hogwarts", href: "/hogwarts" },
        ]}
      />
      {/* Title */}
      <h1 className="text-2xl text-neutral-dark font-semibold">Board</h1>
      {/* Filters */}
      <div className="flex gap-4 mt-2 mb-4">
        <SearchBox />
        <UserGroup 
        tooltip
        border avatarSize="md" users={users} />
      </div>
      {/* Kanban */}
      <Kanban />
    </div>
  );
}

"use client";

import Avatar from "../common/Avatar";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks";

type UserPickerProps = {
  currentUsers?: string[];
  setList: (list: string[]) => void;
};

const UserPicker: React.FC<UserPickerProps> = ({ currentUsers, setList }) => {
  const { users: projectUsers } = useAppSelector((state) => state.project);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  useEffect(() => {
    if (currentUsers) {
      setSelectedUsers(currentUsers);
    }
  }, [currentUsers]);

  const handleSelect = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleSave = () => {
    setList(selectedUsers);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {selectedUsers.map((userId) => {
          const user = projectUsers.find((user) => user.id === userId);
          return user ? <Avatar key={user.id} src={user.avatar} alt={user.name} /> : null;
        })}
      </div>
      <div className="flex flex-col gap-2">
        {projectUsers.map((user) => (
          <div
            key={user.id}
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100`}
            onClick={() => handleSelect(user.id)}
          >
            <Avatar src={user.avatar} alt={user.name} />
            <span className="text-sm text-neutral-dark">{user.name}</span>
          </div>
        ))}
      </div>
      <button className="bg-primary text-white text-sm rounded-md p-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default UserPicker;

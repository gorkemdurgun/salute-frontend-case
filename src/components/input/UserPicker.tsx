"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks";
import Button from "../common/Button";
import { PiPlusCircle as AddIcon } from "react-icons/pi";
import Avatar from "../common/Avatar";

type Props = {
  currentUsers: User[];
  onChangeList: (users: User[]) => void;
};

const UserPicker: React.FC<Props> = ({ currentUsers, onChangeList }) => {
  const { users: projectUsers } = useAppSelector((state) => state.project);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Element && !e.target.closest(".relative")) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, user: User) => {
    if (e.target.checked) {
      onChangeList([...currentUsers, user]);
    } else {
      onChangeList(currentUsers.filter((u) => u.id !== user.id));
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <Button className="!py-1 !px-2 bg-primary/10" onClick={() => setVisible(!visible)}>
        <AddIcon className="text-md text-primary" />
        <span className="text-sm text-primary">Atama Ekle</span>
      </Button>
      {visible && (
        <div className="absolute top-10 left-0 w-[360px] bg-white border border-neutral-light rounded-md p-2 shadow-lg">
          <h3 className="text-xs text-neutral-dark mb-2">Proje Üyeleri</h3>
          <div className="max-h-[200px] overflow-y-auto">
            {projectUsers?.map((user, index) => {
              const isSelected = currentUsers.some((u) => u.id === user.id);
              return (
                <div key={index} className={`flex items-center gap-2 my-1 ${isSelected ? "order-1" : ""}`}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    className="w-4 h-4 border border-neutral-dark rounded-md"
                    onChange={(e) => onChangeCheckbox(e, user)}
                  />
                  <Avatar alt="avatar" src={user.avatar} className="w-[24px] h-[24px]" />
                  <span className="text-sm text-neutral-dark">{user.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPicker;

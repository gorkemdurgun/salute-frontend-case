'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks';
import Button from '../common/Button';
import { PiPlusCircle as AddIcon } from 'react-icons/pi';
import Avatar from '../common/Avatar';

type Props = {
  currentUsers: User[];
  onChangeList: (users: User[]) => void;
};

const UserPicker: React.FC<Props> = ({ currentUsers, onChangeList }) => {
  const { users: projectUsers } = useAppSelector((state) => state.project);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Element && !e.target.closest('.relative')) {
        setVisible(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const onChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    user: User
  ) => {
    if (e.target.checked) {
      onChangeList([...currentUsers, user]);
    } else {
      onChangeList(currentUsers.filter((u) => u.id !== user.id));
    }
  };

  return (
    <div className="relative flex items-center">
      <Button
        className="!-ml-4 !rounded-full bg-gray-200 !p-4 hover:bg-gray-300"
        onClick={() => setVisible(!visible)}
      >
        <AddIcon className="text-md text-gray-800" />
      </Button>
      {visible && (
        <div className="absolute left-0 top-10 z-10 w-[360px] rounded-md border border-neutral-light bg-white p-2 shadow-lg">
          <h3 className="mb-2 text-xs text-neutral-dark">Proje Üyeleri</h3>
          <div className="max-h-[200px] overflow-y-auto">
            {projectUsers?.map((user, index) => {
              const isSelected = currentUsers.some((u) => u.id === user.id);
              return (
                <div
                  key={index}
                  className={`my-1 flex items-center gap-2 ${isSelected ? 'order-1' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    className="h-4 w-4 rounded-sm border border-neutral"
                    onChange={(e) => onChangeCheckbox(e, user)}
                  />
                  <Avatar
                    alt="avatar"
                    src={user.avatar}
                    className="h-[24px] w-[24px]"
                  />
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

import Avatar from "./Avatar";

type Props = {
  users: User[];
  avatarSize?: "sm" | "md";
};

const UserGroup: React.FC<Props> = ({ users, avatarSize = "sm" }) => {
  const avatarSizeMap = {
    sm: "w-[28px] h-[28px]",
    md: "w-[36px] h-[36px]",
  };

  return (
    <div className="relative">
      <div className="flex">
        {users.map((user, index) => (
          <Avatar alt="avatar" key={index} src={user?.avatar} className={`${avatarSizeMap[avatarSize]} ${index > 0 ? "-ml-2" : ""}`} />
        ))}
      </div>
    </div>
  );
};

export default UserGroup;

import Avatar from "./Avatar";

type Props = {
  users: User[];
  avatarSize?: "sm" | "md" | "lg";
  border?: boolean;
  tooltip?: boolean;
};

const UserGroup: React.FC<Props> = ({ users, avatarSize = "sm", border = false, tooltip = false }) => {
  const avatarSizeMap = {
    sm: "w-[28px] h-[28px]",
    md: "w-[32px] h-[32px]",
    lg: "w-[40px] h-[40px]",
  };

  return (
    <div className="relative">
      <div className="flex">
        {users.map((user, index) => (
          <Avatar
            alt={user?.name}
            key={index}
            src={user?.avatar}
            tooltip={tooltip}
            className={`${avatarSizeMap[avatarSize]} 
          ${border ? "border-2 border-white" : ""}
          ${index > 0 ? "-ml-2" : ""}
          `}
          />
        ))}
      </div>
    </div>
  );
};

export default UserGroup;

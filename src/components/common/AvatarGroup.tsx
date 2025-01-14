import Avatar from "./Avatar";

type Props = {
  users: User[];
};

const UserGroup: React.FC<Props> = ({ users }) => {
  return (
    <div className="flex">
      {users.map((user, index) => (
        <Avatar alt="avatar" key={index} src={user?.avatar} className={`w-[24px] h-[24px] ${index > 0 ? "-ml-2" : ""}`} />
      ))}
    </div>
  );
};

export default UserGroup;

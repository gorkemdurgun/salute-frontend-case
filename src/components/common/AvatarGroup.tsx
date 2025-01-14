import Avatar from "./Avatar";

type Props = {
  avatars: string[];
};

const AvatarGroup: React.FC<Props> = ({ avatars }) => {
  return (
    <div className="flex">
      {avatars.map((avatar, index) => (
        <Avatar alt="avatar" key={index} src={avatar} className={`w-6 h-6 ${index > 0 ? "-ml-2" : ""}`} />
      ))}
    </div>
  );
};

export default AvatarGroup;

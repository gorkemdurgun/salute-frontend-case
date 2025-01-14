import React from "react";
import ImageBox from "./ImageBox";

interface AvatarProps {
  alt: string;
  src: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = React.memo(({ alt, src, className = "" }) => {
  return <ImageBox alt={alt} src={src} className={`cursor-pointer w-8 h-8 rounded-full ${className}`} />;
});

Avatar.displayName = "Avatar";

export default Avatar;

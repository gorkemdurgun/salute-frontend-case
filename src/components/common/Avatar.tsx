"use client";

import React from "react";
import ImageBox from "./ImageBox";

interface AvatarProps {
  alt: string;
  src: string;
  className?: string;
  tooltip?: boolean;
}

const Avatar: React.FC<AvatarProps> = React.memo(({ alt, src, className = "", tooltip = false }) => {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const onMouseEnter = () => {
    setTooltipVisible(true);
  };

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={() => setTooltipVisible(false)}>
      <ImageBox alt={alt} src={src} className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer ${className}`} />
      {tooltip && (
        <div
          className={`z-10 absolute top-8 left-0 w-auto px-4 py-1 bg-white rounded-md shadow-md ${tooltipVisible ? "visible" : "invisible"}`}
        >
          <span className="whitespace-nowrap text-xs text-neutral-dark">{alt}</span>
        </div>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;

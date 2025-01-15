'use client';

import React from 'react';
import ImageBox from './ImageBox';

interface AvatarProps {
  alt: string;
  src: string;
  className?: string;
  tooltip?: boolean;
}

const Avatar: React.FC<AvatarProps> = React.memo(
  ({ alt, src, className = '', tooltip = false }) => {
    const [tooltipVisible, setTooltipVisible] = React.useState(false);

    const onMouseEnter = () => {
      setTooltipVisible(true);
    };

    return (
      <div
        className="relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <ImageBox
          alt={alt}
          src={src}
          className={`h-8 w-8 cursor-pointer overflow-hidden rounded-full ${className}`}
        />
        {tooltip && (
          <div
            className={`absolute left-0 top-8 z-10 w-auto rounded-md bg-white px-4 py-1 shadow-md ${tooltipVisible ? 'visible' : 'invisible'}`}
          >
            <span className="whitespace-nowrap text-xs text-neutral-dark">
              {alt}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;

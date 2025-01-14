"use client";

import { useState } from "react";
import { PiCaretDownBold as ArrowDownIcon } from "react-icons/pi";

type Props = HeaderMenuDropdown;

const HeaderDropdown: React.FC<Props> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative px-2">
      <button onClick={() => setIsOpen(!isOpen)} className="transition-all flex items-center space-x-1 text-neutral-dark hover:text-neutral">
        <span className="text-sm">{title}</span>
        <ArrowDownIcon className="w-3 h-3" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-light hover:text-neutral-dark"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;

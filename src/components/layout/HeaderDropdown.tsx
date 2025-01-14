"use client";

import { useState } from "react";
import { PiArrowDown as ArrowDownIcon } from "react-icons/pi";

type Props = {
  title: string;
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
};

const HeaderDropdown: React.FC<Props> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-neutral-DEFAULT hover:bg-neutral-light hover:text-neutral-dark focus:outline-none focus-visible:ring focus-visible:ring-primary-light focus-visible:ring-opacity-50"
      >
        {title}
        <ArrowDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-neutral-DEFAULT hover:bg-neutral-light hover:text-neutral-dark"
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;

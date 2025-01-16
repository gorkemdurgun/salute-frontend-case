'use client';

import { useState, useEffect, useRef } from 'react';
import { FaAngleDown as ArrowDownIcon } from 'react-icons/fa';

type Props = HeaderMenuDropdown;

const HeaderDropdown: React.FC<Props> = ({ title, items, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative px-2">
      <button
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-1 text-neutral-dark transition-all disabled:pointer-events-none disabled:opacity-50"
      >
        <span className="text-sm">{title}</span>
        <ArrowDownIcon
          className={`h-3 w-3 transform transition-all group-hover:text-primary ${isOpen ? 'rotate-180' : 'rotate-0 text-neutral'}`}
        />
      </button>
      <div
        className={`absolute z-10 mt-2 w-full min-w-[200px] transform overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'pointer-events-auto visible scale-100 opacity-100'
            : 'pointer-events-none invisible scale-95 opacity-0'
        }`}
        style={{ transformOrigin: 'top center' }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.disabled ? '#' : item.href}
            aria-disabled={item.disabled}
            className="block w-full border-b border-neutral-light px-4 py-2 text-left text-sm text-neutral-dark last:border-b-0 hover:bg-neutral-light hover:text-neutral-dark aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderDropdown;

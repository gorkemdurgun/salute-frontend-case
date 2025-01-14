"use client";

import { useState, useEffect, useRef } from "react";
import { PiCaretDownBold as ArrowDownIcon } from "react-icons/pi";

type Props = HeaderMenuDropdown;

const HeaderDropdown: React.FC<Props> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Menüyü kapatmak için dış tıklama kontrolü
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative px-2">
      <button onClick={() => setIsOpen(!isOpen)} className="transition-all flex items-center space-x-1 text-neutral-dark hover:text-neutral">
        <span className="text-sm">{title}</span>
        <ArrowDownIcon className={`w-3 h-3 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>
      <div
        className={`absolute z-10 w-full min-w-[200px] mt-2 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto visible" : "opacity-0 scale-95 pointer-events-none invisible"
        }`}
        style={{ transformOrigin: "top center" }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block w-full px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-light hover:text-neutral-dark text-left border-neutral-light border-b last:border-b-0"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderDropdown;

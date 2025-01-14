"use client";

import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

type DatePickerProps = {
  defaultValue?: string;
  onChangeDate: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ defaultValue, onChangeDate }) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const [isPlain, setIsPlain] = useState(true);
  const [date, setDate] = useState(defaultValue);

  const handleChange = (date: string) => {
    setDate(date);
    onChangeDate(date);
  };

  const onClickOutside = () => {
    setIsPlain(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {isPlain ? (
        <span className="cursor-pointer" onClick={() => setIsPlain(false)}>
          {dayjs(date).format("MMM D")}
        </span>
      ) : (
        <input
          ref={datePickerRef}
          type="date"
          value={date}
          onChange={(e) => handleChange(e.target.value)}
          className="pl-4 pr-2 py-1 text-xs text-neutral-dark border-2 border-neutral-light rounded-md focus:outline-none focus:border-primary"
        />
      )}
    </div>
  );
};

export default DatePicker;

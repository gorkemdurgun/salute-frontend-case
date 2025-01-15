"use client";

import { useRef, useState } from "react";

type DatePickerProps = {
  defaultValue?: string;
  onChangeDate: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ defaultValue, onChangeDate }) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const [date, setDate] = useState(defaultValue);

  const handleChange = (date: string) => {
    setDate(date);
    onChangeDate(date);
  };

  return (
    <div className="relative">
      <input
        ref={datePickerRef}
        type="date"
        value={date}
        onChange={(e) => handleChange(e.target.value)}
        className="pl-4 pr-2 py-1 text-xs text-neutral-dark border-2 border-neutral-light rounded-md focus:outline-none focus:border-primary"
      />
    </div>
  );
};

export default DatePicker;

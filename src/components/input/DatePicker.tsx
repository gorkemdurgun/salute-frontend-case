"use client";

import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

type DatePickerProps = {
  defaultValue?: string;
  minDate?: string;
  onChangeDate: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ defaultValue, minDate, onChangeDate }) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const [date, setDate] = useState(defaultValue);

  const handleChange = (date: string) => {
    setDate(date);
    onChangeDate(date);
  };

  useEffect(() => {
    if (date && minDate && dayjs(date).isBefore(minDate)) {
      setDate(minDate);
    }
  }, [date, minDate]);

  return (
    <div className="relative">
      <input
        ref={datePickerRef}
        type="date"
        value={date}
        min={minDate}
        onChange={(e) => handleChange(e.target.value)}
        className="cursor-vertical-text w-full p-2 border rounded-md text-sm text-neutral-dark"
      />
    </div>
  );
};

export default DatePicker;

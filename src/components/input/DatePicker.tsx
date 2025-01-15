'use client';

import { useRef, useState } from 'react';

type DatePickerProps = {
  defaultValue?: string;
  minDate?: string;
  onChangeDate: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({
  defaultValue,
  minDate,
  onChangeDate,
}) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  const [date, setDate] = useState(defaultValue);

  const handleChange = (date: string) => {
    setDate(date);
    onChangeDate(date);
  };

  const openDatePicker = () => {
    datePickerRef.current?.focus();
  };

  return (
    <div className="relative" onClick={openDatePicker}>
      <input
        ref={datePickerRef}
        className="w-full cursor-pointer rounded-md border p-2 text-sm text-neutral-dark"
        type="date"
        value={date}
        min={minDate}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default DatePicker;

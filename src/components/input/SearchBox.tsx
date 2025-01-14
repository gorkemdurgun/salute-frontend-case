"use client";

import { useState } from "react";
import { FaSearch as SearchIcon } from "react-icons/fa";

type Props = {
  onValueChange?: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative">
      <SearchIcon className="absolute top-1/2 left-2 transform -translate-y-1/2 text-neutral-dark" />
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleOnChange}
        className="pl-8 pr-2 py-1 text-sm text-neutral-dark border-2 border-neutral-light rounded-md focus:outline-none focus:border-primary"
      />
    </div>
  );
};

export default SearchBox;

'use client';

import { useState } from 'react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

type Props = {
  onValueChange?: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform text-neutral-dark" />
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleOnChange}
        className="rounded-md border-2 border-neutral-light py-1 pl-8 pr-2 text-sm text-neutral-dark focus:border-primary focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;

import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div className="w-full px-16 xs:pr-3 lg:px-3 xl:px-16 lg:hidden">
      <form className="searchForm relative w-full h-10 md:h-12">
        <input placeholder="Searching for..." required type="text" className="pr-[42px] md:pr-[52px] w-full h-full pl-3 md:pl-4 border border-border rounded-[40px]" />
        <button type="submit" className="cursor-pointer">
          <FaSearch className="absolute top-1/2 right-1 z-10 h-8 w-auto -translate-y-1/2  p-[6px] md:h-10 md:p-2" />
        </button>
      </form>
    </div>
  );
}

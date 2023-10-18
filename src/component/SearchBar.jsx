import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ text, setSearch }) => {
  return (
    <div className="search-container">
      <input
        placeholder={text}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;

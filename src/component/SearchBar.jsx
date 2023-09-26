import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ text }) => {
  return (
    <div className="search-container">
      <input placeholder={text} type="search" />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;

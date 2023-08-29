import React from "react";
import "./SearchBar.css";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = ({setSearchTerm}) => {
  return (
    <div className="d-searchbar">
      <MdOutlineSearch />
      <input type="text"
      onChange={(e) => setSearchTerm(e.target.value)}  placeholder="Search Books" />
    </div>
  );
};

export default SearchBar;

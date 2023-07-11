import React, { useState } from "react";

const SearchBar = ({ formSubmit, placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefalt();
    formSubmit(searchInput);
  };
  const onSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        value={searchInput}
        onChange={onSearchInputChange}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;

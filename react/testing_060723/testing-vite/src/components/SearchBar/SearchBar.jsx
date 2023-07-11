import React, { useState } from "react";

const SearchBar = ({ formSubmit }) => {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmit(inputVal);
    setInputVal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" onChange={handleChange} />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;

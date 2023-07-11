import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import JokesLoader from "./components/JokesLoader/JokesLoader";

function App() {
  const jokeSubmit = (value) => console.log("You searched for jokes", value);

  return (
    <>
      <SearchBar formSubmit={jokeSubmit} placeholder="Search for jokes" />
      <JokesLoader />
    </>
  );
}

export default App;

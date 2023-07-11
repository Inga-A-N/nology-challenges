import React, { useContext, useEffect, useState } from "react";

const JokesLoader = () => {
  const [fetchState, setFetchState] = useState("");
  const { jokeSearch } = useContext;
  useEffect(() => {
    setFetchState("Loading");
  }, [jokeSearch]);
  return (
    <>
      {fetchState === "Loading" && <p>Searching for joke: {jokeSearch}</p>}
      {fetchState === "Success" && <p>Success</p>}
      {fetchState === "Error" && <p>Error</p>}
    </>
  );
};

export default JokesLoader;

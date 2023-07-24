import { useEffect, useState } from "react";
import { getAllMovies } from "./services/movies-service";

import "./App.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import MovieList from "./components/MovieList/MovieList";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const readDatabase = async () => {
    const querySnapshot = await getDocs(collection(db, "test"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
  };
  useEffect(() => {
    readDatabase();
  }, []);
  return (
    <>
      <h1>Firestore</h1>
      <MovieList movies={retrievedMovies} />
      <NewMovieForm />
    </>
  );
}

export default App;

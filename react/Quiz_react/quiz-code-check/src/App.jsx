import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [students] = useState([
    { name: "Harrison", browniePoints: Math.floor(Math.random() * 100) },
    { name: "Sandra", browniePoints: Math.floor(Math.random() * 100) },
  ]);

  return (
    <>
      {students.map((student, index) => (
        <p key={index}>
          {student.name} - {student.browniePoints}
        </p>
      ))}
    </>
  );
}

export default App;

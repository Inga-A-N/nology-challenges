import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ContactPage from "./pages/ContactPage/ContactPage";
import Button from "./components/Button/Button";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={darkMode}>
      <div style={{ backgroundColor: "black" }}>
        <ContactPage />
        <Button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

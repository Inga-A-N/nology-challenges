import Card from "./components/Card/Card";
import "./App.css";
import Counter from "./components/Counter/Counter";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const formSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
  };
  return (
    <>
      <SearchBar formSubmit={formSubmit} />
      {/* <Card /> */}
      <Counter />
    </>
  );
}

export default App;

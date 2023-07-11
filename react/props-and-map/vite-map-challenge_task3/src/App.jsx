import CardList from "./components/CardList/CardList";
import data from "./planetsData.json";

function App() {
  return (
    <>
      <CardList planets={data} />
    </>
  );
}

export default App;

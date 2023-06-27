import CardList from './components/CardList/CardList';
import data from './planetsData.json';


function App() {
  console.log(data);
  
  return (
    <>
     <CardList planets={data}/>
    </>
  );
}

export default App;

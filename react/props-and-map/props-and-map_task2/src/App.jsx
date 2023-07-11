import Header from "./Header/Header";
import Card from "./Card/Card";
import CardsParent from "./CardsParent/CardsParent";
import shadow from "./Card/Apocalyptica_Shadowmaker_album_cover.jpg";
import cello from "./Card/cell_0.jpg";
import fourCellos from "./Card/fourCellos.jpg";
import symphony from "./Card/symphony.jpg";

function App() {
  return (
    <>
      <Header heading="My Favourite Albums" />

      <CardsParent>
        <Card
          title="7th Symphony"
          bandName="Apocalyptica"
          rating="5"
          image={symphony}
        />
        <Card title="Cell-0" bandName="Apocalyptica" rating="4" image={cello} />
        <Card
          title="Shadowmaker"
          bandName="Apocalyptica"
          rating="5"
          image={shadow}
        />
        <Card
          title="Plays Metallica by Four Cellos"
          bandName="Apocalyptica"
          rating="5"
          image={fourCellos}
        />
      </CardsParent>
    </>
  );
}

export default App;

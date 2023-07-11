import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div style={{ flexDirection: "column" }}>
      <Header
        heading="React challenge"
        subheading="This is our first React Challenge"
      />

      <Main />
    </div>
  );
};

export default App;

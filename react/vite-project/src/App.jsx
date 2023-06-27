import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Main/Main';

const App = () => {
  return (
    <>
      <Header heading='Hello' subheading='goodbye' fruit='orange' />
      <Content/>
      <Footer />
    </>
  );
};

export default App;

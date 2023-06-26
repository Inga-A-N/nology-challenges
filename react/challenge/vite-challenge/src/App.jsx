import Header from './components/Header/Header';
import Card from './components/Card/Card';


const App = () => {
  return (
    <>
    <main>
    <h1>Hello</h1>
    <Header heading='React challenge' subheading='This is our first React Challenge'/>
    
    <div>
    <Card heading='This is a title' subtitle='This is a subtitle' content='This is a short description' hasButton />
    <Card heading='This is a title' subtitle='This is a subtitle' content='This is a short description' hasButton />
    <Card heading='This is a title' subtitle='This is a subtitle' content='This is a short description' hasButton/>
    </div>
    </main>
    </>
  )
}

export default App

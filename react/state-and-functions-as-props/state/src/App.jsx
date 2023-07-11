import { useState } from 'react'
import styles from './styles.module.scss'
import image from './assets/moon.svg';
import imageSun from './assets/sun.svg'
import './App.css'

function App() {
  
  const [mode, setMode] = useState(true)

  const toggleMode = () => {
    setMode(!mode)
  };
  console.log(mode)
  const buttonClasses = mode
    ? [styles.button, styles.dark]
    : [styles.button];

  return (
    <>
    <div className={buttonClasses.join(' ')}>
      <h1>DayNight Mode</h1>
      <div>
        
        <button onClick={toggleMode}>{mode? <img src={imageSun} /> : <img src={image} /> } 
        </button>
        

      </div>
      <div>

        <button>Random number</button>
      </div>
    </div>
    </>
  )
}


export default App

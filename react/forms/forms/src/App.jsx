import { useState } from 'react'
import ControlledForm from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form handleSubmit = {handleSubmit}/>
    </>
  )
}

export default App

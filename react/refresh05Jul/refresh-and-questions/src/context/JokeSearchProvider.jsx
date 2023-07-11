import { createContext, useState } from "react";

export const JokeSearchContext = createContext(null)
import React from 'react'

const JokeSearchProvider = ({children}) => {
    const [jokeSearch, SetJokeSearch] = useState('')
  return (
    <JokeSearchContext.Provider value={{jokeSearch, SetJokeSearch}}></JokeSear
  )
}

export default JokeSearchProvider
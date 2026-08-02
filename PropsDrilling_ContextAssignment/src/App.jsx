import React from 'react'
import Middle from './Middle'
import Context from "./Context"

const App = () => {
  return (
    <Context.Provider value="Dark">
      <div>
        <Middle/>
      </div>
    </Context.Provider>

  )
}

export default App

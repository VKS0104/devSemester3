import React, { useContext } from 'react'
import Context from './Context'

const Child = () => {
  const myContext = useContext(Context)
  return (
    <div>Current Theme: 
      {myContext}
    </div>
  )
}

export default Child

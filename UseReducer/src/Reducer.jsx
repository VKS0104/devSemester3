import React from 'react'
import { useReducer } from 'react';

const Reducer = () => {
  function reduser(state,action)
  {
  if(action.type=="inc")
  {
    return state+1;
  }
  else if(action.type=="dec")
  {
    return state-1;
  }
  else if(action.type=="reset")
  {
    return 0;
  }
  else
  {
    return state;
  }
}

  let [state,dispatch] = useReducer(reduser,0)

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=> dispatch({type:"inc"})}>add</button>
      <button onClick={()=> dispatch({type:"dec"})}>sub</button>
      <button onClick={()=> dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Reducer

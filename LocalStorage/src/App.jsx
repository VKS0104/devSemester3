import React, { act, useReducer } from 'react'

const App = () => {
  const storedList = JSON.parse(localStorage.getItem("key")) || [];

  const initialState = {
    input:"",
    list:storedList,
  }
  const [state,dispatch] =  useReducer(reduser,initialState)

  function reduser(state,action)
  {

    if(action.type == 'inp')
    {
      return{
        ...state,
        input:action.payload,
      }
    }
    if (action.type =="add")
    {
      const newList = [...state.list,state.input]
      localStorage.setItem("key",JSON.stringify(newList))
      return {
        ...state,
        list:[...state.list,state.input],
        input:""
      }
    }
  }
  
  return (
    <div>
      <input type="text" value={state.input} onChange={(e)=> dispatch({type:"inp",payload:e.target.value})}/>
      <button onClick={()=> dispatch({type:"add"})}>Add</button>
      {
        state.list.map((item, index) => (
        <p key={index}>{item}</p>
      ))
      }
    </div>
  )
}

export default App

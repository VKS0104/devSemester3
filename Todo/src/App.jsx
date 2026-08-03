// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [input,setInput] = useState("")
//   const [todos,setTodos] = useState([])
//   function handleChange(event){
//     setInput(event.target.value)
//   }

//   function handleClick()
//   {


//     setTodos([...todos,input])
//     setInput("")
//   }

  
//   return (
//     <div>
//       App
//       <input type="text" onChange={handleChange} />
//       <button onClick={handleClick}>Add</button>

//       {
//         todos.map((todo)=>{
//           return (
//             <div>{todo}</div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useReducer } from 'react'



const App = () => {

  let data = {
    input:"",
    list:[],
  }

  function reduser(state,action)
  {

    if(action.type=="inp")
    {
      return {
        ...state,
        input: action.payload
      }

    }
    else if(action.type == "add")
    {
      return {
        ...state,
        list: [...state.list,state.input],
        input: ""
      }
    }
    else if(action.type == "del")
    {
      return {
        ...state,
        list: state.list.filter((_,id)=> {
          return id!==action.payload
        })
      }

    }
    return state;
  }

  const [state,dispatch] = useReducer(reduser,data)
  return (
    <div>
      <input type="text" value={state.input} onChange={(e)=> dispatch({type:"inp",payload:e.target.value})}/>
      <button onClick={()=> dispatch({type:"add"})}>Add</button>
      {
        state.list.map((a,index)=>{
          return (
            <li key={index} onClick={(index)=> dispatch({type:"del",payload:index})}>{a}</li>
          )
        })
      }
    </div>
  )
}

export default App

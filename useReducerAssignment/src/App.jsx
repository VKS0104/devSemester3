// import React, { useReducer } from 'react'

// const App = () => {
//   const initialState = {
//     quantity:1,
//     message:"",
//   }
//   let [state,dispatch] = useReducer(reduser,initialState)

//   function reduser(state,action)
//   {
//     if (action.type === "add")
//     {
//       return {
//         ...state,
//         quantity:state.quantity+1,
//         message:"",
//       }
//     }
//     else if(action.type==="sub")
//     {
//       if(state.quantity <=1)
//       {
//         return {
//           ...state,
//           message:"The quantity should never go below one"
//         }
//       }
//       else
//       {
//         return {
//           ...state,
//           quantity:state.quantity-1,
//           message:"",
//         }
//       }
//     }
//   }

//   return (
//     <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//       <div>{state.message? state.message:state.quantity}</div>
//       <div>
//         <button onClick={()=> dispatch({type:"add"})}>+</button>
//         <button onClick={()=> dispatch({type:"sub"})}>-</button>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useReducer } from 'react'

const App = () => {
  
  const [state,dispatch] = useReducer(reduser,"red")
  function reduser(state,action)
  {
    if(action.type === "color")
    {
      if(state == "red")
      {
        return "yellow"
      }
      else if(state == "yellow")
      {
        return "green"
      }
      else if(state == "green")
      {
        return "red"
      }
    }
  }
  return (
    <div style={{backgroundColor:state, height:"100vh"}}>
      <button onClick={()=> dispatch({type:"color"})}>Click</button>
    </div>
  )
}

export default App


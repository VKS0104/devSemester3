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

// import React, { useReducer } from 'react'

// const App = () => {

//   const [state,dispatch] = useReducer(reduser,"red")
//   function reduser(state,action)
//   {
//     if(action.type === "color")
//     {
//       if(state == "red")
//       {
//         return "yellow"
//       }
//       else if(state == "yellow")
//       {
//         return "green"
//       }
//       else if(state == "green")
//       {
//         return "red"
//       }
//     }
//   }
//   return (
//     <div style={{backgroundColor:state, height:"100vh"}}>
//       <button onClick={()=> dispatch({type:"color"})}>Click</button>
//     </div>
//   )
// }

// export default App


// import React, { useReducer } from 'react'

// const App = () => {
//   const initialValue = {
//     item: "",
//     cart: [],
//   }
//   const [state, dispatch] = useReducer(reduser, initialValue)

//   function reduser(state, action) {
//     if (action.type === "input") {
//       return {
//         ...state,
//         item: action.payload
//       }
//     }
//     else if (action.type === "add") {
//       if (state.item.trim() === "") {
//         return state;
//       }
//       return {
//         ...state,
//         cart: [...state.cart, state.item],
//         item: "",
//       }
//     }
//   }
//   return (
//     <div>
//       <input type="text" value={state.item} onChange={(e) => dispatch({ type: "input", payload: e.target.value })} />
//       <button onClick={() => dispatch({ type: "add" })}>Add</button>

//       {
//         state.cart.map((e) => {
//           return (
//             <div>{e}</div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

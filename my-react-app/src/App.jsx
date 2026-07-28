// import React, { useState } from 'react'
// import Home from './Home.jsx';

// const App = () => {
//   let [count,setCount] = useState(0);
//   let [count2,setCount2] = useState(10);
//   const Increment = ()=>{
//     setCount(count+1);
//   }
//   const Decrement = ()=>{
//     setCount(count-1);
//   }
//   const Reset = ()=>{
//     setCount(0);
//   }
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Reset}>Reset</button>
//       <button onClick={Decrement}>Decrement</button>
//       <Home count2={count2} setCount2={setCount2}/>

//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {
  let [color,setColor] = useState("red");
  return (
    <div style={{backgroundColor:color, height:"100vh"}}>
      <button onClick={()=>setColor("gold")
      }>Change Background color</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
  let [color,setColor] = useState("red");
  const changeColor = ()=>{
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    setColor(`rgb(${a},${b},${c})`);
  }
  return (
    <div style={{backgroundColor: color,height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <button onClick={changeColor} style={{backgroundColor:"white", borderRadius:"24px", fontSize:"24px", height:"72px", width:"256px"
      }}>Change Background Color</button>
    </div>
  )
}

export default App

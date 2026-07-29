import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {
  let [count,setCount] = useState(0);
  let [data,setData] = useState([]);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      return res.json();
    }).then(
      (apiData)=>{
        console.log(apiData);
        
        setData(apiData);
      }
    )

  },[])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"12px"}}>
      {
        data.map((val)=>{
          return(
            <>
            <p style={{height:"96px",width:"96px",backgroundColor:"slateblue",border:"1px solid black",borderRadius:"8px",overflow:"scroll"}}>{val.title}</p>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default App

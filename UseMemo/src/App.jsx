import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import Child from './Child'
import Gchild from './Gchild';
const App = () => {
  const[count,setCount] = useState(0);

  const data = useMemo(()=>{
    let res=0;
    for(let i=1;i<1000000000;i++)
    {
      res+=i;
    }
    return res
  },[])

  let demo = ()=>{
    console.log("john banega don");
    
  }

  

  const call = useCallback(count,[])
  return (
    <div>
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count+1)}>+</button>
      <Child check={call} text={"kya??"}/>
      <Gchild/>
    </div>
  )
}

export default App

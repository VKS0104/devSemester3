import React, { useState } from 'react'
import { useEffect } from 'react';


const App = () => {

  let [count,setCount] = useState(0);
  let [tasks,setTasks] = useState([]);

  
  useEffect(()=>{
    let todo = ["Task1","Task2"]
    setTasks(todo)
  },[])

  let [newTodoValue ,setNewTodoValue] = useState("");
  function handleChange(event){

    setNewTodoValue(event.target.value)
  }

  function handleClick()
  {

    setTasks([...tasks,newTodoValue])
    setNewTodoValue("")
  }
  

  return (
    <div>
      <div>{count}</div>
      <Control count={count} setCount={setCount}/>

      <StudentCard name="Ved" rollNo="01" course="Btech"/>
      <StudentCard name="John" rollNo="81" course="Btech"/>
      <StudentCard name="Doe" rollNo="91" course="Btech"/>

      <Display count={count}/>
      <br />
      <input type="text" value={newTodoValue}onChange={handleChange}/>
      <Badge total={tasks.length}/>
      <button onClick={handleClick}>Add</button>
      {
        tasks.map((todos)=>{
          return(
            <div>
              {todos}
            </div>
          )
        })
      }

    </div>
  )
}

const StudentCard = ({name,rollNo,course})=>{
  return (
    <div>
      <div>Student Name:{name}</div>
      <div>Roll No.:{rollNo}</div>
      <div>Course: {course}</div>
    </div>
  )
}

const Display = ({count})=>{

  return(
    <div>
      <div>From child component:{count}</div>
    </div>
  )

}

const Control = ({count,setCount})=>{

  function handleChange(change)
  {
    const newCount = count + change;

    if(newCount>10)
    {
      setCount(10)
    }
    else if(newCount<0)
    {
      setCount(0)
    }
    else
    {
      setCount(newCount)
    }
  }

  return(
    <>
      <button onClick={()=> handleChange(1)}>Increment</button>
      <button onClick={()=> handleChange(-1)}>Decrement</button>
    </>
  )

}

const Badge = ({total})=>{
  return(
    <div>Total no. of Todos: {total}</div>
  )
}

export default App

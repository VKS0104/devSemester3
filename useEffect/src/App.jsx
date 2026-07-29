import React, { useEffect } from 'react'
import { useState } from 'react';

const App = () => {
  let [apiData,setApiData] = useState([]);
  let [filteredData,setFilteredData] = useState([]);
  let [visibleTodos,setVisibleTodos] = useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(
      (res)=>{
        return res.json();
      }
    ).then(
      (data)=>{
        setApiData(data);
        setVisibleTodos(data);
        console.log(data);
      }
    )
  },[])
  

  function filterByUserId(id)
  {
    setFilteredData(apiData.filter((a)=>{
      return a.userId!=id;
    }));
  }

  function filterById(id)
  {
    setVisibleTodos(visibleTodos.filter((a)=>{
      return (id!==a.id);
    }))
  }
  return (
    <div>
      <h1>Todos Assignment</h1>
      <h4>Solution 1:Displaying only the todos where completed is true</h4>
      {
        apiData.filter((a)=>{
          return a.completed;
        }).map((a)=>{
          return (
            <>
              <div>{a.id}:{a.title}</div>
            </>
          )
        })
      }
      <h4>Solution 2:Displaying only the first 10 on the screen (id and title)</h4>
      {
        apiData.slice(0,10).map(
          (a)=>{
            return (
              <div>{a.id}:{a.title}</div>
            )

          }
        )
      }
      <h4>Solution 3: When a button is clicked, showing only the todos belonging to that userId </h4>
      <button onClick={()=> filterByUserId(1)}>User 1</button>
      <button onClick={()=> filterByUserId(2)}>User 2</button>
      <button onClick={()=> filterByUserId(3)}>User 3</button>
      {
        filteredData.map((a)=>{
          return (
            <div>User id: {a.userId} Title:{a.title}</div>
          )
        })
      }
      <h4>Solution 4:Clicking Delete should remove only that todo from the screen, and the rest stays.</h4>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        {
          visibleTodos.map((a)=>{
            return (
              <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"lightcoral",height:"48px",padding:"12px"}}>
                <div>{a.title}</div>
                <button onClick={()=> filterById(a.id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>


  )
}

export default App

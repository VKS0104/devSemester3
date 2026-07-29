// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [apiData,setApiData] = useState([])
//   let [copy,setCopy] = useState([])
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/todos`).then(
//       (res)=>{
//         return res.json();
//       }
//     ).then((data)=>{
//       setApiData(data);
//       setCopy(data);
//     }
//     )
//   },[])
//   function deleteTodo(id){
//     setCopy(copy.filter((todo)=>{
//       return id!==todo.id;
//     }))
//     setApiData(copy.filter((todo)=>{
//       return todo.id!==id;
//     }))
//   }
//   function filterSearch(event)
//   {
//     let inputValue=event.target.value.trim();
//     inputValue=inputValue.toLowerCase();
//     setCopy(apiData.filter((todo)=>{
//       return (todo.title.toLowerCase().includes(inputValue));
//     }))
//   }
//   return (
//     <div>
//       <input type="text" placeholder='Search the Todo Task' onChange={filterSearch}/>
//       {
//         copy.map((todo)=>{
//           return (
//             <div style={{display:'flex',justifyContent:'space-between',backgroundColor:"lightblue",marginTop:"12px",padding:"12px",borderRadius:"12px"}}>
//                 <div key={todo.id}>{todo.title}</div>
//                 <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  let [apiData,setApiData] = useState([])
  let [searchTerm,setSearchTerm] = useState("")
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(
      (res)=>{
        return res.json();
      }
    ).then((data)=>{
      setApiData(data);
    }
    )
  },[])
  function deleteTodo(id){
    setApiData(apiData.filter((todo)=>{
      return todo.id!==id;
    }))
  }
  let filteredTodos = apiData.filter((todo)=>{
    return todo.title.toLowerCase().includes(searchTerm);
  })

  return (
    <div>
      <input type="text" placeholder='Search the Todo Task' onChange={(event)=>setSearchTerm(event.target.value.toLocaleLowerCase())}/>
      {
        filteredTodos.map((todo)=>{
          return (
            <div key={todo.id} style={{display:'flex',justifyContent:'space-between',backgroundColor:"lightblue",marginTop:"12px",padding:"12px",borderRadius:"12px"}}>
                <div>{todo.title}</div>
                <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App

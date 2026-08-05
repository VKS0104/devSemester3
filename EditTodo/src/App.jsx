import React, { useReducer } from 'react'

const App = () => {
  const initialState = {
    input:"",
    todos:[],
    editIdx:null,
    editText:""
  }
  const [state,dispatch] = useReducer(reduser,initialState)

  function reduser(state,action)
  {
    if(action.type == 'inp')
    {
      return {
        ...state,
        input:action.payload,
      }
    }
    else if(action.type =='add')
    {
      return {
        ...state,
        todos:[...state.todos,state.input],
        input:"",
      }
    }
    else if(action.type == 'del')
    {
      return {
        ...state,
        todos: state.todos.filter((a,id)=> id!==action.payload)
      }
    }
    else if(action.type == 'editing')
    {
      return {
        ...state,
        editIdx:action.payload,
        editText:state.todos[action.payload],
      }
    }
    else if(action.type =="typing")
    {
      return {
        ...state,
        editText:action.payload,
      }
    }
    else if (action.type =="confirm")
    {
      const update=[...state.todos]
      update[state.editIdx] = state.editText
      return {
        ...state,
        todos:update,
        editIdx:null,
        editText:""
      }
    }
    else
    {
      return state
    }
  }

  return (
    <div>
      <input type="text" value={state.input} onChange={(e)=> dispatch({type:'inp',payload:e.target.value})} />
      <button onClick={()=> dispatch({type:"add"})}>Add</button>

      {
        state.todos.map((a,index)=>{
          return (
            <div style={{display:'flex',justifyContent:'space-between',padding:"4px"}}>
              {
                state.editIdx === index ? (
                  <>
                    <input value={state.editText} onChange={(e)=> dispatch({type:"typing",payload:e.target.value})}/>
                    <div style={{display:"flex",justifyContent:'space-between',gap:"8px"}}>
                      <button onClick={()=> dispatch({type:'confirm',payload:index})}>Save</button>
                    </div>
                  </>
                ):(
                  <>
                    <div>{a}</div>
                    <div style={{display:"flex",justifyContent:'space-between',gap:"8px"}}>
                      <button onClick={()=> dispatch({type:'del',payload:index})}>Delete</button>
                      <button onClick={()=> dispatch({type:'editing',payload:index})}>Edit</button>
                    </div>
                  </>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default App

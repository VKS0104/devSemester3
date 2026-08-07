import React, { useEffect, useState } from 'react'

const App = () => {
  const [input,setInput] = useState("")
  const [apiData,setApiData] = useState([])
  const [showBrands,setShowBrands] =useState(false)

  async function handleClick()
  {

    if(input.trim()=="")
    {
      return alert("input field is empty")
    }
    const res = await fetch(`https://dummyjson.com/products/search?q=${input}`)
    const data = await res.json()
    console.log(data);
    setApiData(data)
    
  }

  useEffect(()=>{
    fetch(`https://dummyjson.com/products`).then(
      (res)=>{
        return res.json()
      }
    ).then(
      (data)=>{
        console.log(data);
        setApiData(data)
        
      }
    )
  },[])

  function asc(){
    const copy=[...apiData.products]
    copy.sort((a,b)=>{
      return a.price-b.price;
    })
    setApiData({
      ...apiData,
      products:copy
    })
  }

  function des(){
    const copy=[...apiData.products]
    copy.sort((a,b)=>{
      return b.price-a.price;
    })
    setApiData({
      ...apiData,
      products:copy
    })
  }

  let copy = [...(apiData.products || [])]
  let brandArray = copy.map((a)=>{
    return a.brand;
  })

  function filterData(brand)
  {
    const copy=[...(apiData.products || [])]
    const filtered= copy.filter((a)=>{
      return a.brand==brand;
    })
    setApiData({
      ...apiData,
      products:filtered
    })
  }

  return (
    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleClick}>Search</button>
      <button onClick={asc}>Ascending</button>
      <button onClick={des}>Descending</button>
      <label>Filter by Category:</label>
      <select onChange={(e) => setShowBrands(e.target.value === "Brand")}>
        <option value="all">Show All</option>
        <option value="Brand">Brand Name</option>
      </select>
      {
        showBrands ? (
          brandArray.map((a)=>{
            return(
              <div onClick={()=> filterData(a)}>{a}</div>
            )
          })
        ):
        (
          <></>
        )
      }

      
      {
      apiData?.products?.map((a)=>{
        return(
          <>
          <img src={a.thumbnail} alt="" style={{height:"100px",width:"100px"}}/>
          <div>Price:{a.price}</div>
          <div>Title:{a.title}</div>
          </>
        )
      })
    }
    </div>
    
  )
}

export default App

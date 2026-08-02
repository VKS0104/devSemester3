import { useNavigate } from 'react-router-dom'

const Products = () => {

  let navi = useNavigate()

  const products = [{
    id:1,
    name:"iPhone 17 ProMax",
    price: 120000
  },
  {
    id:2,
    name:"Samsung S24",
    price: 80000
  },
  {
    id:3,
    name:"OnePlus 15R",
    price: 85000
  }
]

function fun1(id)
{
  navi(`/p/${id}`)
}
  return (
    <div>
      {
        products.map((pro)=>{
          return (
            <li key={pro.id} onClick={()=> fun1(pro.id)}>{pro.name}</li>
          )
        })
      }
    </div>
  )
}

export default Products

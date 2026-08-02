import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  let {id} = useParams()


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

let data = products.find((a)=>{
  return a.id==id;
})
  return (
    <div>
      {data?.name}
    </div>
  )
}

export default ProductDetails

import Navbar from './Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import ProductDetails from './ProductDetails.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/list' element={<Products/>}></Route>
        <Route path='/p/:id' element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App

// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App


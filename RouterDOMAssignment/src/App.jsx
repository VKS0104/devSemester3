import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>

      </Routes>
    </div>
  )
}

export default App

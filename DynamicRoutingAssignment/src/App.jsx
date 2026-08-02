import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import StudentList from './StudentList'
import StudentDetails from './StudentDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/StudentList' element={<StudentList/>}></Route>
        <Route path='/StudentDetails/:id' element={<StudentDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App

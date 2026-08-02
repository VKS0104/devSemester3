import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      This is the Home Page Click her to check the 
      <Link to={"./StudentList"}><li>Student List</li></Link>
    </div>
  )
}

export default Home

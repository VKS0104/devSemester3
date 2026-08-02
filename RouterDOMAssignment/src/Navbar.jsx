import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}><li>Home</li></Link>
      <Link to={"/about"}><li>About</li></Link>
      <Link to={"contact"}><li>Contact Us</li></Link>
      <Link to={"/services"}><li>Services</li></Link>
    </div>
  )
}

export default Navbar

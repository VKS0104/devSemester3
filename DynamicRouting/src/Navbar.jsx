import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{backgroundColor:"lightblue",display:"flex",justifyContent:"space-between",padding:"12px",borderRadius:"12px"}}>
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'/about'}><li>About Us</li></Link>
      <Link to={'/list'}><li>List</li></Link>
    </div>
  )
}

export default Navbar

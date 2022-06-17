import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
       <NavLink to="/Home">Home</NavLink>
       <NavLink to="/About">About</NavLink>
       <NavLink to="/Final">Main</NavLink>
    </div>
  )
}

export default NavBar
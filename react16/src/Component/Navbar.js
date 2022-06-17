import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
const navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/Main">Main</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Main">Main</NavLink>
        {/*className={({ isActive }) => (isActive? "esta-ativo" : "não-ativo")}*/}
    </nav>
  )
}

export default navbar
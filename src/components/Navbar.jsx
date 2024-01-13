// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return <nav>
    <ul>
        <li><NavLink className={ ({isActive}) => isActive ? "active" : "noActive"} to="/">Home</NavLink></li>
        <li><NavLink className={ ({isActive}) => isActive ? "active" : "noActive"} to="/searchHolidayByCountry">Search Holidays by Country</NavLink></li>
    </ul>
  </nav>
}

export default Navbar

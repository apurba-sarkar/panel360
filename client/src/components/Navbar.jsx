import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div>logo</div>
        <div>
          header
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/service">Service</NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

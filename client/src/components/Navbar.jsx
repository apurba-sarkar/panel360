import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  // console.log(!isLoggedIn);

  return (
    <div>
      <header>
        <div>logo</div>
        <div>
          header
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/home">Home</NavLink>
          {isLoggedIn ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink to="/logout">Logout</NavLink>
          )}
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/service">Service</NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

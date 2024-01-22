import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../styles/navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  // console.log(!isLoggedIn);

  return (
    <div>
      <header className="mobileheader">
        <div>
          <a href="/">
            <img className="herologo" src="/logo.png" alt=""  />
          </a>
        </div>
        <div className="secondheader">
          <ul>
            <li>
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/service">
                Service
              </NavLink>
            </li>
            <li>
              {isLoggedIn ? (
                <NavLink to="/login" className="link">
                  Login
                </NavLink>
              ) : (
                <NavLink to="/logout" className="link">
                  Logout
                </NavLink>
              )}
            </li>
            <li>
              {isLoggedIn ? (
                <NavLink to="/register" className="link">
                  Register
                </NavLink>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

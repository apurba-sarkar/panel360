import { useState } from "react";
const URL = "http://localhost:5000/api/auth/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const { storetoken } = useAuth();
  const initialState = {
    email: "",

    password: "",
  };
  const [user, setUser] = useState(initialState);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      if (response.ok) {
        alert("login successfull");
        const res_data = await response.json();
        storetoken(res_data.token);
        console.log(res_data.token);
        window.location.reload();
        navigate("/");
      } else {
        alert("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
    // setUser(initialState);
  };

  return (
    <div>
      <form>
        <div>Register</div>
        <h1>Register form</h1>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              id="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              id="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
        </div>
        <button onClick={handleSubmit}> Login now</button>
      </form>
    </div>
  );
};

export default Login;

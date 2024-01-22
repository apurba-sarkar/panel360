import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () => {``
  const initialState = {
    username: "",
    email: "",
    phone: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const {storetoken} = useAuth();

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
    // setUser(initialState);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // setUser(initialState);
        alert("register successfull")
        navigate("/login");
        const res_data = await response.json();
        console.log("respose json data from server", res_data);
        storetoken(res_data.token);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div>Register</div>
      <h1>Register form</h1>
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="enter your username"
            id="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
          />
        </div>
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
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="enter your phone"
            id="phone"
            required
            autoComplete="off"
            value={user.phone}
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
      <button onClick={handleSubmit}> Register now</button>
    </form>
  );
};

export default Register;

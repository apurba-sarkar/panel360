import { useState } from "react";

const Contact = () => {
  const initialState = {
    username: "",
    password: "",
    message: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser(initialState);
  };
  return (
    <div>
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
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="enter your message"
              id="message"
              required
              value={user.message}
              onChange={handleInput}
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button onClick={handleSubmit}> Login now</button>
      </form>
    </div>
  );
};

export default Contact;

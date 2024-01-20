import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const storetoken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !token;
  // logout functionality

  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // authernitaced user data

  const userAuthenticaton = async () => {
    try {
      const response = await fetch("localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ storetoken, logoutUser, isLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

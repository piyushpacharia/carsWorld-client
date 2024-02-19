
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
  const SignIn = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem("coinInflation", JSON.stringify(response.data));
        setUser(response.data);
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const Register = async (name, email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        navigate("/");
        alert("Sign up successful");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const Logout = () => {
    setUser(null);
    localStorage.removeItem("coinInflation");
    navigate("/");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("coinInflation");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate("/Home");
    }
    setLoading(false); 
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <AuthContext.Provider
      value={{
        user,
        SignIn,
        Register,
        Logout,
        BASE_URL
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

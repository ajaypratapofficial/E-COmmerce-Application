import { useState, useEffect, useContext, createContext } from "react";
// useEffect to get the value at initial time
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
  // data which need to transfer 
  // state for user and token 
  // inside AuthProvider, so that we can use it globally by the help of AUthProvider
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  
  return (

    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
  
};

// custom hook // we can use useAuth in any component
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

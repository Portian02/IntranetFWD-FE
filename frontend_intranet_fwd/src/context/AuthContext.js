import { useState, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const list = [];
  list.push();

  return (
    <AuthContext.Provider value={{ auth, setAuth, list }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
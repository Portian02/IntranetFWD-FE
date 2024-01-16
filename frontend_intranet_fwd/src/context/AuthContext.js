import { useState, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState({});
  

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
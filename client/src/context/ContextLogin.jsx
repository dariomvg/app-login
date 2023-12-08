import { createContext, useState } from "react";

export const ContextLogin = createContext();

const LoginProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <ContextLogin.Provider value={{ auth, setAuth }}>
      {children}
    </ContextLogin.Provider>
  );
};

export default LoginProvider; 
import { createContext, useState, useContext } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [jwt, setJwt] = useState("");
  const [userId, setUserId] = useState("");
  const [useName, setUserName] = useState("");
  const [isLoggedIb, setLoggedIn] = useState(false);

  return (
    <Context.Provider
      value={{
        jwt,
        setJwt,
        userId,
        setUserId,
        useName,
        setUserName,
        isLoggedIb,
        setLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(Context);
  const {
    jwt,
    setJwt,
    userId,
    setUserId,
    useName,
    setUserName,
    isLoggedIb,
    setLoggedIn,
  } = context;
  return {
    jwt,
    setJwt,
    userId,
    setUserId,
    useName,
    setUserName,
    isLoggedIb,
    setLoggedIn,
  };
};

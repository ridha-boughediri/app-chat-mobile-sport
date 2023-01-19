
import { createContext, useState, useEffect } from "react";

export const Context = createContext();

function getInitialState() {
  const jwt = localStorage.getItem("jwt");
  // secure store rzmplacer 
  return jwt || null
}


function getInitialState() {
  const user_id = localStorage.getItem("user_id");
  return user_id || null
}


export const ContextProvider = ({ children }) => {

  const [user_id,setUser_id] =useState(getInitialState());
  const [jwt,setJwt]=useState(getInitialState());

  const changeFirst = (value)=>{
    setFirst(value);
  };
// pour capte les changement de mes jwt 
  useEffect(() => {
    localStorage.setItem('jwt', jwt)
  },
  [jwt])

  console.log(jwt);

  return (
    <Context.Provider value={{user_id,setUser_id,  jwt,setJwt}}>
      {children}
    </Context.Provider>
  );
};




import React, { createContext, useState } from "react";

export let tokenContext = createContext(null);

export default function TokenProvider({children}) {
  let [token , setToken] = useState(localStorage.getItem('token') || null)
  function logOut (){
    setToken(null)
    localStorage.removeItem("token")
  }

  return (
    <>
      <tokenContext.Provider value={{token , setToken , logOut}}>
        {children}
      </tokenContext.Provider>
    </>
  );
}

import React, { Children, useContext } from "react";
import { tokenContext } from "../Context/TokenProvider";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  let { token, setToken } = useContext(tokenContext);
  let location = useLocation();


  if (token == null) {
    return <Navigate to={"/login"} state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}

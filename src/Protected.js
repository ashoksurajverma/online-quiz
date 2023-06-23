import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children, path }) {
  const user = JSON.parse(localStorage.getItem("user"));
  //   const beforeLogin = ["/", "/signup"];
  //   const afterLogin = ["/quiz"];
  console.log(user, "===================", path);
  if (!user && (path === "/dashboard" || path === "/thanks")) {
    return <Navigate to="/" replace />;
  } else if (user && (path === "/" || path === "/signup")) {
    return <Navigate to="/quiz" replace />;
  }

  return children;
}
export default Protected;

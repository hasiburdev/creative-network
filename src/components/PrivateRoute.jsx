import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { isLoggedIn, isCheckingStatus } = useAuthStatus();

  if (isCheckingStatus) {
    return "Loading...";
  }
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
